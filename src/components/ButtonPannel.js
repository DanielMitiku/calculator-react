import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => (
  <div id="groups">
    <div className="group">
      <Button buttonName="AC" color="lightgrey" />
      <Button buttonName="+/-" color="lightgrey" />
      <Button buttonName="%" color="lightgrey" />
      <Button buttonName="÷" />
    </div>
    <div className="group">
      <Button buttonName="7" color="lightgrey" />
      <Button buttonName="8" color="lightgrey" />
      <Button buttonName="9" color="lightgrey" />
      <Button buttonName="X" />
    </div>
    <div className="group">
      <Button buttonName="4" color="lightgrey" />
      <Button buttonName="5" color="lightgrey" />
      <Button buttonName="6" color="lightgrey" />
      <Button buttonName="-" />
    </div>
    <div className="group">
      <Button buttonName="1" color="lightgrey" />
      <Button buttonName="2" color="lightgrey" />
      <Button buttonName="3" color="lightgrey" />
      <Button buttonName="+" />
    </div>
    <div className="group">
      <Button buttonName="0" color="lightgrey" wide />
      <Button buttonName="." color="lightgrey" />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
