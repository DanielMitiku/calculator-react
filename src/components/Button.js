import React from 'react';

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
  buttonName: React.PropTypes.string.isRequired
};

export default Button;