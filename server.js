const express = require('express');
const mongoose = require('mongoose');

const config = require('./dataConfig');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const app = express();

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

//app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server Running');
