// use the path of your model
const User = require('../models/user');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://127.0.0.1/finderProject';
beforeAll(async () => {
	await mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
	});
});

afterAll(async () => {
	await mongoose.connection.close();
});

describe('User  Schema test', () => {
	// the code below is for insert testing
	it('Add User is registered', () => {
		return User.create({
			userfullname: 'testing test',
			useremail: 'test@yahoo.com',
			password: '5432',
		}).then((test) => {
			expect(test.useremail).toEqual('test@yahoo.com');
		});
	});
});
