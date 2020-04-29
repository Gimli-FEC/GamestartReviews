var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'gamestart'
})

db.connect();

