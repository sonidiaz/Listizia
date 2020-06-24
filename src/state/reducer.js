import { combineReducers } from 'redux';
import lists from './list/list-reducer'

const reducers = combineReducers({
    lists
  }
)

export default reducers