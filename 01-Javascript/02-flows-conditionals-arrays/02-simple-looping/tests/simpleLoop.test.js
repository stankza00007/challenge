
const simpleLoop = require('../lib/simpleLoop')


describe('The \'sumWithFor\' method ', () => {
    test('should return the `10` if min is 1, max is 5', () => {
        expect(simpleLoop.sumWithFor(1,5)).toBe(15)
    })
    test('should return the `18` if min is 5, max is 7', () => {
        expect(simpleLoop.sumWithFor(5,7)).toBe(18)
    })
})

describe('The \'sumWithWhile\' method ', () => {
    test('should return the `10` if min is 1, max is 5', () => {
        expect(simpleLoop.sumWithWhile(1,5)).toBe(15)
    })
    test('should return the `18` if min is 5, max is 7', () => {
        expect(simpleLoop.sumWithWhile(5,7)).toBe(18)
    })
})
