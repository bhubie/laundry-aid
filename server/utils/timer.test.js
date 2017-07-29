var expect = require('expect');
var sinon  = require('sinon');
var {Timer} = require ('./timer');
var clock;

describe('Timer', () => {
    before(() => {
        clock = sinon.useFakeTimers();
    });

    after(() => {
        clock.restore();
    });

    it('should return remaining time of 6000 when Timer.Start is not called', () => {
        var timer = new Timer(6000);

        var remainingTime = timer.getRemainingTimeInMillis();

        expect(remainingTime).toBe(6000);
    });

    it('should return remaining time of 5000 when a second has passed', () => {
        var timer = new Timer(6000);
        
        timer.start();
        clock.tick(1000);

        var remainingTime = timer.getRemainingTimeInMillis();

        expect(remainingTime).toBe(5000);

    });

    it('should call stop when timer reaches zero', () => {
       
        var timer = new Timer(6000);
        var spy = expect.spyOn(timer, 'stop')
        timer.start();
        clock.tick(6000);

        var remainingTime = timer.getRemainingTimeInMillis();
        expect(spy).toHaveBeenCalled();
        expect(remainingTime).toBe(0);

    });

    it('should return remaining time formatted as hh:mm:ss', () => {
       
        var timer = new Timer(3600000);
        var remainingTime = timer.getRemainingTimeFormatted();
        expect(remainingTime).toBe('01:00:00');
        timer.start();
        clock.tick(6000);

        var newRemainingTime = timer.getRemainingTimeFormatted();
        expect(newRemainingTime).toBe('00:59:54');

       
        //expect(remainingTime).toBe(0);

    });
});