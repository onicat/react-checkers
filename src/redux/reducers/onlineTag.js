import produce from 'immer'
import actionTypes from 'redux/actionTypes';
import { PLAYERS_TAGS } from 'js/constants';

const onlineTag = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ONLINE_TAG: {
      return (action.playerTag === PLAYERS_TAGS.PLAYER1) ?
        PLAYERS_TAGS.PLAYER1:
        PLAYERS_TAGS.PLAYER2
    }
  }
}, null);

export default onlineTag;