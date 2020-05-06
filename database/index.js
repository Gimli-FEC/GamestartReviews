const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gamestart',
});

db.connect();

function getReviews(id, cb) {
  db.query('SELECT * from reviews r, users u WHERE r.user_id = u.id AND r.product_id = ?', id, (err, data) => {
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
