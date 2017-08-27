var expect = require('expect');
var sinon  = require('sinon');
const { Washer } = require('./washer');
var clock;

describe('Washer', () => {

    it('getCycle should return undefined when a new washer is created', () => {
        var washer = new Washer();
        var cycle = washer.getCycle();
        expect(cycle).toBe(undefined);
    });

    it('getCycle should return a valid cycle if a valid cycle is set', () => {
        var washer = new Washer();
        var cycle = 'delicates';
        washer.setCycle(cycle);
        var setCycle = washer.getCycle();
        expect(setCycle).toBe(cycle);
    });

    it('getCycleTime should return the cycle time for the passed in cycle', () => {
        var washer = new Washer();
        var cycle = 'delicates';
        washer.setCycle(cycle);
        var cycleTime = washer.getCycleTime();
        expect(cycleTime).toBe(20);
    });

});