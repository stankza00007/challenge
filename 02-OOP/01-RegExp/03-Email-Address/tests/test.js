const EmailValidator = require('../lib/EmailValidator')

describe('Email address validator', () => {
    test('nathanlee@whiteboard.academy should return true', () => {
        expect(EmailValidator.validate('nathanlee@whiteboard.academy')).toBeTruthy()
    })
    test('simon@whiteboard should return false', () => {
        expect(EmailValidator.validate('simon@whiteboard')).toBeFalsy()
    })
    test('nathanlee@whiteboard.academy should return nathanlee', () => {
        expect(EmailValidator.getUsername('nathanlee@whiteboard.academy')).toEqual("nathanlee")
    })
    test('nathanlee@whiteboard.academy should return whiteboard.academy', () => {
        expect(EmailValidator.getDomain('nathanlee@whiteboard.academy')).toEqual("whiteboard.academy")
    })
})
