function mergeSort(array) {
  validateInput(array);
  return realMergeSort(array);
}

function mergeSortIterative(array) {
  validateInput(array);
  return realMergeSortIterative(array);
}

function validateInput(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Sorted object must be an array.');
  }
}

function realMergeSort(array) {
  if (array.length <= 1)
    return array;
  else if (array.length === 2)
    return array[0] > array[1] ? [array[1], array[0]] : array;

  const middleIndex = Math.floor(array.length / 2);

  const left = realMergeSort(array.slice(0, middleIndex));
  const right = realMergeSort(array.slice(middleIndex));

  return merge(left, right);
}

function realMergeSortIterative(array) {
  if (array.length === 0)
    return [];

  array = array.map(item => [item]);

  let merged = array;

  for (let i = 0; i < Math.ceil(Math.log2(array.length)); ++i) {
    const temp = [];

    for (let j = 0; j < merged.length; j += 2) {
      if (j + 1 === merged.length)
        temp.push(merged[j]);
      else
        temp.push(merge(merged[j], merged[j + 1]))
    }

    merged = temp;
  }

  return merged[0];
}


function merge(left, right) {
  let merged = [];

  let leftPointer = 0;
  let rightPointer = 0;

  while (merged.length < left.length + right.length) {
    if (leftPointer >= left.length) {
      merged = merged.concat(right.slice(rightPointer));
    } else if (rightPointer >= right.length) {
      merged = merged.concat(left.slice(leftPointer));
    } else if (left[leftPointer] <= right[rightPointer]) {
      merged.push(left[leftPointer]);
      leftPointer++;
    } else {
      merged.push(right[rightPointer]);
      rightPointer++;
    }
  }

  return merged;
}

module.exports = { mergeSort, mergeSortIterative };
