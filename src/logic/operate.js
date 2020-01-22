import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne !== null && numberTwo !== null && operation !== null) {
    const num1 = Big(numberOne);
    const num2 = Big(numberTwo);
    if (operation === '+') {
      return num1.plus(num2);
    } if (operation === '-') {
      return num1.minus(num2);
    } if (operation === 'X') {
      return num1.times(num2);
    } if (operation === '÷') {
      if (num2 !== 0) {
        return num1.div(num2);
      }
      return 'Infinite';
    } if (operation === '%') {
      return num1.div(100);
    }
    return false;
  }
  return false;
};

export default operate;
