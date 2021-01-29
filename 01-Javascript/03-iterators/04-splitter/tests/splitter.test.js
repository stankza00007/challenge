const {
    sizeSplitter,
    blockSplitter
} = require('../lib/splitter')

let firstArray = ["cat", "dog", "data", "ask", "win", "deal", "one", "two", "cow", "beer"]
let firstResult = sizeSplitter([], 1)
let secondResult = sizeSplitter(firstArray, 3)

let thirdArray = [ "z", "a", "bb", "cc", "aa", "abc" ]
let thirdResult = sizeSplitter(thirdArray, 2)

describe('The \'sizeSplitter(array, size)\' function', () => {
    test('should return an array', () => {
        expect(Array.isArray(firstResult)).toBe(true)
    })

    test('should return an array containing two arrays', () => {
        expect(firstResult.length).toBe(2)
        expect(Array.isArray(firstResult[0])).toBe(true)
        expect(Array.isArray(firstResult[firstResult.length-1])).toBe(true)
    })

    describe(`with arguments '${firstArray}' and '3'`, () => {
        test("should find 7 words that have 3 letters", () => {
            expect(secondResult[0].length).toBe(7)
        })
    
        test("should find 3 words that do not have 3 letters", () => {
            expect(secondResult[secondResult.length-1].length).toBe(3)
        })
    
        test("should return an array of sorted arrays", () => {
            expect(secondResult[0]).toStrictEqual(["ask", "cat", "cow", "dog", "one", "two", "win"])
            expect(secondResult[secondResult.length-1]).toStrictEqual(["beer", "data", "deal"])
    
        })
    })

    describe(`with arguments '${thirdArray}' and '2'`, () => {
        test("should not be confused by 1-letter words", () => {
            expect(thirdResult[0]).toStrictEqual(["aa", "bb", "cc"])
            expect(thirdResult[secondResult.length-1]).toStrictEqual(["a", "abc", "z"])
        })
    })
})