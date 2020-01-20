import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};

export default Button;