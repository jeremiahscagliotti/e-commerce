//server
const express = require('express');
const app = express();
//body-parser
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
const path = require('path');
app.use(express.static(path.join(__dirname, '/static')));
const mongoose = require('mongoose');
app.use(express.static(__dirname + '/AngularApp/dist'));
mongoose.connect('mongodb://localhost/examTwo');
//
const UserController = require('./controllers/UserController');
app.use('/users', UserController);
const ProductController = require('./controllers/ProductController');
app.use('/products', ProductController)
module.exports = app;

//server
var server = app.listen(8000, () => {
    console.log("Listening on 8000")
});