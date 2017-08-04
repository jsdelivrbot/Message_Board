const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const config = require('./dataConfig');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.js'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running (Port ${port})`));
