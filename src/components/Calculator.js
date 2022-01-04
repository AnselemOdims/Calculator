import { Component } from 'react';
import '../index.css';
import Row from './Row';
import calculate from '../logic/calculate';

/**
 * @component Calculator - the complete calculator components
 */
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(sym) {
    this.setState((state) => (calculate(state, sym)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="output">
          {total}
          {operation}
          {next}
        </div>
        <Row types={['AC', '+/-', '%']} operand="÷" handleBtnClick={this.handleBtnClick} />
        <Row types={['7', '8', '9']} operand="x" handleBtnClick={this.handleBtnClick} />
        <Row types={['4', '5', '6']} operand="-" handleBtnClick={this.handleBtnClick} />
        <Row types={['1', '2', '3']} operand="+" handleBtnClick={this.handleBtnClick} />
        <Row types={['0', '.', '=']} operand="" handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}

export default Calculator;
