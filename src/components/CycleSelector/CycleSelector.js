import React, { Component } from 'react';
import './CycleSelector.css';
import io from 'socket.io-client';  
const socket = io();

export class CycleSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
          cycle: this.props.options[0].Name
        };
        this.handleChange = this.handleChange.bind(this);
        this.populateOptions = this.populateOptions.bind(this);
        this.handleStartCycle = this.handleStartCycle.bind(this);
      }

    populateOptions(options) {
        return options.map((option, index) => (
          <option key={index} value={option.Name}>{option.Name}</option>
        ));
    }

    handleStartCycle(type, cycle) {
        socket.emit('startTimer', {type: type, cycle: cycle});
    }

    handleChange(e) {
        this.setState({ cycle: e.target.value });
    }

    render() {
        return (
        <div className="Selector">
            <label>Cycle: 
                <select name="cycleSelect" onChange={this.handleChange}> 
                    {this.populateOptions(this.props.options)}
                </select>
            </label>
            <button onClick={ () => this.handleStartCycle(this.props.type, this.state.cycle)}>
                Start
            </button>
        </div>
        );
    }
}

