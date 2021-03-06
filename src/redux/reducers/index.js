import { combineReducers } from 'redux'

import settings from './settings'
import board from './board'
import currentPlayer from './currentPlayer'
import onlineTag from './onlineTag'
import stage from './stage'

export default combineReducers({ currentPlayer, onlineTag, board, settings, stage });