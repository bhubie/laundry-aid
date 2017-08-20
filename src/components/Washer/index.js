import React from 'react';
import { CycleSelector } from '../CycleSelector/index.js';
import './style.css';

export class Washer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Washer'
        }
    }
    render() {
        return (
        <div className="Washer">
            <CycleSelector type={this.state.type} />
        </div>
        );
    }
}