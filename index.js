function sumItems(array) {
  // Sum all the numbers in the array
  let results = 0;
  for (const i of array) {
    if (Array.isArray(i)) {
      results += sumItems(i);
    } else {
      results += i;
    }
  }
  return results;
}

module.exports = sumItems;

