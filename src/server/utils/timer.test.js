var expect = require('expect');
var sinon  = require('sinon');
const { Timer } = require('./timer');
var clock;

describe('Timer', () => {
    beforeAll(() => {
        clock = sinon.useFakeTimers();
    });

    afterAll(() => {
        clock.restore();
    });

    it('should return remaining time of 6000 when Timer.Start is not called', () => {
        var timer = new Timer();
        timer.setTime(6000);

        var remainingTime = timer.getRemainingTimeInMillis();

        expect(remainingTime).toBe(6000);
    });

    it('should return remaining time of 5000 when a second has passed', () => {
        var timer = new Timer();
        timer.setTime(6000);
        timer.start();
        clock.tick(1000);

        var remainingTime = timer.getRemainingTimeInMillis();

        expect(remainingTime).toBe(5000);

    });

    it('should call stop when timer reaches zero', () => {
       
        var timer = new Timer();
        timer.setTime(6000);
        var spy = expect.spyOn(timer, 'stop')
        timer.start();
        clock.tick(6000);

        var remainingTime = timer.getRemainingTimeInMillis();
        expect(spy).toHaveBeenCalled();
        expect(remainingTime).toBe(0);

    });

    it('should return remaining time formatted as hh:mm:ss', () => {
       
        var timer = new Timer();
        timer.setTime(3600000);
        var remainingTime = timer.getRemainingTimeFormatted();
        expect(remainingTime).toBe('01:00:00');
        timer.start();
        clock.tick(6000);

        var newRemainingTime = timer.getRemainingTimeFormatted();
        expect(newRemainingTime).toBe('00:59:54');
    });

    it('should return the date/time the timer was started at', () => {
       
        var timer = new Timer();
        timer.setTime(3600000);
        timer.start();
        clock.tick(6000);

        var startedAt = timer.getTimerStartDate();
        expect(startedAt).toBe('December 31, 1969 6:00 PM');
    });

    it('isStarted should return true if the timer has been started', () => {
        
        var timer = new Timer();
        timer.setTime(1000);
        timer.start();

        var isStarted = timer.isStarted();
        expect(isStarted).toBe(true);
     });

     it('isStarted should return false if the timer has not been started', () => {
        
        var timer = new Timer();
        timer.setTime(1000);
        var isStarted = timer.isStarted();
        expect(isStarted).toBe(false);
     });
});