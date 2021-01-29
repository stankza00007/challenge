const {
    sumOddIndexed,
    evenNumbers,
    shortWords,
    firstUnder,
    addBang,
    concatenate,
    sortedPairs
  } = require('../lib/enumerables')

describe('The \'sumOddIndexed\' function', () => {
    test('should compute the sum of odd-numbered elements', () => {
        expect(sumOddIndexed([4,7,8,10,5])).toBe(17)
    })
})

describe('The \'evenNumbers\' function', () => {
    test('should return an array of even numbers only', () => {
        expect(evenNumbers([3, 4, 7, 9, 10, 16])).toStrictEqual([4,10, 16])
    })
})

describe('The \'shortWords\' function', () => {
    test('should get rid of words that size exceed the max size', () => {
        expect(shortWords(["you", "are", "my", "playground", "love"], 4)).toStrictEqual(["you", "are", "my", "love"])
    })
})

describe('The \'firstUnder\' function', () => {
    test('should return the first number below the limit', () => {
        expect(firstUnder([13, 21, 7, 0, 11, 106], 10)).toBe(7)
    })
})

describe('The \'addBang\' function', () => {
    test('should append an exclamation mark to all elements and return the modified array', () => {
        expect(addBang(["yi", "ha"])).toStrictEqual(["yi!", "ha!"])
    })
})

describe('The \'concatenate\' function', () => {
    test('sshould concatenate all the given strings', () => {
        expect(concatenate(["hello", " ", "guys", ",", " ", "how", " ", "are", " ", "you", "?"])).toBe("hello guys, how are you?")
    })
})

describe('The \'sortedPairs\' function', () => {
    test('should group elements into twos and sort each slice alphabetically', () => {
        expect(sortedPairs(["say", "my", "name", "say", "my", "name"])).toStrictEqual([
            ["say", "my"],
            ["name", "say"], 
            ["my", "name"]
        ])
    })
})