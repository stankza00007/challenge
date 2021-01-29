const {
    myMap,
    tag
  } = require('../lib/blocks')

describe('The \'myMap\' function', () => {
    test('should upcase all elements of an array when passed `element.upcase` in the block', () => {
        expect(myMap(["alex", "John", "bOB"], item => item.toUpperCase())).toStrictEqual(expect.arrayContaining(["ALEX", "JOHN", "BOB"]))
    })

    test('should multiply all integers with themselves when passed `element * element` in the block', () => {
        expect(myMap([2,4,6,8], num=>num*num)).toStrictEqual(expect.arrayContaining([4,16,36,64]))
    })
})

// describe('The \'tag\' function', () => {
//     test('should return the correct html for any example without an attribute', () => {
//         expect(myMap([4,7,8,10,5])).toBe(17)
//     })

//     test('should return the correct html for an example with one attribute', () => {
//         expect(tag([4,7,8,10,5])).toBe(17)
//     })

//     test('should return the correct html string for a nested configuration', () => {
//         expect(tag([4,7,8,10,5])).toBe(17)
//     })
// })