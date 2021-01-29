const Alarm = require('../lib/index')

describe('Alarm', () => {
    test('should set a 5s alarm', () => {
        const callback = jest.fn();
        jest.useFakeTimers()

        Alarm.setAlarm(5, callback)

        expect(callback).not.toBeCalled();

        jest.advanceTimersByTime(5000);

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    })
    test('should set a 10s alarm', () => {
        const callback = jest.fn();
        jest.useFakeTimers()

        Alarm.setAlarm(5, callback)

        expect(callback).not.toBeCalled();

        jest.advanceTimersByTime(10000);

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    })
    test('should snooze for 5 seconds', () => {
        const callback = jest.fn();
        jest.useFakeTimers()

        Alarm.snooze(callback)

        expect(callback).not.toBeCalled();

        jest.advanceTimersByTime(5000);

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    })
})
