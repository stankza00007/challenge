
const canYouVote = require('../lib/canYouVote')


describe('The \'canYouVote\' method', () => {
    test('should return false if age is less than 18', () => {
        expect(canYouVote(17)).toBe(false)
    })

    test('should return true if age is exactly 18', () => {
        expect(canYouVote(18)).toBe(true)
    })

    test('should return truee if age is greater than 18', () => {
        expect(canYouVote(23)).toBe(true)
    })
})
