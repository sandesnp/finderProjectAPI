const express = require('express');
const router = express.Router();
const SHOP = require('../models/shop');
const userAUTH = require('./Auth');

router.post('/', userAUTH.verifyUser, (req, res, next) => {
	let SHOPA = new SHOP(req.body);
	SHOPA.shopownerid = req.user._id;
	SHOPA.save()
		.then((shopA) => {
			res.json(shopA);
			console.log({
				status: `Shop Registered for ${shopA.shopname}`,
				Date: Date.now(),
			});
		})
		.catch(next);
});

module.exports = router;
