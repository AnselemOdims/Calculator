import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selector, sym } = this.props;
    return (
      <button type="button" className={selector.join(', ')}>{sym}</button>
    );
  }
}

Button.propTypes = {
  selector: PropTypes.arrayOf(PropTypes.string).isRequired,
  sym: PropTypes.string.isRequired,
};

export default Button;
