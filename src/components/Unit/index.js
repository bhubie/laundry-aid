import React from 'react';
import { CycleSelector } from '../CycleSelector/index.js';
import { Timer } from '../Timer/index.js';
import WasherCycles from '../../config/WasherConfig.json';
import './style.css';

export class Unit extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            type: this.props.type,
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
        socket.emit('stopTimer', {type: this.state.type });
    }

    render() {
        const unitLabel = (
            <h2>{ this.state.type }</h2>
        );

        let unitBody = null;
        if (this.state.started === true) {
            unitBody =  <div className="UnitBody">
                <Timer timeRemaining={ this.state.timeRemaining } />
                <button onClick={this.handleStopTimer}>Stop Timer</button>
                </div>
        } else {
            unitBody = <div className="UnitBody">
                <CycleSelector type={this.state.type} 
                    options={this.state.options.cycles}
                    socket={this.props.socket} />
                </div>
        }

       return (
            <div className="Unit">
                {unitLabel}
                {unitBody}
            </div>
       );
    }
}