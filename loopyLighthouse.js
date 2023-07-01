const loopyLighthouse = function (range, multiples, words) {
  // Use for loop to set 100 as start point, 200 as end point, and increment by 1
  for (let i = range[0]; i <= range[1]; i++) {
    // First, check to see if both conditions are true (divisible by 3 and 4)
    if (i % multiples[0] == 0 && i % multiples[1] == 0) {
      console.log(words[0] + words[1]);
    }
    // If not, check if each individual condition is true
    // Divisible by 3
    else if (i % multiples[0] == 0) {
      console.log(words[0]);
    }
    // Divisible by 4
    else if (i % multiples[1] == 0) {
      console.log(words[1]);
    }
    // If neither condition is true then print the number
    else {
      console.log(i);
    }
  }
};
