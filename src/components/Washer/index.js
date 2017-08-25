import React from 'react';
import { CycleSelector } from '../CycleSelector/index.js';
import WasherCycles from '../../config/WasherConfig.json';
import './style.css';

export class Washer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Washer',
            options: WasherCycles
        }
    }
    render() {
        return (
        <div className="Washer">
            <CycleSelector type={this.state.type} options={this.state.options.cycles} />
        </div>
        );
    }
}