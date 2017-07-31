const bodyParser = require('body-parser');
const generateID = require('uniqid');

const Messages = require('../models/messageModels');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/newma', (req, res) => {
    const newMessage = Messages({
      id: generateID(),
      mComment: req.body.mCommment,
      content: req.body.content,
    });

    newMessage.save((err) => {
      if (err) throw err;
      res.send('Success');
    });
  });
};
