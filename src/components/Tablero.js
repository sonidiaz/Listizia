import React, { useState, useRef, useEffect } from "react";
import { List } from "./List";
import logo from "../assets/logo.svg";
import { connect } from "react-redux";
import {createNewList, removeList} from '../state/list/list-actions-creator';
import "../styles/App.css";
import "../styles/Header.css";

const Tablero = ( props ) => {
  const [list, setList] = useState(props.lists);

  const removeList = index => {
    props.removeListRedux(index)
    // let newArr = [...list];
    // newArr.splice(index, 1);
    // setList(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target[0].value;
    props.addList(newValue);
  }

  useEffect(() => {
    setList(props.lists)
  }, [props.lists])

  return (
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
          <div className="col-sm-4 ">
            <div className="form-group-listizia">
              <div className="form-control-listizia">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nameTable"
                    id="nameTable"
                    placeholder="¿Que vas hacer hoy?"
                  />
                    <button type="submit" className=" btn btn-primary">
                      Create new list
                    </button>
                </form>
              </div>
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
            name={list}
          />
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addList: (name) => dispatch(createNewList(name)),
    removeListRedux: (idx) => dispatch(removeList(idx))
  }
}
const ConnectTablero = connect(mapStateToProps, mapDispatchToProps)(Tablero);
export default ConnectTablero;
