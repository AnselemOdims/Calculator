import PropTypes from 'prop-types';

const Output = ({ total, operation, next }) => (
  <div className="output">
    {total}
    {operation}
    {next}
  </div>
);

Output.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Output;
