const temperature = require('../lib/temperature')

describe('The \'temperature\' function', () => {
    test('should return the correct output TEST: 1', () => {
        expect(temperature([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([1,1,4,2,1,1,0,0])
    })

    test('should return the correct output TEST: 2', () => {
        expect(temperature([30, 31, 30])).toStrictEqual([1,0,0])
    })

    test('should return the correct output TEST: 3', () => {
        expect(temperature([100, 100, 99, 90, 30, 33, 33, 36, 90])).toStrictEqual([0, 0, 0, 0, 1, 2, 1, 0])
    })

    test('should return the correct output TEST: 4', () => {
        expect(temperature([30, 34, 30, 30, 33, 46, 73])).toStrictEqual([1,4,2,1,1,1,0])
    })

    test('should return the correct output TEST: 1', () => {
        expect(temperature([30, 34, 30, 30, 33, 46, 73])).toStrictEqual([1,4,2,1,1,1,0])
    })
})