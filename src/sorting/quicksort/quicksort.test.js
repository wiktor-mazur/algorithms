const quicksort = require('./quicksort');

const unsortedArray = [-0.15, 1214, -54, 62.85, 12, 13, 1, 383.2, 1, 15, 5211, 7511, -7215, 576, 12];
const unsortedArrayCopy = unsortedArray.slice();
const sortedArray = [-7215, -54, -0.15, 1, 1, 12, 12, 13, 15, 62.85, 383.2, 576, 1214, 5211, 7511];

describe('Quicksort algorithm', () => {
  test('should return sorted array', () => {
    expect(quicksort(unsortedArray)).toEqual(sortedArray);
  });

  test('should work with empty arrays', () => {
    expect(quicksort([])).toEqual([]);
  });

  test('should work with 1-element arrays', () => {
    expect(quicksort([1])).toEqual([1]);
  });

  test('should not mutate original array', () => {
    quicksort(unsortedArray);
    expect(unsortedArray).toEqual(unsortedArrayCopy);
  });

  test('should throw if passed argument is not an array', () => {
    expect(() => {
      quicksort('I am an array, trust me!');
    }).toThrow();
  });
});