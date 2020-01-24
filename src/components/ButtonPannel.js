import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = bName => clickHandler(bName);

  return (
    <div id="groups">
      <div className="group">
        <Button buttonName="AC" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="+/-" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="%" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="÷" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button buttonName="7" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="8" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="9" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="X" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button buttonName="4" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="5" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="6" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button buttonName="1" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="2" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="3" color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />
      </div>
      <div className="group">
        <Button buttonName="0" color="lightgrey" clickHandler={handleClick} wide />
        <Button buttonName="." color="lightgrey" clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
