const binarySearch = require('./binary-search');

const sortedArrayOfNumbers = [-200, -156, -59, -5.324, -1.5, -1, 0, 1.2, 16, 21.356, 34, 33514, 34513, 100000, 200000];

describe('Binary search algorithm', () => {
  test('should return null when searched value is out of range', () => {
    expect(binarySearch(sortedArrayOfNumbers, -201)).toBeNull();
    expect(binarySearch(sortedArrayOfNumbers, 30000)).toBeNull();
  });

  test('should return null when searched value is not in the array', () => {
    const nonExistingValues = [-170, 0.5, 34.000000001, 35000];

    nonExistingValues.forEach((item) => {
      expect(binarySearch(sortedArrayOfNumbers, item)).toBeNull();
    });
  });

  test('should find element\'s position in array', () => {
    sortedArrayOfNumbers.forEach((item, index) => {
      expect(binarySearch(sortedArrayOfNumbers, item)).toBe(index);
    });
  });
});

