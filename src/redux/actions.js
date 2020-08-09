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