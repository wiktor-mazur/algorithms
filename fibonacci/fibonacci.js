function fibonacciIterative(n) {
  validateInput(n);

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let fib1 = 1;
  let fib2= 1;

  for (let i = 2; i < n; ++i) {
    let fib2_temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = fib2_temp;
  }

  return fib2;
}

function fibonacciRecursive(n) {
  validateInput(n);

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

/**
 * Most of the JavaScript engines don't support tail call optimization anyway.
 */
function fibonacciTailRecursive(n, fib1 = 0, fib2 = 1) {
  validateInput(n);

  if (n === 0) {
    return fib1;
  }

  if (n === 1) {
    return fib2;
  }

  return fibonacciTailRecursive(n - 1, fib2, fib1 + fib2);
}

function validateInput(value) {
  if (value < 0) {
    throw new Error('Value can not be a negative number.');
  } else if (!Number.isInteger(value)) {
    throw new Error('Value must be an integer.' + value);
  }
}

module.exports = {
  fibonacciIterative,
  fibonacciRecursive,
  fibonacciTailRecursive
};