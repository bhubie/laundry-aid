const {Timer} = require('./timer');
const washerConfig = require('../../../config/WasherConfig.json');

class Washer extends Timer {
     constructor(cycle) {
        var c = cycle;

        try {
            var t = washerConfig.cycles.find(x => x.Name === c).Time;
            super(t * 60000);
            this.cycle = c;
            this.cycleTime = t;
            this.cycles = washerConfig.cycles;
        } catch (e) {
              throw `Cycle Time not found for cycle ${c}. Please try a differnt cycle`;
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


