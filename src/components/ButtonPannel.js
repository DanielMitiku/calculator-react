import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div id='groups'>
        <div id='group-1'>
          <Button buttonName='AC' />
          <Button buttonName='+/-' />
          <Button buttonName='%' />
          <Button buttonName='÷' />
        </div>
        <div id='group-2'>
          <Button buttonName='7' />
          <Button buttonName='8' />
          <Button buttonName='9' />
          <Button buttonName='X' />
        </div>
        <div id='group-3'>
          <Button buttonName='4' />
          <Button buttonName='5' />
          <Button buttonName='6' />
          <Button buttonName='-' />
        </div>
        <div id='group-4'>
          <Button buttonName='1' />
          <Button buttonName='2' />
          <Button buttonName='3' />
          <Button buttonName='+' />
        </div>
        <div id='group-5'>
          <Button buttonName='0' />
          <Button buttonName='.' />
          <Button buttonName='=' />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;