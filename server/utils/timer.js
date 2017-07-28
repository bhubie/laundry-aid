//var util = require('util'),  
//var events  = require('events');
var EventEmitter = require('events').EventEmitter;
var moment = require('moment');

class Timer {
    constructor(time) {
        this.time = time;
        this.interval = undefined;
        this.startedAt = undefined;
        this.seconds = 1000;

        //events.EventEmitter.call(this);
        //EventEmitter.call(this);
    }

    start() {

        if (this.interval) {
            return;
        }

        this.startedAt = moment().valueOf();
        this.interval = setInterval(this.tickTimer, this.second);
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

        this.time -= this.seconds;

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