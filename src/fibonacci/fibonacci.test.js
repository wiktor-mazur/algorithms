const {fibonacciIterative, fibonacciRecursive, fibonacciTailRecursive} = require('./fibonacci');

const testCases = [
  {
    argument: 0,
    expectedResult: 0
  },
  {
    argument: 1,
    expectedResult: 1
  },
  {
    argument: 2,
    expectedResult: 1
  },
  {
    argument: 3,
    expectedResult: 2
  },
  {
    argument: 4,
    expectedResult: 3
  },
  {
    argument: 5,
    expectedResult: 5
  },
  {
    argument: 16,
    expectedResult: 987
  },
  {
    argument: 19,
    expectedResult: 4181
  }
];

function testFibonacciFunction(fn) {
  expect(() => {
    fn(-1);
  }).toThrow();

  expect(() => {
    fn(0.5);
  }).toThrow();

  testCases.forEach((testCase) => {
    expect(fn(testCase.argument)).toBe(testCase.expectedResult);
  });
}

describe('Fibonacci iterative', () => {
  test('should calculate n-th fibonacci number', () => {
    testFibonacciFunction(fibonacciIterative);
  });
});

describe('Fibonacci recursive', () => {
  test('should calculate n-th fibonacci number', () => {
    testFibonacciFunction(fibonacciRecursive);
  });
});

describe('Fibonacci tail recursive', () => {
  test('should calculate n-th fibonacci number', () => {
    testFibonacciFunction(fibonacciTailRecursive);
  });
});