const betterCaloriesCounter = require('../lib/kfc')

describe('The \'betterCaloriesCounter\' function', () => {
    test('Should compute number of calories', () => {
        let order = ["Chicken Drumstick", "Chicken Thigh", "Salad", "Pepsi", "Pepsi"]
        expect(betterCaloriesCounter(order)).toBe(745)
    })

    test('Should compute number of calories', () => {
        let order = ["Popcorn Nuggets", "Chicken Drumstick", "Chicken Whole Wing", "Salad", "Pepsi", "7UP"]
        expect(betterCaloriesCounter(order)).toBe(1225)
    })
})