import CellCreator from "./CellCreator"
import CheckerCreator from "./CheckerCreator"
import { isActiveCell } from "js/utils"
import { PLAYERS_TAGS } from "js/constants"

const cellCreator = new CellCreator();
const checkerCreator = new CheckerCreator();

class BoardCreator {
  create(boardWidth, boardHeight, checkersPerPlayer) {
    const board = [];

    // Create cells

    for (let rowIndex = 0; rowIndex < boardHeight; rowIndex++) {
      const row = []; 

      for (let cellIndex = 0; cellIndex < boardWidth; cellIndex++) {
        const type = (isActiveCell(rowIndex, cellIndex)) ? 'active' : 'passive';
        const cell = cellCreator.create(type);

        row.push(cell);
      }

      board.push(row);
    }

    // Create checkers for first player

    let firstPlayerCheckersCounter = checkersPerPlayer;

    outer: for (let rowIndex = 0; rowIndex < boardHeight; rowIndex++) {
      for (let cellIndex = 0; cellIndex < boardWidth; cellIndex++) {
        if (firstPlayerCheckersCounter === 0) {
          break outer;
        }

        if (isActiveCell(rowIndex, cellIndex)) {
          const checker = checkerCreator.create(PLAYERS_TAGS.PLAYER1);

          board[rowIndex][cellIndex].checker = checker;
          firstPlayerCheckersCounter--;
        }
      }
    }

    // Create checkers for second player

    let secondPlayerCheckersCounter = checkersPerPlayer;

    outer: for (let rowIndex = boardHeight - 1; rowIndex >= 0; rowIndex--) {
      for (let cellIndex = boardWidth - 1; cellIndex >= 0; cellIndex--) {
        if (secondPlayerCheckersCounter === 0) {
          break outer;
        }

        if (isActiveCell(rowIndex, cellIndex)) {
          const checker = checkerCreator.create(PLAYERS_TAGS.PLAYER2);

          board[rowIndex][cellIndex].checker = checker;
          secondPlayerCheckersCounter--;
        }
      }
    }

    return board;
  }
}

export default BoardCreator;