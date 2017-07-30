const express = require('express');
const mongoose = require('mongoose');

var config = require('./dataConfig'); 
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();


mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server Running');