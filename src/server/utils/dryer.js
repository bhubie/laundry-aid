const {Timer} = require('./timer');
const dryerConfig = require('../../config/DryerConfig.json');

class Dryer extends Timer {
     constructor () {
        super();
        this.cycles = dryerConfig.cycles;
        this.cycle = undefined;
        this.cycleTime = undefined;
    }

    setCycle (cycle, time) {
        this.cycle = cycle;
        if (cycle === 'Timed') {
            this.cycleTime = time;
            this.setTime(time * 60000);
        } else {
            try {
                var t = dryerConfig.cycles.find(x => x.Name === cycle).Time;
                this.cycleTime = t;
                this.setTime(t * 60000);
            } catch (e) {
                throw `Cycle Time not found for cycle ${cycle}. Please try a differnt cycle`;
            }
        }
       
    }

    getCycle () {
        return this.cycle;
    }

    getCycleTime () {
        return this.cycleTime;
    }

    getCycles () {
        return this.cycles;
    }

}

module.exports = {Dryer};  