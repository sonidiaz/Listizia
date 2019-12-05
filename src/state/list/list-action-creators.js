export const ADD_LIST = 'ADD_LIST';

export function addList(list) {
  const newList = list
  return {
    type: ADD_LIST,
    payload: newList
  }
}