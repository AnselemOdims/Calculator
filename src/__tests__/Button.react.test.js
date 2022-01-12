/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Button', () => {
  const sym = '+';
  const selector = ['digits', 'orange'];
  const handleClick = () => {};
  const component = renderer.create(
    <Button sym={sym} handleBtnClick={handleClick} selector={selector} />
  );
  let tree = component.toJSON();

  test('Button mounts when called', () => {
    expect(tree).toMatchSnapshot();
  });

  test('onClick function works properly', () => {
    tree.props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
