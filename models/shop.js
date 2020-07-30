const mongoose = require('mongoose');

const shopItems = new mongoose.Schema({
	itemname: {
		type: String,
	},
	itemdescription: {
		type: String,
	},
	itemtype: {
		type: String,
	},
	itembrand: { type: String },
});

const shopSchema = new mongoose.Schema(
	{
		shopowner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Owner',
		},
		shopname: {
			type: String,
		},
		shoplogo: {
			type: String,
		},
		shopcoordinate: {
			type: String,
		},
		shopLocation: {
			lati: {
				type: String,
			},
			long: {
				type: String,
			},
			marker: {
				type: String,
			},
		},
		shopitems: [shopItems],
	},
	{ timestamp: true }
);
module.exports = mongoose.model('Shop', shopSchema);
