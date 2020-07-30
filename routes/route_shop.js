const express = require('express');
const router = express.Router();
const SHOP = require('../models/shop');

router.post('/', (req, res, next) => {
	SHOP.create(req.body)
		.then((shopA) => {
			res.json(`Shop is Registered for => ${shopA.shopowner}`);
			console.log({
				status: `Shop Registered for ${shopA.sh}`,
				Date: Date.now(),
			});
		})
		.catch(next);
});

module.exports = router;
