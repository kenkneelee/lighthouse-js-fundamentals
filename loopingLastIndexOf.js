// Declare function that takes an array and value to search for
function lastIndexOf(arr, val) {
  // Set default return value if no matches found
  let index = -1;
  // For loop to iterate through array and set the "index" value appropriately if match
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
    }
  }
  // Return index of last search result or default value if none found
  return index;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
