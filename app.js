const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = require('./src/back/Services/servicesGeneric');
const cards = require('./src/back/Services/cardService');
const categories = require('./src/back/Services/categorieService');
const uridb = 'mongodb+srv://foxRoute:perfec1023@cluster-one-vsj8e.mongodb.net/ON_NATURE?retryWrites=true&w=majority';

/**
 * this function set a port from system or defaul for the aplication
 * @param {String} port
 * @param {Number} Integer
 */
app.set('port', process.env.PORT || 3000);

/**
 * read and send JSON format
 */
app.use(express.json());

/**
 * this function inicialize the routes
 * @param {String} primariRouter
 * @param {Object} router
 */
app.use('/', router);
app.use('/cards/', cards);
app.use('/categories/', categories);

/**
 * this function inicialize the routes
 * @param {String} primariRouter
 * @param {Object} router
 */
app.use(express.static(path.join(__dirname)));

/**
 * this function inicialize the connection with MongoDB 
 * @param {String} url
 * @param {Object} options
 */
mongoose
    .connect(uridb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connnection successful!'))
    .catch(function (err) {
        console.log('fatal', err);
    });

/**
 * this function inicialize the server for the aplication 
 * @param {Number} port
 */
app.listen(app.get('port'));