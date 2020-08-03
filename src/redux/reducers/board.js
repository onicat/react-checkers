import produce from 'immer'

import { INITIAL_SETTINGS } from 'js/constants'
import BoardCreator from 'js/creators/BoardCreator';
import actionTypes from 'redux/actionTypes';

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
      const way = action.way;

      // Нет индексов в интерфейсе way
      state[checker.rowIndex][checker.cellIndex].checker = null;
      state[way.rowIndex][way.cellIndex].checker = {
        ...checker,
        rowIndex: way.rowIndex,
        cellIndex: way.cellIndex
      };
    }
  }
}, initialState);