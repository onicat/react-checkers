import { produce } from 'immer'

import { PLAYERS_TAGS } from 'js/constants'
import actionTypes from 'redux/actionTypes'

const initialState = PLAYERS_TAGS.PLAYER1;

const currentPlayer = produce((state, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_PLAYER: {
      if (state === PLAYERS_TAGS.PLAYER1) {
        return PLAYERS_TAGS.PLAYER2;
      } else {
        return PLAYERS_TAGS.PLAYER1;
      }
    }

    case actionTypes.RESET_CURRENT_PLAYER: {
      return PLAYERS_TAGS.PLAYER1; 
    }
  }
}, initialState);

export default currentPlayer;