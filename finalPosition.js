function finalPosition(moves) {
  // Declare array with X and Y coords set at 0,0 (centered)
  let position = [0, 0];
  // Use for .. of loop to iterate through array of moves
  for (let direction of moves) {
    // Switch cases to increment or decrement X or Y coordinate according to move
    switch (direction) {
    case "north":
      position[1] += 1;
      break;
    case "south":
      position[1] -= 1;
      break;
    case "east":
      position[0] += 1;
      break;
    case "west":
      position[0] -= 1;
      break;
    }
  }
  // Return final position after loop has executed
  return position;
}
