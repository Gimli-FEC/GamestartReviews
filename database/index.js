var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'gamestart'
})

db.connect();

module.exports.getReviews = function(id, cb) {
    db.query('SELECT * from reviews r, users u WHERE r.user_id = u.id AND r.product_id = ?', id, (err, data) => {
        if (err) {
            console.log ('Error retrieving records from database: ' + err);
            cb(err);
        }
        cb(null, data);
    })

}
