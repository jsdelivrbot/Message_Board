const Messages = require('../models/messageModels');
const generateID = require('uniqid');

module.exports = (app) => {
  app.get('/api/setupMessages', (req, res) => {
    const starterMessages = [
      {
        id: generateID(),
        mComment: 'test',
        content: [
          {
            id: generateID(),
            sComment: 'alsotestA',
          }, {
            id: generateID(),
            sComment: 'alsotestB',
          },
        ],
      },
    ];

    Messages.create(starterMessages, (err, results) => res.send(results));
  });
};
