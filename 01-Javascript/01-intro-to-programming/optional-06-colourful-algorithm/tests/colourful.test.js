
const colourful = require('../lib/colourful')

let colorful_numbers = [ 0, 1, 23, 263, 987 ]
let not_colorful_numbers = [ 10, 236, 999 ]

describe('The \'colourFul\' method ', () => {
    test('returns false if provided with something other than a number', () => {
        expect(colourful("not_a_number_but_a_string")).toBe(false)
    })


    colorful_numbers.forEach(num => {
        test(`returns true for ${num} which is colorful`, () => {
            expect(colourful(num)).toBe(true)
        })
    })

    not_colorful_numbers.forEach(num => {
        test(`returns false for ${num} which is not colorful`, () => {
            expect(colourful(num)).toBe(false)
        })
    })

})
