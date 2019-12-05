import React, {useState, useRef} from 'react';
import {Header} from '../components/Header';
import {List} from './List';
import '../styles/App.css';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

import store from '../state/store'
import {Provider} from 'react-redux'


const Appy = () => {
  const lists = [
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday" },
    { name: "Sunday" }
  ]

  const taskContent = useRef(null)
  const taskTextContent = taskContent;
  const [list, setList] = useState(lists);

  const removeList = index => {
    let newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr)
  }

  const createList = () => {
    const lists_new = [...list, { name: taskTextContent.current.value }];
    taskTextContent.current.value && setList(lists_new);
    taskTextContent.current.value = '';
  }

  return(
    <Provider store={store}>
      <div className="todoTizia listizia-app">
        <div className="container-fluid listizia-app_create-list">
          <div className="row">
            <div className="col-sm-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2">
                    <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <div className="col-8 delete-padding-left">
                    <h1>Listizia</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group-listizia">
                <div className="form-control-listizia">
                  <input type="text" name="nameTable" ref={taskContent} id="nameTable" placeholder="¿Que vas hacer hoy?"/>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
                <div className="form-control-listizia">  
                  <button onClick={createList} className=" btn btn-primary">
                    Create new list
                  </button>
                </div>
            </div>
          </div>
        </div>
        <section className="tdl-main-section">
          {list.map((list, idx) => (
            <List
              key={idx}
              idx={idx}
              removeList={ev => removeList(idx, ev)}
              name={list.name}
            />
          ))}
        </section>
      </div>
    </Provider>
  )
}

export {Appy};
