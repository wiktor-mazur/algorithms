const selectionSort = require('./selection-sort');
const testSortingAlgorithm = require('../../helpers/test-sorting-algorithm/test-sorting-algorithm');

describe('Selection sort algorithm', () => {
  testSortingAlgorithm(selectionSort);
});