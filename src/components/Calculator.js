import { useState } from 'react';
import '../index.css';
import Row from './Row';
import calculate from '../logic/calculate';

/**
 * @component Calculator - the complete calculator components
 */
const Calculator = () => {
  const [data, setData] = useState({ total: '0', next: null, operation: null });

  const handleBtnClick = (sym) => setData(calculate(data, sym));
  const { total, next, operation } = data;

  return (
    <div className="calculator">
      <div className="output">
        {total}
        {operation}
        {next}
      </div>
      <Row types={['AC', '+/-', '%']} operand="÷" handleClick={handleBtnClick} />
      <Row types={['7', '8', '9']} operand="x" handleClick={handleBtnClick} />
      <Row types={['4', '5', '6']} operand="-" handleClick={handleBtnClick} />
      <Row types={['1', '2', '3']} operand="+" handleClick={handleBtnClick} />
      <Row types={['0', '.', '=']} operand="" handleClick={handleBtnClick} />
    </div>
  );
};

export default Calculator;
