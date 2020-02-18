import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import ToEditReducer from './ToEditReducer'

export default combineReducers({TodoReducer, ToEditReducer})