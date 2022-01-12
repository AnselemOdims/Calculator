/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button';
import Output from '../components/Output';
import Row from '../components/Row';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
	const sym = '+';
	const selector = ['digits', 'orange'];
	const handleClick = () => {};
	const button = renderer.create(
		<Button sym={sym} handleBtnClick={handleClick} selector={selector} />
	);

	const wrapper = mount(
		<Button sym={sym} handleBtnClick={handleClick} selector={selector} />
	);
	let tree = button.toJSON();

	test('should mount the Button component', () => {
		expect(tree).toMatchSnapshot();
	});

	test('onClick function should work properly', () => {
		tree.props.onClick();
		tree = button.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('should be allowed to set props', () => {
		
	})
});

describe('Output', () => {
	const total = '0';
	const operation = '+';
	const next = '0';
	test('should mount the Output component', () => {
		const output = renderer.create(
			<Output total={total} operation={operation} next={next} />
		);
		const tree = output.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Row', () => {
	test('should mount the Row component', () => {
		const types = ['AC', '+/-', '%'];
		const operand = '÷';
		const handleClick = () => {};
		const row = renderer.create(
			<Row types={types} operand={operand} handleClick={handleClick} />
		);
		const wrapper = shallow(
			<Row types={types} operand={operand} handleClick={handleClick}>
				<Button sym={operand} handleBtnClick={handleClick} selector={types} />
			</Row>
		);
		const tree = row.toJSON();
		expect(tree).toMatchSnapshot();
		expect(wrapper.find(Button).length).toEqual(4);
	});
});

describe('Calculator', () => {
	test('should mount the Calculator component', () => {
		const calculator = renderer.create(<Calculator />);
		const tree = calculator.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

// describe('Header', () => {
//   test('should mount the Header component', () => {
//     const header = renderer.create(<Header />);
//     const tree = header.toJSON();
//     expect(tree).toMatchSnapshot();
//   })
// })
