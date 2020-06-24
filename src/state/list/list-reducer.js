import {CREATE_NEW_LIST, REMOVE_LIST} from './list-actions-creator'
import lists from './list-initial-state'

export default (state = lists, action) => {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return [
        ...state, 
        action.payload
      ]
      case REMOVE_LIST:
      const newArray = state.filter((v,i)=> state[i] !== state[action.payload])
      return newArray
    default:
      return state
  }
}