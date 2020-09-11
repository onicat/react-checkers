import { PLAYERS_TAGS, PLAYERS_COLORS } from "./constants";

const getPlayerColor = (playerTag) => {
  if (playerTag === PLAYERS_TAGS.PLAYER1) {
    return PLAYERS_COLORS.PLAYER1;
  } else {
    return PLAYERS_COLORS.PLAYER2;
  }
};

export default getPlayerColor;