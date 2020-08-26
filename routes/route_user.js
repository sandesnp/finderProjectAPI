const express = require('express');
const router = express.Router();
const USER = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
	USER.findOne({ email: req.body.useremail })
		.then((usersA) => {
			if (usersA != null) {
				let err = new Error(
					'This email has been already used for Registration.'
				);
				err.status = 401;
				return next(err);
			} else {
				bcrypt.hash(req.body.password, 10, function (err, hash) {
					if (err) {
						throw new Error('Could not encrypt Password!');
					}
					let USERA = new USER({
						userfullname: req.body.userfullname,
						useremail: req.body.useremail,
					});
					USERA.password = hash;
					USERA.save().then((usersB) => {
						let token = jwt.sign({ userID: usersB._id }, process.env.SECRET);
						res.json({ status: 'Signup Success!', token: token });
					});
				});
			}
		})
		.catch(next);
	console.log('Signup Post');
});

router.get('/:email', (req, res, next) => {
	USER.findOne({ useremail: req.params.email }).then((userA) => {
		if (userA) {
			//if email doesn't exist
			let token = jwt.sign({ userID: userA._id }, process.env.SECRET);
			res.json({ status: 'Successfully logged in', token: token });
			console.log({ status: 'Email Existence Checked', Date: Date.now() });
			return;
		} else {
			res.json({ status: '', token: '' });
			console.log('No such Email Exist');
		}
	});
});
module.exports = router;
