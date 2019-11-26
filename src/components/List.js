import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from "react";
import {Task} from './Task';
import "../styles/List.css";
// import Task from "./Task";

export const List = props => {

  let task = '';
  const inputTask = useRef(null);
  const buttonSendTask = useRef(null);
  const [tasks, setTasks] = useState([])

  const { value = props.name, removeList = () => {}, idx } = props;

  const createTask = () => {
    const newTask = [...tasks, task];
    if(inputTask.current.value != ''){
      inputTask.current.value = '';
      setTasks(newTask)
    }
  }

  const removeTask = index => {
    let newArrTaks = [...tasks];
    newArrTaks.splice(index, 1);
    setTasks(newArrTaks)
  }
  
  const handleChange = (e) => {
    task = e.target.value;
  }

  return (
    <div className="td-list_container">
      <h2>{value}</h2>
      <div className="AddTaskUI">
        <div className="d-flex form-group bd-highlight">
          <input 
            ref={inputTask} 
            type="text" name="addTask" id="addTask" onChange={handleChange} className="addTask flex-fill bd-highlight"/>
          <button 
            ref={buttonSendTask}
            onClick={createTask} className="btn btn-primary flex-fill bd-highlight">Add</button>
        </div>
      </div>
      {
        tasks.map( (el,idx) => (
          <Task 
            key={idx}
            idx={idx}
            task={el}
            removeTask={ev => removeTask(idx, ev)}
          />
        ))
      }
      <div className="td-list_add_task_box">
        <button 
          onClick={() => removeList(idx)} 
          className="td-list_add_cta">
          Remove this task
        </button>
      </div>
    </div>
  );
}

