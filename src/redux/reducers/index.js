import { combineReducers } from 'redux'

import settings from './settings'
import board from './board'
import currentPlayer from './currentPlayer'

export default combineReducers({ currentPlayer, board, settings });