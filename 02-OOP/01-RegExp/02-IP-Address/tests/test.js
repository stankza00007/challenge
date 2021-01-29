const IPValidator = require('../lib/IPValidator')

describe('IPv4 address validation', () => {
    test('192.168.0.1 should return true', () => {
        expect(IPValidator.ipv4("192.168.0.1")).toBeTruthy()
    })
    test('127.0.0.1 should return true', () => {
        expect(IPValidator.ipv4("127.0.0.1")).toBeTruthy()
    })
    test('1.2.3.4 should return true', () => {
        expect(IPValidator.ipv4("1.2.3.4")).toBeTruthy()
    })
    test('221.1.0.256 should return false', () => {
        expect(IPValidator.ipv4("221.1.0.256")).toBeFalsy()
    })
    test('257.0.0.1 should return false', () => {
        expect(IPValidator.ipv4("257.0.0.1")).toBeFalsy()
    })
    test('128.0.0.356 should return false', () => {
        expect(IPValidator.ipv4("128.0.0.356")).toBeFalsy()
    })
})

describe('IPv6 address validation', () => {
    test('0:0:0:0:0:ffff:c0a8:1 should return true', () => {
        expect(IPValidator.ipv6("0:0:0:0:0:ffff:c0a8:1")).toBeTruthy()
    })
    test('0:0:0:0:0:ffff:7f00:1 should return true', () => {
        expect(IPValidator.ipv6("0:0:0:0:0:ffff:7f00:1")).toBeTruthy()
    })
    test('0:0:0:0:0:ffff:102:304 should return true', () => {
        expect(IPValidator.ipv6("0:0:0:0:0:ffff:102:304")).toBeTruthy()
    })
    test('0:0:0:0:0:ffff:dd01:fg should return false', () => {
        expect(IPValidator.ipv6("0:0:0:0:0:ffff:dd01:fg")).toBeFalsy()
    })
    test('hhhh:0:0:0:0:ffff:ff00:1 should return false', () => {
        expect(IPValidator.ipv6("hhhh:0:0:0:0:ffff:ff00:1")).toBeFalsy()
    })
    test('128.0.0.356 should return false', () => {
        expect(IPValidator.ipv6("128.0.0.356")).toBeFalsy()
    })
})