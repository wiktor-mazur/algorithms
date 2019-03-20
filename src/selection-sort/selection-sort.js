function selectionSort(array) {
  const unsorted = array.slice();
  const sorted = [];

  while (unsorted.length) {
    const smallest = findSmallestElementIndex(unsorted);
    sorted.push(unsorted[smallest]);
    unsorted.splice(smallest, 1);
  }

  return sorted;
}

function findSmallestElementIndex(array) {
  let smallestElementIndex = 0;

  const smallestElementValue = array.reduce((previous, current, index) => {
    return current < previous ? (smallestElementIndex = index) && current : previous;
  });

  return smallestElementIndex;
}

module.exports = selectionSort;