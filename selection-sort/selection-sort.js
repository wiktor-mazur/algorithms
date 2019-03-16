function selectionSort(array) {
  const sorted = [];

  while (array.length) {
    const smallest = findSmallestElementIndex(array);
    sorted.push(array[smallest]);
    array.splice(smallest, 1);
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