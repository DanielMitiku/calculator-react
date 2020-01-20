import React from 'react';
import ButtonPanel from './ButtonPannel';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div id='container'>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;