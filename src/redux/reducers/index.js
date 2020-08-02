import { combineReducers } from 'redux'

import settings from './settings'
import board from './board'

export default combineReducers({ board, settings });