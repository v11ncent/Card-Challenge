import PropTypes from "prop-types";

const Heading = ({ as, text }) => {
  const Component = as;

  return <Component>{text}</Component>;
};

Heading.propTypes = {
  as: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
