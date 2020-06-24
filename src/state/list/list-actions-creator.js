  
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export function createNewList(valor) {
  return {
    type: CREATE_NEW_LIST,
    payload: valor
  }
}

export function removeList(index){
  return {
    type: REMOVE_LIST,
    payload: index
  }
}