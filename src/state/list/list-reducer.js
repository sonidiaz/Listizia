import {ADD_LIST} from './list-action-creators'
import listInitialState from './list-initial-state'

export default (state = listInitialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state, 
        list: action.payload
      };
    default:
      return state
  }

}