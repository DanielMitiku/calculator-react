import operate from './operate';

const calculate = ({ total, next, operation }, bName) => {
  if (total !== null && next !== null && operation !== null) {
    if (Number.isNaN(bName)) {
      if (bName === '+/-') {
        return {
          total: parseFloat(total) ? (-1 * total).toString() : total,
          next: parseFloat(next) ? (-1 * next).toString() : next,
          operation: '',
        };
      } if (bName === '+' || bName === '-' || bName === 'X' || bName === '÷') {
        return {
          total: next,
          next: '',
          operation: bName,
        };
      } if (bName === 'AC') {
        return {
          total: '',
          next: '',
          operation: '',
        };
      } if (bName === '.') {
        return {
          total,
          next: next + bName,
          operation,
        };
      } if (bName === '%') {
        return {
          total: operate(total, 1, '%'),
          next: operate(total, 1, '%'),
          operation: '%',
        };
      } if (bName === '=') {
        const result = operate(total, next, operation);
        if (result) {
          return {
            total: result,
            next: result,
            operation: '=',
          };
        }
      }
    } else {
      return {
        total,
        next: next + bName,
        operation: '',
      };
    }
  }
  return false;
};

export default calculate;
