import React, { Component } from 'react';
import { Unit } from '../Unit/index.js';
import logo from './washing-machine.svg';
import './style.css';
import io from 'socket.io-client';  
const socket = io();

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Laundry Time</h2>
        </div>

        <Unit type='Washer'
          socket = {socket} />
      </div>
    );
  }
}

export default App;
