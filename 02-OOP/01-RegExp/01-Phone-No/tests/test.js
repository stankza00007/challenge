
const PhoneNoValidator = require('../lib/PhoneNoValidator')

describe('Hong Kong phone number validation', () => {
    test('91234567 should return true', () => {
        expect(PhoneNoValidator.hongkong(91234567)).toBeTruthy()
    })
    test('1234567 should return false', () => {
        expect(PhoneNoValidator.hongkong(1234567)).toBeFalsy()
    })
    test('85261234567 should return true', () => {
        expect(PhoneNoValidator.hongkong("85261234567")).toBeTruthy()
    })
    test('+85261234567 should return true', () => {
        expect(PhoneNoValidator.hongkong("+85261234567")).toBeTruthy()
    })
    test('+852-61234567 should return true', () => {
        expect(PhoneNoValidator.hongkong("+852-61234567")).toBeTruthy()
    })
    test('+852-5234-4567 should return true', () => {
        expect(PhoneNoValidator.hongkong("+852-5234-4567")).toBeTruthy()
    })
    test('6784-4567 should return true', () => {
        expect(PhoneNoValidator.hongkong("6784-4567")).toBeTruthy()
    })
    test('852-63224567 should return true', () => {
        expect(PhoneNoValidator.hongkong("852-63224567")).toBeTruthy()
    })
    test('8529822-4567 should return true', () => {
        expect(PhoneNoValidator.hongkong("8529822-4567")).toBeTruthy()
    })
})

describe('China phone number validation', () => {
    
    test('+8619951343779 should return true', () => {
        expect(PhoneNoValidator.china("+8619951343779")).toBeTruthy()
    })

    test('+86-19951343779 should return true', () => {
        expect(PhoneNoValidator.china("+86-19951343779")).toBeTruthy()
    })

    test('+86-199-51343779 should return true', () => {
        expect(PhoneNoValidator.china("+86-199-51343779")).toBeTruthy()
    })

    test('+852-5234-4567 should return false', () => {
        expect(PhoneNoValidator.china("+852-5234-4567")).toBeFalsy()
    })

    test('91234567 should return true', () => {
        expect(PhoneNoValidator.china(91234567)).toBeTruthy()
    })
})

describe('UK phone number validation', () => {

    test('+441632960873 should return true', () => {
        expect(PhoneNoValidator.uk("+441632960873")).toBeTruthy()
    })

    test('+44-1632-960873 should return true', () => {
        expect(PhoneNoValidator.uk("+44-1632-960873")).toBeTruthy()
    })

    test('+44-1632960873 should return true', () => {
        expect(PhoneNoValidator.uk("+44-1632960873")).toBeTruthy()
    })

    test('+852-5234-4567 should return false', () => {
        expect(PhoneNoValidator.uk("+852-5234-4567")).toBeFalsy()
    })

    test('91234567 should return true', () => {
        expect(PhoneNoValidator.uk(91234567)).toBeTruthy()
    })
})

describe('US phone number validation', () => {

    test('+18175698900 should return true', () => {
        expect(PhoneNoValidator.usa("+18175698900")).toBeTruthy()
    })

    test('+1-817-5698900 should return true', () => {
        expect(PhoneNoValidator.usa("+1-817-5698900")).toBeTruthy()
    })

    test('+1-817-569-8900 should return true', () => {
        expect(PhoneNoValidator.usa("+1-817-569-8900")).toBeTruthy()
    })

    test('+1817-569-8900 should return true', () => {
        expect(PhoneNoValidator.usa("+1817-569-8900")).toBeTruthy()
    })

    test('+852-5234-4567 should return false', () => {
        expect(PhoneNoValidator.usa("+852-5234-4567")).toBeFalsy()
    })

    test('91234567 should return true', () => {
        expect(PhoneNoValidator.usa(91234567)).toBeTruthy()
    })
})