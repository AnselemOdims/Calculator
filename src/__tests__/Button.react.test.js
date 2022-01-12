/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('Button mounts when called', () => {
	const sym = '+';
	const selector = ['digits', 'orange'];
	const handleClick = () => handleClick(sym);
	const component = renderer.create(
		<Button sym={sym} handleBtnClick={handleClick} selector={selector} />
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
