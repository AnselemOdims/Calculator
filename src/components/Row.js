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

  return (
    <div className="calculator-btns">
      <Button
        sym={first}
        selector={operand === '' ? ['digits', 'span-2'] : ['digits']}
        handleBtnClick={handleClick}
      />
      <Button
        sym={second}
        selector={['digits']}
        handleBtnClick={handleClick}
      />
      <Button
        sym={third}
        selector={operand === '' ? ['digits', 'orange'] : ['digits']}
        handleBtnClick={handleClick}
      />
      {operand === '' ? (
			  ''
      ) : (
        <Button
          sym={operand}
          selector={['digits', 'orange']}
          handleBtnClick={handleClick}
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
