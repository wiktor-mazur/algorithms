const {factorialIterative, factorialRecursive, factorialTailRecursive} = require('./factorial');

const testCases = [
  {
    argument: 0,
    expectedResult: 1
  },
  {
    argument: 1,
    expectedResult: 1
  },
  {
    argument: 5,
    expectedResult: 120
  },
  {
    argument: 10,
    expectedResult: 3628800
  }
];

function testFactorialFunction(fn) {
  testCases.forEach((testCase) => {
    expect(() => {
      fn(-1);
    }).toThrow();

    expect(() => {
      fn(0.5);
    }).toThrow();

    expect(fn(testCase.argument)).toBe(testCase.expectedResult);
  });
}

describe('Factorial iterative', () => {
  test('should calculate factorials', () => {
    testFactorialFunction(factorialIterative);
  });
});

describe('Factorial recursive', () => {
  test('should calculate factorials', () => {
    testFactorialFunction(factorialRecursive);
  });
});

describe('Factorial tail recursive', () => {
  test('should calculate factorials', () => {
    testFactorialFunction(factorialTailRecursive);
  });
});