const selectionSort = require('./selection-sort');

const unsortedArray = [-0.15, 1214, -54, 62.85, 12, 13, 1, 383.2, 1, 15, 5211, 7511, -7215, 576, 12];
const unsortedArrayCopy = unsortedArray.slice();
const sortedArray = [-7215, -54, -0.15, 1, 1, 12, 12, 13, 15, 62.85, 383.2, 576, 1214, 5211, 7511];

describe('Selection sort algorithm', () => {
  test('should return sorted array', () => {
    expect(selectionSort(unsortedArray)).toEqual(sortedArray);
  });

  test('should not mutate original array', () => {
    selectionSort(unsortedArray);
    expect(unsortedArray).toEqual(unsortedArrayCopy);
  });
});