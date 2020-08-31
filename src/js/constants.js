export const INITIAL_SETTINGS = Object.freeze({
  BOARD_WIDTH: 8,
  BOARD_HEIGHT: 8,
  CHECKERS_PER_PLAYER: 12
});

export const PLAYERS_TAGS = Object.freeze({
  PLAYER1: 'player1',
  PLAYER2: 'player2'
});

export const PLAYERS_COLORS = Object.freeze({
  PLAYER1: '#00A1FB',
  PLAYER2: '#00E8A8'
});

export const SERVER_WS_URL = 'http://localhost:3005/';

export const STAGES = Object.freeze({
  OFFLINE: 'OFFLINE',
  CONNECTING: 'CONNECTING',
  WAITING_FOR_PLAYER: 'WAITING_FOR_PLAYER'
});