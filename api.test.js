import React from 'react';
import App from './client/components/App'
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render} from '@testing-library/react';

// import { App } from './client';
 
test('Fake Test', () => { expect(true).toBeTruthy(); });

// describe('App', () => {
//   test('snapshot renders', () => {
//     const component = renderer.create(<App />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   })
// })

test('App renders correctly', () => {
  const component = renderer.create(<App />,);
  let tree=component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});


