export const ADD_TASK = 'ADD_TASK';

export function addTask(taks){
  const data = []
  return {
    type: ADD_TASK,
    payload: data
  }
  console.log('action para agregar task');
}