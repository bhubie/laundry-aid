var expect = require('expect');
const { Dryer } = require('./dryer');

describe('Dryer', () => {

    it('getCycle should return undefined when a new dryer is created', () => {
        var dryer = new Dryer();
        var cycle = dryer.getCycle();
        expect(cycle).toBe(undefined);
    });

    
    it('getCycle should return a valid cycle if a valid cycle is set', () => {
        var dryer = new Dryer();
        var cycle = 'Timed';
        dryer.setCycle(cycle, undefined);
        var setCycle = dryer.getCycle();
        expect(setCycle).toBe(cycle);
    });

    
    it('getCycleTime should return the cycle time for the passed in cycle', () => {
        var dryer = new Dryer();
        var cycle = 'High Heat - More Dry';
        dryer.setCycle(cycle);
        var cycleTime = dryer.getCycleTime();
        expect(cycleTime).toBe(60);
    });

    it('getCycleTime should return the cycle time passed in the method when the cycle is Timed', () => {
        var dryer = new Dryer();
        var cycle = 'Timed';
        dryer.setCycle(cycle, 1);
        var cycleTime = dryer.getCycleTime();
        expect(cycleTime).toBe(1);
    });
    
});