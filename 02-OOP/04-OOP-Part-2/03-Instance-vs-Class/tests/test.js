const Member = require('../lib/Member')

let member = new Member('A', 'Member')

describe('Member', () => {
    test('should be an instance of Member', () => {
        expect(member instanceof Member).toBeTruthy()
    })
    test('should be a class method - generateId()', () => {
        expect(typeof member.generateId === 'function').toBeFalsy()
        expect(typeof Member.generateId === 'function').toBeTruthy()
    })
    test('should return Id 00000001', () => {
        expect(member.getId()).toBe("00000001")
    })
    test('should return Id 00000002', () => {
        expect(Member.generateId()).toBe("00000002")
    })
    test('should return first name A', () => {
        expect(member.getFirstName()).toBe('A')
    })
    test('should return last name Member', () => {
        expect(member.getLastName()).toBe('Member')
    })
})
