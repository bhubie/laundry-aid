import React, { Component } from 'react';
import { Washer } from '../Washer/index.js';
import logo from './logo.svg';
import './style.css';
import io from 'socket.io-client';  
const socket = io();

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.state.washerStarted)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Laundry Time</h2>
        </div>

        <Washer started= {this.state.washerStarted} socket = {socket} />
      </div>
    );
  }
}

export default App;
