import React, { Component } from 'react';
import './App.css';
import Dummy from './components/Dummy'
import Spamalot from './components/Spamalot';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Menu from './components/Menu';


export function App() {
  
  return (
    <div className="app">

      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          <Dummy />
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
          <Spamalot />
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 4</h4>
        <div className="exercise" id="ex-4">
          <NavBar />
          <Menu />
          <Checkout />
        </div>
      </div>
    </div>
  )
}

