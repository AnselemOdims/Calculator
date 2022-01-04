import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @component Button - the component for each button
 * @property {Array} selector
 * @property {String} sym
 * @property {Function} handleBtnClick
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    const { handleBtnClick, sym } = this.props;
    handleBtnClick(sym);
  }

  render() {
    const { selector, sym } = this.props;
    return (
      <button type="button" className={selector.join(' ')} onClick={this.handleBtnClick}>{sym}</button>
    );
  }
}

Button.propTypes = {
  selector: PropTypes.arrayOf(PropTypes.string).isRequired,
  sym: PropTypes.string.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
};

export default Button;
