import WayCreator from './WayCreator'
import { PLAYERS_TAGS } from 'js/constants'

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

    if (checker.type === 'soldier') {
      const direction = (
        (checker.player === PLAYERS_TAGS.PLAYER1) ? 'down' : 'up'
      );
  
      this._setJumps(checker, direction);
      this._setEating(checker);
    } else {
      this._setLineWays(checker);
    }

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
      const way = wayCreator.create('jump', leftCell);

      this.ways.set(leftCell, way);
    }

    if (rightCell && rightCell.checker === null) {
      const way = wayCreator.create('jump', rightCell);

      this.ways.set(rightCell, way);
    }    
  }

  _setEating(checker) {
    const wayLines = [
      this._getCellsLine(checker, -1, -1, 2),
      this._getCellsLine(checker, -1, 1, 2),
      this._getCellsLine(checker, 1, -1, 2),
      this._getCellsLine(checker, 1, 1, 2)
    ];
    
    for (let line of wayLines) {
      if (
        line.length === 2 &&
        line[0].checker &&
        line[0].checker.player !== checker.player &&
        line[1].checker === null
      ) {
        const eatingWay = wayCreator.create('eating', line[1], line[0]);
        const eatenWay = wayCreator.create('eaten');

        this.ways.set(line[0], eatenWay);
        this.ways.set(line[1], eatingWay);
      }
    }
  }

  _setLineWays(checker) {
    const wayLines = [
      this._getCellsLine(checker, -1, -1),
      this._getCellsLine(checker, -1, 1),
      this._getCellsLine(checker, 1, -1),
      this._getCellsLine(checker, 1, 1)
    ];

    for (let line of wayLines) {
      let eatenCheckerCell = null;
      
      for (let cell of line) {
        let way = null;
        
        if (eatenCheckerCell === null) {
          if (cell.checker === null) {
            way = wayCreator.create('jump', cell); 
          } else if (cell.checker.player !== checker.player) {
            eatenCheckerCell = cell;
          } else {
            break;
          }
        } else {
          if (cell.checker === null) {
            way = wayCreator.create('eating', cell, eatenCheckerCell.checker);

            if (!this.ways.has(eatenCheckerCell)) {
              const eatenWay = wayCreator.create('eaten');
              
              this.ways.set(eatenCheckerCell, eatenWay);
            }
          } else {
            break;
          }
        }

        if (way) {
          this.ways.set(cell, way);
        }
      }
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

  _getCellsLine(relatedChecker, rowOffset, cellOffset, lineLength = Infinity) {
    let currentRowOffset = rowOffset;
    let currentCellOffset = cellOffset;
    let line = [];

    for (let iteration = 0; iteration < lineLength; iteration++) {
      const rowIndex = relatedChecker.rowIndex + currentRowOffset;
      const cellIndex = relatedChecker.cellIndex + currentCellOffset;
      
      if (!this._isCellExist(rowIndex, cellIndex)) {
        return line;
      }
     
      line.push(this.board[rowIndex][cellIndex]);

      currentRowOffset += rowOffset;
      currentCellOffset += cellOffset;
    }

    return line;
  }

  _clear() {
    this.ways = new Map();
  }
}

export default WaysCreator;