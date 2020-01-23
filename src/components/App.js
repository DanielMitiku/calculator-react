import React from 'react';
import ButtonPanel from './ButtonPannel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(bName) {
    const calResult = calculate(this.state, bName);
    this.setState(calResult);
  }

  render() {
    return (
      <div id="container">
        <Display total={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
