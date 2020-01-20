import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ result }) => <div id="display"><p>{result}</p></div>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
