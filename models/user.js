const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
	{
		userfullname: {
			type: String,
		},
		useraddress: {
			type: String,
		},
		userphonenumber: {
			type: String,
		},
		usermail: {
			type: String,
		},
		password: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('User', userSchema);
