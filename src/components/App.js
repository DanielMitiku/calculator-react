import React from 'react';
import ButtonPanel from './ButtonPannel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../styles/App.css';

const App = () => (
  <div id="container">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
