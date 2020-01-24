import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne !== null && numberTwo !== null && operation !== null) {
    const num1 = Big(numberOne);
    const num2 = Big(numberTwo);
    if (operation === '+') {
      return num1.plus(num2).toString();
    } if (operation === '-') {
      return num1.minus(num2).toString();
    } if (operation === 'X') {
      return num1.times(num2).toString();
    } if (operation === '÷') {
      if (num2.toString() !== '0') {
        return num1.div(num2).toString();
      }
      return 'Infinity';
    } if (operation === '%') {
      return num1.div(100).toString();
    }
    return false;
  }
  return false;
};

export default operate;
