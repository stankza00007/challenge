
const {
    getRidOfSurroundingWhitespaces,
    belongs,
    replace,
    divisibleByTwo,
    isArray,
    reverse,
    ascendingOrder,
    join,
    addToAnArray
} = require('../lib/methods')


describe('The \'getRidOfSurroundingWhitespaces\' function ', () => {
    test('should return a string with no surrounding whitespaces', () => {
        expect(getRidOfSurroundingWhitespaces(' hey yo simon  ')).toBe('hey yo simon')
    })
})
describe('The \'belongs\' function ', () => {
    test('should return true if a word belongs in a sentence', () => {
        expect(belongs('Hey there jimmy', 'jimmy')).toBe(true)
    })
})
describe('The \'replace\' function ', () => {
    test('should replace the initialString oldLetter\'s with the newLetter', () => {
        expect(replace("casanova", "a", "o")).toBe('cosonovo')
    })
})
describe('The \'divisibleByTwo\' function ', () => {
    test('should return true if integer is divisible by 2', () => {
        expect(divisibleByTwo(28)).toBe(true)
    })
})
describe('The \'isArray\' function ', () => {
    test('should return true if data is an array', () => {
        expect(isArray(['a','b','c'])).toBe(true)
    })
})
describe('The \'reverse\' function ', () => {
    test('should return the reversed order of an array', () => {
        expect(reverse([1, 2, 3, 4])).toEqual([4,3,2,1])
    })
})
describe('The \'ascendingOrder\' function ', () => {
    test('should return a copy of an array in ascending order', () => {
        expect(ascendingOrder([7, 3, 1, 6, 9])).toEqual([1, 3, 6, 7, 9])
    })
})
describe('The \'join\' function ', () => {
    test('should return a copy of an array that has been joined together', () => {
        expect(join(["Hello", "how", "are", "you"])).toEqual("Hello how are you")
    })
})
describe('The \'addToAnArray\' function ', () => {
    test('should return a copy of an array in with the new element added', () => {
        expect(addToAnArray([1,2,3,4], 5)).toEqual([1, 2, 3, 4, 5])
    })
})