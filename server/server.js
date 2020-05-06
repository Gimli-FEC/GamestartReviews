const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/:id', ({ params: { id } }, res) => {
  db.getReviews(id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
