const {Timer} = require('./timer');
const washerConfig = require('../../config/WasherConfig.json');

class Washer extends Timer {
     constructor () {
        super();
        this.cycles = washerConfig.cycles;
        this.cycle = undefined;
        this.cycleTime = undefined;
    }

    setCycle (cycle) {
        this.cycle = cycle;
        try {
            var t = washerConfig.cycles.find(x => x.Name === cycle).Time;
            this.cycleTime = t;
            this.setTime(t * 60000);
        } catch (e) {
            throw `Cycle Time not found for cycle ${cycle}. Please try a differnt cycle`;
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

module.exports = {Washer};  


