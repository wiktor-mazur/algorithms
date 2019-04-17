const linearSearch = require('./linear-search');

const sortedArrayOfNumbers = [-200, -59, -5.324, -1, 0, 1.2, 34513, 100000, 200000];
const unsortedArrayOfNumbers = [0.5, 3, -5, 1, 18, -34534, 12.15, 5];

describe('Linear search algorithm', () => {
  test('should return null when searched value is not in the array', () => {
    expect(linearSearch(sortedArrayOfNumbers, -30)).toBeNull();
    expect(linearSearch(sortedArrayOfNumbers, -6.5)).toBeNull();
    expect(linearSearch(sortedArrayOfNumbers, 0.000001)).toBeNull();
    expect(linearSearch(sortedArrayOfNumbers, 3235783459)).toBeNull();

    expect(linearSearch(unsortedArrayOfNumbers, -35)).toBeNull();
    expect(linearSearch(unsortedArrayOfNumbers, 0.6)).toBeNull();
    expect(linearSearch(unsortedArrayOfNumbers, -1)).toBeNull();
    expect(linearSearch(unsortedArrayOfNumbers, 4563456)).toBeNull();
  });

  test('should find element\'s position in sorted array', () => {
    sortedArrayOfNumbers.forEach((item, index) => {
      expect(linearSearch(sortedArrayOfNumbers, item)).toBe(index);
    });
  });

  test('should find element\'s position in unsorted array', () => {
    unsortedArrayOfNumbers.forEach((item, index) => {
      expect(linearSearch(unsortedArrayOfNumbers, item)).toBe(index);
    });
  });
});