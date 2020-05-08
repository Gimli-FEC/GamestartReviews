import React from 'react';
import renderer from 'react-test-renderer';
import NameDate from '../client/components/NameDate';

it('checks if NameDate matches snapshot', () => {
  const component = renderer.create(
    <NameDate name="Robin Kim" date="2020-04-09T04:00:00.000Z" age={4} purchaseType={1} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
