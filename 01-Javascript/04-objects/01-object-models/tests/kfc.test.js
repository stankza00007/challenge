const caloriesCounter = require('../lib/kfc')

describe('The \'caloriesCounter\' function', () => {
    test('Should compute number of calories', () => {
        let order = ["Chicken Drumstick", "French Fries", "7UP"]
        expect(caloriesCounter(order[0], order[1], order[2])).toBe(540)
    })

    test('Should compute number of calories', () => {
        let order = ["Popcorn Nuggets", "Chicken Whole Wing", "Pepsi"]
        expect(caloriesCounter(order[0], order[1], order[2])).toBe(900)
    })
})