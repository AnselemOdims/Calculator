import PropTypes from 'prop-types';

/**
 * @component Button - the component for each button
 * @property {Array} selector
 * @property {String} sym
 * @property {Function} handleBtnClick
 */
const Button = (props) => {
  const { selector, sym, handleBtnClick } = props;
  const handleClick = () => handleBtnClick(sym);

  return (
    <button type="button" className={selector.join(' ')} onClick={handleClick}>{sym}</button>
  );
};

Button.propTypes = {
  selector: PropTypes.arrayOf(PropTypes.string).isRequired,
  sym: PropTypes.string.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
};

export default Button;
