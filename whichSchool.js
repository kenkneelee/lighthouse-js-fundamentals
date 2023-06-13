const whichSchool = function (age) {
  // Return "Elementary School" string if age is below 13
  if (age < 13) {
    return "Elementary School";
  }
  // Return "Secondary School" if age is between 13 and 18 (both inclusive)
  else if (age >= 13 && age <= 18) {
    return "Secondary School";
  }
  // Return "Lighthouse Labs" in all other cases
  else {
    return "Lighthouse Labs";
  }
};

console.log(whichSchool(13));
