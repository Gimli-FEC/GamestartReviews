var faker = require('faker/locale/en_US');
var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'gamestart'
})

db.connect();

for (let i=0; i<1000; i++) {
    let user = {
        name: faker.internet.userName(),
        age: Math.floor(Math.random()*5), // one of five age ranges 13-18, 18-24, 25-34, 35-44, 45+
        avatar: faker.internet.avatar()
    }

    db.query('INSERT INTO users SET ?', user, () => console.log('user entered'));
}

for (let i=1; i<101; i++) {
    for (let j=1; j<11; j++) {
        let review = {
            product_id: i,
            user_id: (i-1) * 10 + j,
            date: faker.date.past(2),
            body: faker.lorem.paragraphs(Math.floor(Math.random()*3)+1, "\n"),
            recommended: Math.floor(Math.random()*2),
            purchase_type: Math.floor(Math.random()*2),
            rating_overall: Math.floor(Math.random()*5)+1,
            rating_graphics: Math.floor(Math.random()*5)+1,
            rating_gameplay: Math.floor(Math.random()*5)+1
        }

        db.query('INSERT INTO reviews SET ?', review, (err) => {
            if (err) console.log(err);
            else console.log('review entered');
        });
    }
}

db.end();