
const ageInDays = require('../lib/ageInDays')


describe('The \'ageInDays\' method ', () => {
    test('should return the age in days', () => {
        expect(ageInDays(1994, 3,21)).toBeCloseTo(33908)
    })
})