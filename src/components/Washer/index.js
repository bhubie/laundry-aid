import React from 'react';
import { CycleSelector } from '../CycleSelector/index.js';
import { Timer } from '../Timer/index.js';
import WasherCycles from '../../config/WasherConfig.json';
import './style.css';

export class Washer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Washer',
            options: WasherCycles,
            started: this.props.started
        }
    }
    render() {
        if (this.props.started === true) {
            return (
                <div className="Washer">
                    <Timer />
                </div>
            );
        } else {
            return (
                <div className="Washer">
                    <CycleSelector type={this.state.type} options={this.state.options.cycles} />
                </div>
            );
        }
    }
}