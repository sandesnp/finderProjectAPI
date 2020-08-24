//Requirements
const express = require('express');
const mongoose = require('mongoose');
const dotevn = require('dotenv').config();
const cors = require('cors');

//Routes
const RouteUser = require('./routes/route_user');
const RouteShop = require('./routes/route_shop');
const RouteImage = require('./routes/image_upload');

//Using
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); //two underscore
app.options('*', cors());
app.use(cors());

mongoose
	.connect(process.env.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then((db) => {
		console.log('Successfully Connected to a mongoDB server');
	});

app.use('/user', RouteUser);
app.use('/shop', RouteShop);
app.use('/upload', RouteImage);

app.listen(process.env.PORT, () => {
	console.log(`Application is running in locahost:${process.env.PORT}`);
});
