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
          total: '',
          next: '',
          operation: ''
        }
      }else if(bName === '.') {
        return {
          total: total,
          next: next + bName,
          operation: operation
        }
      }else if(bName === '%') {
        return {
          total: operate(total, 1, '%'),
          next: operate(total, 1, '%'),
          operation: '%'
        }
      }else if(bName === '=') {
        const result = operate(total, next, operation);
        if(result) {
          return {
            total: result,
            next: result,
            operation: '='
          }
        }
      }
    }else {
      return {
        total: total,
        next: next + bName,
        operation: ''
      }
    }
  } else {
    return false;
  }
}