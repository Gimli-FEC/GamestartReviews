const express = require('express');
const path = require('path');
// const cors = require('cors');
const db = require('../database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const API_URL = '/reviews';

app.use(express.static(path.join(__dirname, '../public')));

// app.use(cors({
//   origin: 'http://ec2-54-84-194-85.compute-1.amazonaws.com:3001/',
// }));

app.get(`${API_URL}/:id/:sort/:order/:offset/:numPerPage`, ({ params }, res) => {
  db.getReviews(params, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get(`${API_URL}/count/:id/:stars?`, ({ params }, res) => {
  db.getCount(params, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

module.exports = app;
