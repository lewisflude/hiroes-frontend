import { combineReducers } from 'redux'

import directoryFilter from './directoryFilter'
import facebookResponse from './facebookResponse'

const hiroesApp = combineReducers({
  directoryFilter,
  facebookResponse
})

export default hiroesApp
