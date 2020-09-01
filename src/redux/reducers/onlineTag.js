import produce from 'immer'
import actionTypes from 'redux/actionTypes';
import { PLAYERS_TAGS } from 'js/constants';

const onlineTag = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ONLINE_TAG: {
      
      switch(action.playerTag) {
        case PLAYERS_TAGS.PLAYER1: return PLAYERS_TAGS.PLAYER1;
        case PLAYERS_TAGS.PLAYER2: return PLAYERS_TAGS.PLAYER2;
        case null: return null;
      }

    }
  }
}, null);

export default onlineTag;