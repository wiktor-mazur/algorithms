/**
 * Does not support fraction factorials for now.
 */

function factorialIterative(value) {
  validateInput(value);

  let result = 1;

  for (let i = 1; i <= value; ++i) {
    result *= i;
  }

  return result;
}

function factorialRecursive(value) {
  validateInput(value);

  if (value >= 0 && value <= 1) {
    return 1;
  } else {
    return factorialRecursive(value - 1) * value;
  }
}

/**
 * Most of the JavaScript engines don't support tail call optimization anyway.
 */
function factorialTailRecursive(value, lastResult = 1) {
  validateInput(value);

  if (value >= 0 && value <= 1) {
    return lastResult;
  } else {
    return factorialTailRecursive(value - 1, value * lastResult);
  }
}

function validateInput(value) {
  if (value < 0) {
    throw new Error('Value can not be a negative number.');
  } else if (!Number.isInteger(value)) {
    throw new Error('Value must be an integer.');
  }
}

module.exports = {
  factorialIterative,
  factorialRecursive,
  factorialTailRecursive
};