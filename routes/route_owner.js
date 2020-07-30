const express = require('express');
const router = express.Router();
const OWNER = require('../models/owner');

router.post('/', (req, res, next) => {
	OWNER.create({
		ownername: req.body.ownername,
		owneraddress: req.body.owneraddress,
		ownerphonenumber: req.body.ownerphonenumber,
		owneremail: req.body.owneremail,
	})
		.then((ownerA) => {
			res.json(ownerA);
			console.log({
				status: `Owner Created for ${ownerA.ownername}`,
				Date: Date.now(),
			});
		})
		.catch(next);
});

module.exports = router;
