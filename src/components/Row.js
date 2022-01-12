import PropTypes from 'prop-types';
import Button from './Button';

/**
 * @component Row - the component for each row of buttons
 * @property {Array} types
 * @property {String} operand
 * @property {Function} handleBtnClick
 */
const Row = (props) => {
  const {
    types: [first, second, third],
    operand,
    handleClick,
  } = props;
  const handleBtnClick = (sym) => handleClick(sym);

  return (
    <div className="calculator-btns">
      <Button
        sym={first}
        selector={operand === '' ? ['digits', 'span-2'] : ['digits']}
        handleBtnClick={handleBtnClick}
      />
      <Button
        sym={second}
        selector={['digits']}
        handleBtnClick={handleBtnClick}
      />
      <Button
        sym={third}
        selector={operand === '' ? ['digits', 'orange'] : ['digits']}
        handleBtnClick={handleBtnClick}
      />
      {operand === '' ? (
			  ''
      ) : (
        <Button
          sym={operand}
          selector={['digits', 'orange']}
          handleBtnClick={handleBtnClick}
        />
      )}
    </div>
  );
};

Row.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  operand: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Row;
