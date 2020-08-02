import produce from 'immer'

import { INITIAL_SETTINGS } from 'js/constants'

const initialState = {
  boardWidth: INITIAL_SETTINGS.BOARD_WIDTH,
  boardHeight: INITIAL_SETTINGS.BOARD_HEIGHT,
  checkersPerPlayer: INITIAL_SETTINGS.CHECKERS_PER_PLAYER,
};

export default produce((state, action) => {
 
}, initialState);