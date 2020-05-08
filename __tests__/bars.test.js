import React from 'react';
import renderer from 'react-test-renderer';
import Bars from '../client/components/Bars';

it('checks if Bars matches snapshot', () => {
  const component = renderer.create(
    <Bars ratingGraphics="3" ratingGameplay="4" ratingAppeal="5" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
