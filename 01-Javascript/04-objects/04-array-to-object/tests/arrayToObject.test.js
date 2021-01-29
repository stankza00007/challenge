const {
    arrayToObject,
    arrayToObjectTwo,
    twoDArrayToObject
} = require('../lib/arrayToObject')

describe('The \'arrayToObject\' function', () => {
    test('should build an object with index keys', () => {
        expect(arrayToObject(["a", "b", "c", "d", "e"])).toStrictEqual({ "0": "a", "1": "b", "2": "c", "3": "d", "4": "e" })
    })

    test('should build an object with the first element of each pair as the key', () => {
        expect(arrayToObjectTwo(["good", 130, "normal", 50, "bad", 31, "other", 10])).toStrictEqual({ "good": 130, "normal": 50, "bad": 31, "other": 10 })
    })

    test('should build an object using an array of arrays', () => {
        expect(twoDArrayToObject([ [ "burger", 60 ],[ "fries", 15 ],[ "sprite", 10],[ "coke", 12]])).toStrictEqual({ "burger": 60, "fries": 15, "sprite": 10, "coke": 12 })
    })
})