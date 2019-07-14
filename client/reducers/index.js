import {combineReducers} from 'redux'

import auth from './auth'

import animals from './animals'

export default combineReducers({
  auth,
  animals
})
