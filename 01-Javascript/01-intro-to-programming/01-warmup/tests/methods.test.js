
const fullName = require('../lib/warmup')


describe('The \'fullName\' method ', () => {
    test('should return the fullname using the first and last name', () => {
        expect(fullName('Jimmy', 'Chui')).toBe('Jimmy Chui')
    })
})
