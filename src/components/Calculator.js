import { Component } from 'react';
import Button from './Button';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="output">10</div>
        <div className="calculator-btns">
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits', 'orange']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits', 'orange']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits', 'orange']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits', 'orange']} />
          <Button sym="click" selector={['digits', 'span-2']} />
          <Button sym="click" selector={['digits']} />
          <Button sym="click" selector={['digits', 'orange']} />
        </div>
      </div>
    );
  }
}

export default Calculator;
