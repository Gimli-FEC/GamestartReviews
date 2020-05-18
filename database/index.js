const mysql = require('mysql');

const db = mysql.createConnection({
  host: '52.91.162.130',
  user: 'root',
  password: 'hrr45-jay',
  port: 3306,
  database: 'gamestart',
});

db.connect();

function getReviews({
  id, sort, order, offset, numPerPage,
}, cb) {
  db.query(`SELECT * from reviews r, users u WHERE r.user_id = u.id AND r.product_id = ${id} ORDER BY ${sort} ${order} LIMIT ${offset}, ${numPerPage}`, (err, data) => {
    if (err) {
      console.log(`Error retrieving records from database: ${err}`);
      cb(err);
    }
    cb(null, data);
  });
}

function getCount({ id, stars }, cb) {
  const starString = stars ? ` AND rating_overall = ${stars}` : null;
  db.query(`SELECT count(*) from reviews r, users u WHERE r.user_id = u.id AND r.product_id = ${id}${starString}`, (err, data) => {
    if (err) {
      console.log(`Error retrieving records from database: ${err}`);
      cb(err);
    }
    cb(null, data);
  });
}
module.exports = {
  getReviews, getCount, db,
};
