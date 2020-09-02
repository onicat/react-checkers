import actionTypes from "./actionTypes"

export const moveChecker = (checker, way) => ({
  type: actionTypes.MOVE_CHECKER,
  checker,
  way
});

export const removeChecker = (checker) => ({
  type: actionTypes.REMOVE_CHECKER,
  checker
});

export const togglePlayer = () => ({
  type: actionTypes.TOGGLE_PLAYER
});

export const changeOnlineTag = (playerTag) => ({
  type: actionTypes.CHANGE_ONLINE_TAG,
  playerTag
});

export const changeStage = (stage) => ({
  type: actionTypes.CHANGE_STAGE,
  stage
});

export const resetBoard = () => ({
  type: actionTypes.RESET_BOARD
});

export const resetCurrentPlayer = () => ({
  type: actionTypes.RESET_CURRENT_PLAYER
});

export const changeRoomId = (id) => ({
  type: actionTypes.CHANGE_ROOM_ID,
  id
});