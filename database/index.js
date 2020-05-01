const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'gamestart',
});

db.connect();

function getReviews(id, cb) {
  db.query('SELECT * from reviews, users WHERE reviews.user_id = users.id AND reviews.product_id = ?', id, (err, data) => {
    if (err) {
      console.log(`Error retrieving records from database: ${err}`);
      cb(err);
    }
    cb(null, data);
  });
}

module.exports = {
  getReviews,
};
