// Define function that takes 3 integer parameters
function range(start, end, step) {
  if (
    start == undefined ||
    end == undefined ||
    step == undefined ||
    start > end ||
    step <= 0
  ) {
    return [];
  }
  // Declare empty array to store values in
  let result = [];
  // Create for loop using given integer parameters
  for (let i = start; i <= end; i += step) {
    // Push current i value to results array
    result.push(i);
  }
  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
