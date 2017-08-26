import React, { Component } from 'react';
import './style.css';

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: 'Not Started'
          };
      }
    render() {
        return (
        <div className="Timer">
           <h1>{this.state.timeRemaining}</h1>
           <button>Stop Timer</button>
        </div>
        );
    }
}