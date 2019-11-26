import React from 'react';
import "../styles/AddTask.css";


const AddTask = props => {
  return (
    <div className="AddTaskUI ">
      <div className="d-flex flex-row form-group">
        <input type="text" name="addTask" id="addTask" className="addTask"/>
        <button className="btn btn-primary">Agregar</button>
      </div>
    </div>
  )
}

export {AddTask}