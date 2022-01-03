import { Component } from 'react';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        Hello App
        <Button sym="click" selector={['digits']} />
      </div>
    );
  }
}

export default Calculator;
