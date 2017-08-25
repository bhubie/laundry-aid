import React, { Component } from 'react';
import './style.css';

export class CycleSelector extends Component {

    populateOptions(options) {
        return options.map((option, index) => (
          <option key={index} value={option.Name}>{option.Name}</option>
        ));
    }


    render() {
        return (
        <div className="Selector">
            <form id="formStartTimer">
                <label>Cycle: 
                    <select name="cycleSelect"> 
                        {this.populateOptions(this.props.options)}
                    </select>
                    </label>
                    <button>Start</button>
                </form>
        </div>
        );
    }
}

