function quicksort(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Sorted object must be an array.');
  }

  return realQuicksort(array);
}

function realQuicksort(array) {
  if (array.length <= 1)
    return array;

  const randomIndex = Math.floor(Math.random() * array.length);
  const pivot = array[randomIndex];

  const lesserThanPivot = [];
  const greaterThanPivot = [];
  const equalToPivot = [];

  array.forEach(element => {
    if (element < pivot)
      lesserThanPivot.push(element);
    else if (element > pivot)
      greaterThanPivot.push(element);
    else
      equalToPivot.push(element);
  });

  return quicksort(lesserThanPivot).concat(equalToPivot).concat(quicksort(greaterThanPivot));
}

module.exports = quicksort;
