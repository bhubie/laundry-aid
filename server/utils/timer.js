//var util = require('util'),  
//var events  = require('events');
var EventEmitter = require('events').EventEmitter;
var moment = require('moment');
const second = 1000;

class Timer {
    constructor(time) {
        this.time = time;
        this.interval = undefined;
        this.startedAt = undefined;

        //events.EventEmitter.call(this);
        //EventEmitter.call(this);
    
    }

    start() {

        if (this.interval) {
            return;
        }

        this.startedAt = moment().valueOf();
        this.interval = setInterval(this.tickTimer.bind(this), second);
        //this.emit('start:timer');

        console.log('Starting the Timer!');
    }

    stop() {
        console.log('Stoping the Timer!');

        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
            //this.emit('stop:timer');
        }
    }

    tickTimer() {

        this.time -= second;

        var formattedTime = 'todo';
        //this.emit('tick:timer', formattedTime);
        
        if (this.time === 0) {
            this.stop();
        }
    }

    getRemainingTimeInMillis() { 
        return this.time;
    }

}

module.exports = {Timer};  