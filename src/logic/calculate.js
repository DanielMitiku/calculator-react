import operate from './operate';

const calculate = ({ total, next, operation }, bName) => {
  if (total !== null && next !== null && operation !== null) {
    const isNotNumber = str => !str.match(/\d/);
    if (total === 'Infinity') {
      return {
        total: '0',
        next: '',
        operation: '',
      };
    }
    if (isNotNumber(bName)) {
      if (bName === '+/-') {
        return {
          total: parseFloat(total) ? (-1 * total).toString() : total,
          next: parseFloat(next) ? (-1 * next).toString() : next,
          operation: '',
        };
      } if (bName === '+' || bName === '-' || bName === 'X' || bName === '÷') {
        if (next !== '' && total !== '' && operation !== '') {
          return {
            total: operate(total, next, operation),
            next: '',
            operation: bName,
          };
        }
        return {
          total: (next === '') ? total : next,
          next: '',
          operation: bName,
        };
      } if (bName === 'AC') {
        return {
          total: '0',
          next: '',
          operation: '',
        };
      } if (bName === '.') {
        if(next === '') {
          return {
            total,
            next: '0.',
            operation,
          }
        }
        return {
          total,
          next: next.match(/\./) ? next : next + bName,
          operation,
        };
      } if (bName === '%') {
        return {
          total: parseFloat(total) ? operate(total, 1, '%') : total,
          next: parseFloat(next) ? operate(next, 1, '%') : next,
          operation: '%',
        };
      } if (bName === '=' && total !== '' && next !== '' && operation !== '') {
        const result = operate(total, next, operation);
        if (result) {
          return {
            total: result,
            next: '',
            operation: '',
          };
        }
      }
    } else {
      if (operation === '') {
        return {
          total,
          next: next + bName,
          operation,
        };
      }
      return {
        total,
        next: next + bName,
        operation,
      };
    }
  }
  return { total, next, operation };
};

export default calculate;
