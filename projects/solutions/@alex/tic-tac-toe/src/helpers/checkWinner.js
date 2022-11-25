// Logic to check if game is over
export const checkWinner = (gameboard) => {
  for (let i = 0; i < 3; i++) {
    /*===================================
        Check Rows
    ===================================*/
    if (
      gameboard[i][0] !== 0 &&
      gameboard[i][0] === gameboard[i][1] &&
      gameboard[i][0] === gameboard[i][2]
    ) {
      return gameboard[i][0] === 1 ? "player" : "computer";
    }
    /*===================================
        Check Columns
    ===================================*/
    if (
      gameboard[0][i] !== 0 &&
      gameboard[0][i] === gameboard[1][i] &&
      gameboard[0][i] === gameboard[2][i]
    ) {
      return gameboard[i][0] === 1 ? "player" : "computer";
    }
  }

  /*===================================
        Check diagnals
    ===================================*/
  if (
    gameboard[0][0] !== 0 &&
    gameboard[0][0] === gameboard[1][1] &&
    gameboard[0][0] === gameboard[2][2]
  ) {
    return gameboard[0][0] === 1 ? "player" : "computer";
  }

  if (
    gameboard[2][0] !== 0 &&
    gameboard[2][0] === gameboard[1][1] &&
    gameboard[2][0] === gameboard[0][2]
  ) {
    return gameboard[2][0] === 1 ? "player" : "computer";
  }

  return null; // If null is returned, game is not over yet
};
