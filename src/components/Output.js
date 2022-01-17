import PropTypes from 'prop-types';

const Output = ({ total, operation, next }) => (
  <div className="output">
    {total}
    {operation}
    {next}
  </div>
);

Output.defaultProps = {
  operation: null,
  next: null,
};

Output.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Output;
