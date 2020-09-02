import produce from 'immer'
import actionTypes from 'redux/actionTypes';

const initialState = null;

const roomId = produce((state, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ROOM_ID: {
      return action.id;
    }
  }
}, initialState);

export default roomId;