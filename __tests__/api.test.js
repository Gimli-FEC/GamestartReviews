const supertest = require('supertest');
const api = require('../server/server.js');
const reviewsJSON = require('./reviews.json');
const database = require('../database');

const request = supertest(api);

it('gets the api endpoint', async (done) => {
  const response = await request.get('/33');
  database.db.end();
  expect(response.status).toBe(200);
  expect(response.body).toMatchObject(reviewsJSON);
  done();
}, 5000);
