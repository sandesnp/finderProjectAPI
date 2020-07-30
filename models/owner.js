const mongoose = require('mongoose');
const ownerSchema = new mongoose.Schema(
	{
		ownername: {
			type: String,
		},
		owneraddress: {
			type: String,
		},
		ownerphonenumber: {
			type: String,
		},
		owneremail: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Owner', ownerSchema);
