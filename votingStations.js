// Define function that takes stations array as argument
function chooseStations(stations) {
  // Declare empty array to store appropriate stations
  let goodStations = [];
  // Use for loop to iterate through every station in array
  for (let station of stations) {
    // Use if statement to check each station
    if (
      // Check for capacity requirement + either of 'school' or 'community centre'
      station[1] >= 20 &&
      (station[2] == "school" || station[2] == "community centre")
    ) {
      // Push this station to goodstations array if both conditions are fulfilled
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}
