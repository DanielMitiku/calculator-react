import operate from './operate';

const calculate = ({ total, next, operation }, bName) => {
  if(total !== null && next !== null && operation !== null) {
    if(isNaN(bName)) {
      if(bName === '+/-') {
        return {
          total: parseFloat(total) ? (-1 * total).toString() : total,
          next: parseFloat(next) ? (-1 * next).toString() : next,
          operation: ''
        }
      } else if (bName === '+' || bName === '-' || bName === 'X' || bName === '÷') {
        return {
          total: next,
          next: '',
          operation: bName 
        }
      } else if(bName === 'AC') {
        return {
          total: '0',
          next: '',
          operation: ''
        }
      } else if(bName === '%') {
        return {
          total: operate(total, 1, operation),
          next: '',
          operation: ''
        }
      }
    }else {
      return {
        total: total + bName,
        next: next + bName,
        operation: ''
      }
    }
  } else {
    return false;
  }
}