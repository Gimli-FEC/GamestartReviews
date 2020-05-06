const supertest = require('supertest');
const app = require('../server/server.js');
const reviewsJSON = require('./reviews.json');

const request = supertest(app);

it('gets the api endpoint', async (done) => {
  const response = await request.get('/33');
  expect(response.status).toBe(200);
  expect(response.body).toMatchObject(reviewsJSON);
  done();
});
