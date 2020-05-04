import React from 'react';

const test = require('jest');
const app = require('./client/index.jsx');

test('pulls id from URL query params', () => {
  testURL('http://localhost:3003/?id=33');
  expect(app.getIdFromURL()).toBe('33');
});

test('pulls id from URL query params', () => {
  testURL('http://localhost:3003/?id=33');
  expect(getIdFromURL()).toBe('33');
});