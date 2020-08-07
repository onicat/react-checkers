import WayCreator from './WayCreator'
import { PLAYERS_TAGS } from 'js/constants';

const wayCreator = new WayCreator();

class WaysCreator {
  constructor(board) {
    this.board = board;
    this.lastRowIndex = board.length - 1;
    this.lastCellIndex = board[0].length - 1;

    this.ways = new Map();
  }

  create(checker) {
    if (checker === null) {
      return this.ways;
    }

    const direction = (
      (checker.player === PLAYERS_TAGS.PLAYER1) ? 'down' : 'up'
    );

    this._setJumps(checker, direction);

    const ways = this.ways;
    this._clear();

    return ways;
  }

  _setJumps(checker, direction) {
    const wayRowIndex = checker.rowIndex + ((direction === 'down') ? 1 : -1);
    let leftCell = null;
    let rightCell = null;

    if (this._isCellExist(wayRowIndex, checker.cellIndex - 1)) {
      leftCell = this.board[wayRowIndex][checker.cellIndex - 1]
    }

    if (this._isCellExist(wayRowIndex, checker.cellIndex + 1)) {
      rightCell = this.board[wayRowIndex][checker.cellIndex + 1]
    }

    if (leftCell && leftCell.checker === null) {
      const way = wayCreator.create('jump', leftCell.rowIndex, leftCell.cellIndex);

      this.ways.set(leftCell, way);
    }

    if (rightCell && rightCell.checker === null) {
      const way = wayCreator.create('jump', rightCell.rowIndex, rightCell.cellIndex);

      this.ways.set(rightCell, way);
    }    
  }

  _isCellExist(rowIndex, cellIndex) {
    if (
      rowIndex >= 0 &&
      rowIndex <= this.lastRowIndex &&
      cellIndex >= 0 &&
      cellIndex <= this.lastCellIndex
    ) {
      return true;
    } else {
      return false;
    }
  }

  _clear() {
    this.ways = new Map();
  }
}

export default WaysCreator;