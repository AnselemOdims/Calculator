/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import Output from '../components/Output';
import Row from '../components/Row';

describe('Button', () => {
	const sym = '+';
	const selector = ['digits', 'orange'];
	const handleClick = () => {};
	const button = renderer.create(
		<Button sym={sym} handleBtnClick={handleClick} selector={selector} />
	);
	let tree = button.toJSON();

	test('should mount Button', () => {
		expect(tree).toMatchSnapshot();
	});

	test('onClick function should work properly', () => {
		tree.props.onClick();
		tree = button.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Output', () => {
	const total = '0';
	const operation = '+';
	const next = '0';
	test('should mount Output', () => {
		const output = renderer.create(
			<Output total={total} operation={operation} next={next} />
		);
		const tree = output.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Row', () => {
  
  test('should mount Row', () => {
    const types = ['AC', '+/-', '%'];
    const operand = '÷';
    const handleClick = () => {};
    const row = renderer.create(
      <Row types={types} operand={operand} handleClick={handleClick} />
    );
    const tree = row.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
