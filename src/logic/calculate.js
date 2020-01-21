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