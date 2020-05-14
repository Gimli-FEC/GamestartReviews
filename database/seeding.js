const faker = require('faker/locale/en_US');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gamestart',
});

db.connect();

for (let i = 0; i < 1000; i += 1) {
  const user = {
    name: faker.internet.userName(),
    age: Math.floor(Math.random() * 5), // one of five age ranges 13-18, 18-24, 25-34, 35-44, 45+
    gender: Math.floor(Math.random() * 2),
    location: `${faker.address.city()}, ${faker.address.state()}`,
    avatar: faker.internet.avatar(),
  };

  db.query('INSERT INTO users SET ?', user, () => console.log('user entered'));
}

for (let i = 1; i < 101; i += 1) {
  for (let j = 1; j < 11; j += 1) {
    const review = {
      product_id: i,
      user_id: i * j,
      date: faker.date.past(2),
      title: faker.hacker.phrase(),
      body: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1, '\n'),
      recommended: Math.floor(Math.random() * 2),
      purchase_type: Math.floor(Math.random() * 2),
      verified: Math.floor(Math.random() * 2),
      rating_overall: Math.floor(Math.random() * 5) + 1,
      rating_graphics: Math.floor(Math.random() * 5) + 1,
      rating_gameplay: Math.floor(Math.random() * 5) + 1,
      rating_appeal: Math.floor(Math.random() * 5) + 1,
      helpful_yes: Math.floor(Math.random() * 500),
      helpful_no: Math.floor(Math.random() * 500),
    };

    db.query('INSERT INTO reviews SET ?', review, (err) => {
      if (err) console.log(err);
      else console.log('review entered');
    });
  }
}

db.end();
