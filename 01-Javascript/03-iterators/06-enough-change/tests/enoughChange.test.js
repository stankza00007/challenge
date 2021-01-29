const enoughChange = require('../lib/enoughChange')

let changeOne = [2, 100, 0, 0]
let changeTwo = [0, 0, 20, 5]
let changeThree = [30, 40, 20, 5]
let changeFour = [10, 0, 0, 50]
let changeFive = [1, 0, 5, 219]

describe("The \'enoughChange\' function", () => {
    it(`should return false for [ ${changeOne} ] if price is 14.11`, () => {
        expect(enoughChange(changeOne, 14.11)).toBe(false)
    })

    it(`should return true for [ ${changeTwo} ] if price is 0.75`, () => {
        expect(enoughChange(changeTwo, 0.75)).toBe(true)
    })

    it(`should return true for [ ${changeThree} ] if price is 12.55`, () => {
        expect(enoughChange(changeThree, 12.55)).toBe(true)
    })

    it(`should return false for [ ${changeFour} ] if price is 3.85`, () => {
        expect(enoughChange(changeFour, 3.85)).toBe(false)
    })

    it(`should return false for [ ${changeFive} ] if price is 19.99`, () => {
        expect(enoughChange(changeFive, 19.99)).toBe(false)
    })
})