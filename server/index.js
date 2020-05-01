const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

app.get('/:id', ({ id }, res) => {
  db.getReviews(id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});
