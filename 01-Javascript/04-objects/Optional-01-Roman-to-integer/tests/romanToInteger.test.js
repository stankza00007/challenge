const romanToInteger = require('../lib/romanToInteger')

describe('The \'romanToInteger\' function', () => {
    test('should work for several values', () => {
        expect(romanToInteger('IV')).toBe(4)
        expect(romanToInteger('XII')).toBe(12)
        expect(romanToInteger('XIX')).toBe(19)
        expect(romanToInteger('XLIX')).toBe(49)
        expect(romanToInteger('LXXVIII')).toBe(78)
        expect(romanToInteger('LXXIX')).toBe(79)
        expect(romanToInteger('CI')).toBe(101)
        expect(romanToInteger('MCMLXXXIX')).toBe(1989)
    })
})