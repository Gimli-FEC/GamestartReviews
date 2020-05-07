import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../client/components/Avatar';

it('checks if Avatar matches snapshot', () => {
  const component = renderer.create(
    <Avatar avatar="https://s3.amazonaws.com/uifaces/faces/twitter/patrickcoombe/128.jpg" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
