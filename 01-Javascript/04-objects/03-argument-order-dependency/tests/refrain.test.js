const { betterRefrain, refrain } = require('../lib/refrain')

describe('The \'betterRefrain\' function', () => {
    test('should have the same behavior as the #refrain function', () => {
        expect(betterRefrain("hey ya", null)).toBe(refrain("hey ya"))
    })

    test('should follow instructions correctly when additional options are passed as parameters', () => {
        let response = betterRefrain("hey ya", { vibrato: 10, strong: true, number_of_times: 4 })

        expect(response).toBe(refrain("hey ya", 4, 10, true))
    })
})