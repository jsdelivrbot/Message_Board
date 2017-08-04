const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const generateID = require('uniqid');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

const data = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.js'));
});

app.post('/api/todoItem', (req, res) => {
  const id = req.body.id;
  const text = req.body.title;
  const content = req.body.content;
  data.forEach((item) => {
    if (list.listID === id) {
      list.listContent.push({ id: uuid(), text, time });
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running (Port ${port})`));
