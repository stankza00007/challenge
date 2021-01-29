
const {
    calculator,
    enhancedCalculator
} = require('../lib/calculator')

let expressions = {
    '2 plus 10': 12,
    '100 minus 24': 76,
    '56 divide 7': 8,
    '13 times 16': 208
}

describe('The \'calculator\' method ', () => {

    test(`should add two numbers 4 + 6`, () => {
        expect(calculator(4, '+', 6)).toBe(10)
    }) 

    test(`should add two numbers 14 + 36`, () => {
        expect(calculator(14, '+', 36)).toBe(50)
    }) 

    test(`should subtract two numbers 3 - 1`, () => {
        expect(calculator(3, '-', 1)).toBe(2)
    }) 

    test(`should subtract two numbers 10 - 3`, () => {
        expect(calculator(10, '-', 3)).toBe(7)
    }) 
    

    test(`should divide two numbers 9 / 1`, () => {
        expect(calculator(9, '/', 1)).toBe(9)
    }) 

    test(`should divide two numbers 105 / 5`, () => {
        expect(calculator(105, '/', 5)).toBe(21)
    }) 

    test(`should times two numbers 10 * 2`, () => {
        expect(calculator(10, '*', 2)).toBe(20)
    }) 

    test(`should times two numbers 9 * 3`, () => {
        expect(calculator(9, '*', 3)).toBe(27)
    }) 
})


describe('The \'enhancedCalculator\' method ', () => {
    for(key in expressions) {
        test(`should return ${expressions[key]} for the expression ${key}`, () => {
            expect(enhancedCalculator(key)).toBe(expressions[key])
        })
    }
})