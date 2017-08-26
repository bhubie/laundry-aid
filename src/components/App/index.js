import React, { Component } from 'react';
import { Washer } from '../Washer/index.js';
import logo from './logo.svg';
import './style.css';
import io from 'socket.io-client';  
const socket = io();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      washerStarted: false
    };

    socket.on('timerStarted', (payload) => {
        console.log('timer started event!'); 
        this.setTimerStarted(payload);
    });
  }

  setTimerStarted(payload) {
    if (payload.type === 'Washer') {
      this.setState({washerStarted: true});
    }
  };

  render() {

    console.log(this.state.washerStarted)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Washer started= {this.state.washerStarted} />
      </div>
    );
  }
}

export default App;
