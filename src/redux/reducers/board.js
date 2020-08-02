import produce from 'immer'

import { INITIAL_SETTINGS } from 'js/constants'
import BoardCreator from 'js/creators/BoardCreator';

const boardCreator = new BoardCreator();
const initialState = boardCreator.create(
  INITIAL_SETTINGS.BOARD_WIDTH,
  INITIAL_SETTINGS.BOARD_HEIGHT,
  INITIAL_SETTINGS.CHECKERS_PER_PLAYER
);

export default produce((state, action) => {

}, initialState);