function binarySearch(haystack, needle) {
  if (isNeedleOutOfRange(haystack, needle)) {
    return null;
  }

  let leftPointerIndex = 0;
  let rightPointerIndex = haystack.length - 1;

  while (leftPointerIndex <= rightPointerIndex) {
    const middleIndex = Math.floor((rightPointerIndex - leftPointerIndex) / 2) + leftPointerIndex;
    const middleValue = haystack[middleIndex];

    if (middleValue === needle) {
      return middleIndex;
    }

    if (middleValue > needle) {
      rightPointerIndex = middleIndex - 1;
    }

    if (middleValue < needle) {
      leftPointerIndex = middleIndex + 1;
    }
  }

  return null;
}

function isNeedleOutOfRange(haystack, needle) {
  return needle < haystack[0] || needle > haystack[haystack.length - 1];
}

module.exports = binarySearch;