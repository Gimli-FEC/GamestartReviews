import React from 'react';
import renderer from 'react-test-renderer';
import Stars from '../client/components/Stars';

it('checks if Stars matches snapshot', () => {
  const component = renderer.create(
    <Stars ratingOverall="3" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
