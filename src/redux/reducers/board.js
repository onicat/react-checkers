import produce from 'immer'

import { INITIAL_SETTINGS, PLAYERS_TAGS } from 'js/constants'
import BoardCreator from 'js/creators/BoardCreator'
import actionTypes from 'redux/actionTypes'

const boardCreator = new BoardCreator();
const initialState = boardCreator.create(
  INITIAL_SETTINGS.BOARD_WIDTH,
  INITIAL_SETTINGS.BOARD_HEIGHT,
  INITIAL_SETTINGS.CHECKERS_PER_PLAYER
);

export default produce((state, action) => {
  switch(action.type) {
    case actionTypes.MOVE_CHECKER: {
      const checker = action.checker;
      const movingTargetCell = action.way.jumpTo;
      let checkerType = checker.type;

      if (checkerType !== 'king') {
        if (
          movingTargetCell.rowIndex === state.length - 1 &&
          checker.player === PLAYERS_TAGS.PLAYER1
        ) {
          checkerType = 'king';
        }

        if (
          movingTargetCell.rowIndex === 0 &&
          checker.player === PLAYERS_TAGS.PLAYER2
        ) {
          checkerType = 'king';
        }
      }

      state[checker.rowIndex][checker.cellIndex].checker = null;
      state[movingTargetCell.rowIndex][movingTargetCell.cellIndex].checker = {
        ...checker,
        type: checkerType,
        rowIndex: movingTargetCell.rowIndex,
        cellIndex: movingTargetCell.cellIndex
      };
      break;
    }

    case actionTypes.REMOVE_CHECKER: {
      const checker = action.checker;

      state[checker.rowIndex][checker.cellIndex].checker = null;
      break;
    }

    case actionTypes.RESET_BOARD: {
      return boardCreator.create(
        INITIAL_SETTINGS.BOARD_WIDTH,
        INITIAL_SETTINGS.BOARD_HEIGHT,
        INITIAL_SETTINGS.CHECKERS_PER_PLAYER
      );
    }
  }
}, initialState);