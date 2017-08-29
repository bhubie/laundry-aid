import React from 'react';
import { CycleSelector } from '../CycleSelector/index.js';
import { Timer } from '../Timer/index.js';
import WasherCycles from '../../config/WasherConfig.json';
import './style.css';

export class Washer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            type: 'Washer',
            options: WasherCycles,
            started: false,
            timeRemaining: 'Not Started'
        }

        this.handleStopTimer =  this.handleStopTimer.bind(this);
    }

    componentDidMount() {
        const { socket } = this.props;

        socket.on('timerStarted', (payload) => {
            console.log('timer started event!'); 
            this.setState({started: true});
        });

        socket.on('tickTimer', (payload) => {
            if (payload.type === 'Washer') {
                this.setState({ 
                    timeRemaining: payload.time,
                    started: true
                });
            }
        });

        socket.on('stopTimer', (payload) => {
            if (payload.type === 'Washer') {
                this.setState({ 
                    timeRemaining: 'Not Started',
                    started: false
                });
            }
        });
    }

    handleStopTimer () {
        const { socket } = this.props;
        socket.emit('stopTimer', {type: 'Washer'});
    }

    render() {
        if (this.state.started === true) {
            return (
                <div className="Washer">
                    <Timer timeRemaining={ this.state.timeRemaining } />
                    <button onClick={this.handleStopTimer}>Stop Timer</button>
                </div>
            );
        } else {
            return (
                <div className="Washer">
                    <CycleSelector type={this.state.type} 
                        options={this.state.options.cycles}
                        socket={this.props.socket} />
                </div>
            );
        }
    }
}