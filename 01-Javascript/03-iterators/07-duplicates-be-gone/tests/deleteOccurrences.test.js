const deleteOccurrences = require('../lib/deleteOccurrences')

describe("The \'deleteOccurrences\' function", () => {
    it(`should remove occurences if an element has been repeated more than 2 times`, () => {
        expect(deleteOccurrences([1, 1, 1, 1], 2)).toStrictEqual([1,1])
    })

    it(`should not remove any occurences if deleteOccurrences([true, true, true], 3)`, () => {
        expect(deleteOccurrences([true, true, true], 3)).toStrictEqual([true, true, true])
    })

    it(`should remove occurences if an element has been repeated more than 1 time`, () => {
        expect(deleteOccurrences([13, true, 13, null], 1)).toStrictEqual([13, true, null])
    })

    it(`should remove occurences if an 'string' has been repeated more than 1 time`, () => {
        expect(deleteOccurrences(["John", "John", "Marry", "Marry"], 1)).toStrictEqual(["John", "Marry"])
    })

    it(`should remove occurences if an element has been repeated more than 3 times`, () => {
        expect(deleteOccurrences(["Marry", "John", null, "John", false, "John", 0, "John", "Marry", "Marry", "John"], 3)).toStrictEqual(["Marry", "John", null, "John", false, "John", 0, "Marry", "Marry"])
    })
})