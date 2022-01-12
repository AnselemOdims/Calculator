/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import Output from '../components/Output';

describe('Button', () => {
	const sym = '+';
	const selector = ['digits', 'orange'];
	const handleClick = () => {};
	const button = renderer.create(
		<Button sym={sym} handleBtnClick={handleClick} selector={selector} />
	);
	let tree = button.toJSON();

	test('Button mounts when called', () => {
		expect(tree).toMatchSnapshot();
	});

	test('onClick function works properly', () => {
		tree.props.onClick();
		tree = button.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Output', () => {
	const total = '0';
	const operation = '+';
	const next = '0';
	test('Output display appropriately', () => {
		const output = renderer.create(
			<Output total={total} operation={operation} next={next} />
		);
    const tree = output.toJSON();
    expect(tree).toMatchSnapshot();
	});
});
