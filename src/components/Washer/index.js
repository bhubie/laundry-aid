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
            started: false
        }
    }

    componentDidMount() {
        const { socket } = this.props;

        socket.on('timerStarted', (payload) => {
            console.log('timer started event!'); 
            this.setState({started: true});
        });
       
    }
    render() {
        if (this.state.started === true) {
            return (
                <div className="Washer">
                    <Timer socket={this.props.socket} />
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