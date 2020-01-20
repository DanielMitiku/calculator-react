import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.button}
      </button>
    );
  }
}

Button.propTypes = {
  button: React.PropTypes.string.isRequired
};

export default Button;