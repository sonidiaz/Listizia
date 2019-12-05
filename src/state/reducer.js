import { combineReducers } from 'redux';
import list from './list/list-reducer'


const reducers = combineReducers(
  list
)

export default reducers