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
		shopownerid: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		shopname: {
			type: String,
		},
		shoplogo: {
			type: String,
		},
		shoplocation: {
			type: String,
		},
		shopphonenumber: {
			type: String,
		},
		shopcoordinate: {
			latitude: {
				type: String,
			},
			longitude: {
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
