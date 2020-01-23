import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide, clickHandler }) => {
  const styles = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  const handleClick = (bName) => clickHandler(bName);

  return (
    <button type="button" style={styles} onClick={this.handleClick}>
      {buttonName}
    </button>
  );
};


Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
