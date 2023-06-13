// Declare function that takes array of vegetable objects, and a metric to judge them by
const judgeVegetable = function (vegetables, metric) {
  // Declare variable to store the name of the winner
  let winner;
  // Declare variable to store the highest score
  let highScore = 0;
  // forEach loop to iterate through the vegetables array provided
  vegetables.forEach(function (vegetable) {
    // if the current checked vegetable has a higher score in the provided metric, it is the new winner
    if (vegetable[metric] > highScore) {
      highScore = vegetable[metric];
      // store the current winner's name
      winner = vegetable["submitter"];
    }
  });
  // return final winner's name
  return winner;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
