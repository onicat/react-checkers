import { combineReducers } from 'redux'

import settings from './settings'
import board from './board'
import currentPlayer from './currentPlayer'
import onlineTag from './onlineTag'

export default combineReducers({ currentPlayer, onlineTag, board, settings });