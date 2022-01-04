import { Component } from 'react';
import '../index.css';
import Row from './Row';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="output">10</div>
        <Row types={['AC', '+/-', '%']} operand="&divide;" />
        <Row types={['7', '8', '9']} operand="&times;" />
        <Row types={['4', '5', '6']} operand="&minus;" />
        <Row types={['1', '2', '3']} operand="+" />
        <Row types={['0', '.', '=']} operand="" />
      </div>
    );
  }
}

export default Calculator;
