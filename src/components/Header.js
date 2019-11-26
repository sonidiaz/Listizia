import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Header.css';


export const Header = props => (
  <header className="App-header">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-2">
          <h1>{props.children}</h1>
        </div>
      </div>
    </div>
  </header>
)