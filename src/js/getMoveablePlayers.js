import WaysCreator from "./creators/WaysCreator";
import { PLAYERS_TAGS } from "./constants";

const getMoveablePlayers = (board) => {
  const waysCreator = new WaysCreator(board);
  
  let player1HaveMoves = false;
  let player2HaveMoves = false;
  let player1HaveCheckers = false;
  let player2HaveCheckers = false;
  
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let cellIndex = 0; cellIndex < board[0].length; cellIndex++) {
      const checker = board[rowIndex][cellIndex].checker;

      if (checker == null) continue;

      if (checker.player === PLAYERS_TAGS.PLAYER1) {
        player1HaveCheckers = true;

        if (!player1HaveMoves && waysCreator.create(checker).size > 0) {
          player1HaveMoves = true;
        }
      } else {
        player2HaveCheckers = true;

        if (!player2HaveMoves && waysCreator.create(checker).size > 0) {
          player2HaveMoves = true;
        }
      }
    }
  }

  if (!player2HaveCheckers) {
    return [PLAYERS_TAGS.PLAYER1];
  }

  if (!player1HaveCheckers) {
    return [PLAYERS_TAGS.PLAYER2];
  }

  if (!player1HaveMoves && !player2HaveMoves) {
    return [];
  }

  if (!player1HaveMoves) {
    return [PLAYERS_TAGS.PLAYER2];
  }

  if (!player2HaveMoves) {
    return [PLAYERS_TAGS.PLAYER1];
  }

  return [PLAYERS_TAGS.PLAYER1, PLAYERS_TAGS.PLAYER2];
};

export default getMoveablePlayers;