import WayCreator from './WayCreator'
import { PLAYERS_TAGS } from 'js/constants';

const wayCreator = new WayCreator();

class WaysCreator {
  constructor(board) {
    this.board = board;
    this.lastRowIndex = board.length - 1;
    this.lastCellIndex = board[0].length - 1;
  }

  create(checker) {
    const ways = new Map();

    if (checker === null) {
      return ways;
    }

    const direction = (
      (checker.player === PLAYERS_TAGS.PLAYER1) ? 'down' : 'up'
    );

    this._setJumps(ways, checker, direction);

    return ways;
  }

  _setJumps(ways, checker, direction) {
    const leftWayCellIndex = checker.cellIndex - 1;
    const rightWayCellIndex = checker.cellIndex + 1;
    const wayRowIndex = (
      (direction === 'down') ? checker.rowIndex + 1 : checker.rowIndex - 1
    );

    if (
      wayRowIndex < 0 &&
      wayRowIndex > this.lastRowIndex
    ) {
      return;
    }

    if (
      leftWayCellIndex >= 0 &&
      this.board[wayRowIndex][leftWayCellIndex].checker === null
    ) {
      const cell = this.board[wayRowIndex][leftWayCellIndex];
      const way = wayCreator.create('jump', wayRowIndex, leftWayCellIndex);

      ways.set(cell, way);
    }

    if (
      rightWayCellIndex <= this.lastCellIndex &&
      this.board[wayRowIndex][rightWayCellIndex].checker === null
    ) {
      const cell = this.board[wayRowIndex][rightWayCellIndex];
      const way = wayCreator.create('jump', wayRowIndex, rightWayCellIndex);

      ways.set(cell, way);
    }
  }
}

export default WaysCreator;