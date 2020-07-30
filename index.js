//Requirements
const express = require('express');
const mongoose = require('mongoose');
const dotevn = require('dotenv').config();
const cors = require('cors');

//Routes
const RouteOwner = require('./routes/route_owner');
const RouteShop = require('./routes/route_shop');

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

app.use('/owner', RouteOwner);
app.use('/shop', RouteShop);
app.listen(process.env.PORT, () => {
	console.log(`Application is running in locahost:${process.env.PORT}`);
});
