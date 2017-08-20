import React, { Component } from 'react';
import './style.css';

export class CycleSelector extends Component {
  render() {
    return (
      <div className="Selector">
           <form id="formStartTimer">
               <label>Cycle: 
                   <select name="cycleSelect"> </select>
                </label>
                <button>Start</button>
            </form>
      </div>
    );
  }
}

