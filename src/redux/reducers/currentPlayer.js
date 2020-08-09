import { produce } from 'immer'

import { PLAYERS_TAGS } from 'js/constants';
import actionTypes from 'redux/actionTypes';

const initialState = PLAYERS_TAGS.PLAYER1;

const currentPlayer = produce((state, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_PLAYER: {
      if (state === PLAYERS_TAGS.PLAYER1) {
        state = PLAYERS_TAGS.PLAYER2;
      } else {
        state = PLAYERS_TAGS.PLAYER1;
      }
    }
  }
}, initialState);

export default currentPlayer;