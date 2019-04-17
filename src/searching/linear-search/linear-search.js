function linearSearch(haystack, needle) {
  const listLength = haystack.length;

  haystack.push(needle); // sentinel

  for (let i = 0 ;; ++i) {
    if (haystack[i] === needle) {
      if (i < listLength) {
        return i;
      }

      return null;
    }
  }
}

module.exports = linearSearch;