const teamCount = require('../lib/teamCount')

describe('The \'teamCount\' function', () => {
    test('Should return the number of elements in the array', () => {
        let teamMembers = ["Markey", "Lucas", "Chun Fat", "Jimmy", "Karen", "Essty", "Rachel", "Nathan"]
        expect(teamCount(teamMembers)).toBe(8)
    })
})