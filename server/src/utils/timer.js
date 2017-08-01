const EventEmitter = require('events');
const moment = require('moment');
require("moment-duration-format");

const second = 1000;

class Timer extends EventEmitter {
    constructor(time) {
        super();
        this.time = time;
        this.interval = undefined;
        this.startedAt = undefined;
    }

    start () {

        if (this.interval) {
            return;
        }

        this.startedAt = moment().valueOf();
        this.interval = setInterval(this.tickTimer.bind(this), second);
        this.emit('start:timer');

        console.log('Starting the Timer!');
    }

    stop () {
        console.log('Stoping the Timer!');

        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
            this.emit('stop:timer');
        }
    }

    tickTimer () {

        this.time -= second;

        var formattedTime = 'todo';
        this.emit('tick:timer', formattedTime);
        
        if (this.time === 0) {
            this.stop();
        }
    }

    getRemainingTimeInMillis () { 
        return this.time;
    }

    getRemainingTimeFormatted () {
        return moment.duration(this.time).format("hh:mm:ss", { trim: false });
    }

    getTimerStartDate () {
        return moment(this.startedAt).format('LLL');
    }
}

module.exports = {Timer};  