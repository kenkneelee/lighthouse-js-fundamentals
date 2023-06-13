// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(side) {
  let result='';
  for (let i = 1; i <= side; i++) {
    result += makeLine(i);
  }
  return result;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
