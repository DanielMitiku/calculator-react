import React from 'react';
import ButtonPanel from './ButtonPannel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(bName) {
    const calResult = calculate(this.state, bName);
    this.setState(calResult);
  }

  render() {
    const displayValue = (this.state.next === '') ? this.state.total : this.state.next;
    return (
      <div id="container">
        <Display result={displayValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
