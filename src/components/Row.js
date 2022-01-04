import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * @component Row - the component for each row of buttons
 * @property {Array} types
 * @property {String} operand
 * @property {Function} handleBtnClick
 */
class Row extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(sym) {
    const { handleBtnClick } = this.props;
    handleBtnClick(sym);
  }

  render() {
    const { types: [first, second, third], operand } = this.props;
    return (
      <div className="calculator-btns">
        <Button sym={first} selector={operand === '' ? ['digits', 'span-2'] : ['digits']} handleBtnClick={this.handleBtnClick} />
        <Button sym={second} selector={['digits']} handleBtnClick={this.handleBtnClick} />
        <Button sym={third} selector={operand === '' ? ['digits', 'orange'] : ['digits']} handleBtnClick={this.handleBtnClick} />
        { operand === '' ? '' : <Button sym={operand} selector={['digits', 'orange']} handleBtnClick={this.handleBtnClick} /> }
      </div>
    );
  }
}

Row.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  operand: PropTypes.string.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
};

export default Row;
