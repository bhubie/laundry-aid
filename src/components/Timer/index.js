import React, { Component } from 'react';
import './style.css';

export class Timer extends Component {

    constructor(props) {
        super(props);
        /*
        this.state = {
            timeRemaining: 'Not Started'
          };

        */
    }

    componentDidMount() {
        const { socket } = this.props;

        socket.on('timerStarted', (payload) => {
            this.setState({started: true});
        });

        socket.on('tickTimer', (payload) => {
           
        });
       
    }
    render() {
        return (
        <div className="Timer">
           <h1>{this.props.timeRemaining}</h1>
           <button>Stop Timer</button>
        </div>
        );
    }
}