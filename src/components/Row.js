/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Row extends Component {
  render() {
    const { types: [first, second, third], operand } = this.props;
    return (
      <div className="calculator-btns">
        <Button sym={first} selector={operand === '' ? ['digits', 'span-2'] : ['digits']} />
        <Button sym={second} selector={['digits']} />
        <Button sym={third} selector={operand === '' ? ['digits', 'orange'] : ['digits']} />
        { operand === '' ? '' : <Button sym={operand} selector={['digits', 'orange']} /> }
      </div>
    );
  }
}

Row.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  operand: PropTypes.string.isRequired,
};

export default Row;
