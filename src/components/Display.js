import React from 'react';

class Display extends React.Component {
  render() {
    const result = this.props.result;
    return (
      <h1>{result}</h1>
    );
  }
};

Display.propTypes = {
  result: React.PropTypes.string
};

Display.defaultProps = {
  result: '0'
};

export default Display;