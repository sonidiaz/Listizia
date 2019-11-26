import React from 'react';
import '../styles/Task.css'

const Task = props => {
  const { removeTask = () => {}, idx, task } = props;
  
  const handleTask = (e) => {
    removeTask(idx)
  }

  return(
    <div className="taskItem">
        <p>{task}</p>
        <button onClick={handleTask} className="btn btn-danger btn-sm listizia_botton_close">x</button>
    </div>
  )
}

export {Task}