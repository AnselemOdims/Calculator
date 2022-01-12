import React from 'react';
import renderer from 'react-test-renderer';
import Button from './src/components/Button.react';

test('Button mounts when called', () => {
  const component = renderer.create(<Button>+</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
