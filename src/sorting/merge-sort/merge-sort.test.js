const { mergeSort, mergeSortIterative } = require('./merge-sort');
const testSortingAlgorithm = require('../../helpers/test-sorting-algorithm/test-sorting-algorithm');

describe('Merge sort algorithm', () => {
  testSortingAlgorithm(mergeSort);
});

describe('Iterative merge sort algorithm', () => {
  testSortingAlgorithm(mergeSortIterative);
});