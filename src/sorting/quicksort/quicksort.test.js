const quicksort = require('./quicksort');
const testSortingAlgorithm = require('../../helpers/test-sorting-algorithm/test-sorting-algorithm');

describe('Quicksort algorithm', () => {
  testSortingAlgorithm(quicksort);
});