import React from 'react';
import renderer from 'react-test-renderer';
import Body from '../client/components/Body';

it('checks if Body matches snapshot', () => {
  const component = renderer.create(
    <Body title="A Test Review" body="Loved it! Buy the Story Train right now. www.story-train.com" recommended="1" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
