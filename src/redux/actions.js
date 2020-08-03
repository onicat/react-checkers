import actionTypes from "./actionTypes";

export const moveChecker = (checker, way) => ({
  type: actionTypes.MOVE_CHECKER,
  checker,
  way
});