import produce from 'immer'

import { STAGES } from 'js/constants';
import actionTypes from 'redux/actionTypes';

const initialState = STAGES.OFFLINE;

const stage = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_STAGE: {

      switch(action.stage) {
        case STAGES.OFFLINE: return STAGES.OFFLINE;
        case STAGES.CONNECTING: return STAGES.CONNECTING;
        case STAGES.WAITING_FOR_PLAYER: return STAGES.WAITING_FOR_PLAYER;
      }

    }
  }
}, initialState);

export default stage;