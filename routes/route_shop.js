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

router.get('/', userAUTH.verifyUser, (req, res, next) => {
	SHOP.find({ shopownerid: req.user._id })
		.then((userA) => {
			res.json(userA);
			console.log({ request: 'GET Shop', Date: Date.now() });
		})
		.catch(next);
});

createItem = (req, res) => {
	SHOP.findById(req.params.id).then((data) => {
		data.shopitems.push(req.body);
		data.save().then((created) => {
			res.json({ status: 'Inserted an Item for the Chosen Shop' });
			console.log(`Created Item ${req.body.itemname} for ${req.params.id}`);
		});
	});
};

router.post('/:id/item', userAUTH.verifyUser, (req, res, next) => {
	try {
		SHOP.findOne({
			_id: req.params.id,
			shopitems: {
				$elemMatch: { itemname: req.body.itemname },
			},
		}).then((data) => {
			if (!data) {
				createItem(req, res);
			} else {
				res.json({ status: 'This iteam is already Inserted in this Shop.' });
				console.log({ status: 'This iteam is already Inserted in this Shop.' });
			}
		});
	} catch (e) {
		console.log(e);
		res.json(e);
	}
});

module.exports = router;
