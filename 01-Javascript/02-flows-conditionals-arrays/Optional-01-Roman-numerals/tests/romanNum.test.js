const {
    oldRomanNumeral,
    newRomanNumeral
} = require('../lib/romanNum')

describe('The \'oldRomanNumeral\' function', () => {
    test("should work for numbers between 1 and 4", () => {
        expect(oldRomanNumeral(1)).toBe("I")
        expect(oldRomanNumeral(2)).toBe("II")
        expect(oldRomanNumeral(3)).toBe("III")
        expect(oldRomanNumeral(4)).toBe("IIII")
    })

    test("should work for numbers between 5 and 9", () => {
        expect(oldRomanNumeral(5)).toBe("V")
        expect(oldRomanNumeral(6)).toBe("VI")
        expect(oldRomanNumeral(7)).toBe("VII")
        expect(oldRomanNumeral(8)).toBe("VIII")
        expect(oldRomanNumeral(9)).toBe("VIIII")
    })

    test("should work for numbers between 10 and 49", () => {
        expect(oldRomanNumeral(10)).toBe("X")
        expect(oldRomanNumeral(11)).toBe("XI")
        expect(oldRomanNumeral(12)).toBe("XII")
        expect(oldRomanNumeral(13)).toBe("XIII")
        expect(oldRomanNumeral(14)).toBe("XIIII")
        expect(oldRomanNumeral(15)).toBe("XV")
        expect(oldRomanNumeral(19)).toBe("XVIIII")
        expect(oldRomanNumeral(20)).toBe("XX")
        expect(oldRomanNumeral(21)).toBe("XXI")
        expect(oldRomanNumeral(25)).toBe("XXV")
        expect(oldRomanNumeral(29)).toBe("XXVIIII")
        expect(oldRomanNumeral(49)).toBe("XXXXVIIII")
    })

    test("should work for numbers between 50 and 99", () => {
        expect(oldRomanNumeral(50)).toBe("L")
        expect(oldRomanNumeral(51)).toBe("LI")
        expect(oldRomanNumeral(99)).toBe("LXXXXVIIII")
    })

    test("should work for numbers between 100 and 499", () => {
        expect(oldRomanNumeral(100)).toBe("C")
        expect(oldRomanNumeral(101)).toBe("CI")
        expect(oldRomanNumeral(149)).toBe("CXXXXVIIII")
        expect(oldRomanNumeral(199)).toBe("CLXXXXVIIII")
        expect(oldRomanNumeral(200)).toBe("CC")
        expect(oldRomanNumeral(499)).toBe("CCCCLXXXXVIIII")
    })

    test("should work for numbers between 500 and 999", () => {
        expect(oldRomanNumeral(500)).toBe("D")
        expect(oldRomanNumeral(501)).toBe("DI")
        expect(oldRomanNumeral(600)).toBe("DC")
        expect(oldRomanNumeral(700)).toBe("DCC")
        expect(oldRomanNumeral(999)).toBe("DCCCCLXXXXVIIII")
    })

    test("should work for numbers above 1000", () => {
        expect(oldRomanNumeral(1000)).toBe("M")
        expect(oldRomanNumeral(1001)).toBe("MI")
        expect(oldRomanNumeral(1100)).toBe("MC")
        expect(oldRomanNumeral(1500)).toBe("MD")
        expect(oldRomanNumeral(2000)).toBe("MM")
        expect(oldRomanNumeral(3000)).toBe("MMM")
    })
})

describe('The \'newRomanNumeral\' function', () => {
    test("should work for numbers between 1 and 4", () => {
        expect(newRomanNumeral(1)).toBe("I")
        expect(newRomanNumeral(2)).toBe("II")
        expect(newRomanNumeral(3)).toBe("III")
        expect(newRomanNumeral(4)).toBe("IV")
    })

    test("should work for numbers between 5 and 9", () => {
        expect(newRomanNumeral(5)).toBe("V")
        expect(newRomanNumeral(6)).toBe("VI")
        expect(newRomanNumeral(7)).toBe("VII")
        expect(newRomanNumeral(8)).toBe("VIII")
        expect(newRomanNumeral(9)).toBe("IX")
    })

    test("should work for numbers between 10 and 49", () => {
        expect(newRomanNumeral(10)).toBe("X")
        expect(newRomanNumeral(11)).toBe("XI")
        expect(newRomanNumeral(12)).toBe("XII")
        expect(newRomanNumeral(13)).toBe("XIII")
        expect(newRomanNumeral(14)).toBe("XIV")
        expect(newRomanNumeral(15)).toBe("XV")
        expect(newRomanNumeral(19)).toBe("XIX")
        expect(newRomanNumeral(20)).toBe("XX")
        expect(newRomanNumeral(21)).toBe("XXI")
        expect(newRomanNumeral(25)).toBe("XXV")
        expect(newRomanNumeral(29)).toBe("XXIX")
        expect(newRomanNumeral(49)).toBe("XLIX")
    })

    test("should work for numbers between 50 and 99", () => {
        expect(newRomanNumeral(50)).toBe("L")
        expect(newRomanNumeral(51)).toBe("LI")
        expect(newRomanNumeral(99)).toBe("XCIX")
    })

    test("should work for numbers between 100 and 499", () => {
        expect(newRomanNumeral(100)).toBe("C")
        expect(newRomanNumeral(101)).toBe("CI")
        expect(newRomanNumeral(149)).toBe("CXLIX")
        expect(newRomanNumeral(199)).toBe("CXCIX")
        expect(newRomanNumeral(200)).toBe("CC")
        expect(newRomanNumeral(499)).toBe("CDXCIX")
    })

    test("should work for numbers between 500 and 999", () => {
        expect(newRomanNumeral(500)).toBe("D")
        expect(newRomanNumeral(501)).toBe("DI")
        expect(newRomanNumeral(600)).toBe("DC")
        expect(newRomanNumeral(700)).toBe("DCC")
        expect(newRomanNumeral(999)).toBe("CMXCIX")
    })

    test("should work for numbers above 1000", () => {
        expect(newRomanNumeral(1000)).toBe("M")
        expect(newRomanNumeral(1001)).toBe("MI")
        expect(newRomanNumeral(1100)).toBe("MC")
        expect(newRomanNumeral(1500)).toBe("MD")
        expect(newRomanNumeral(2000)).toBe("MM")
        expect(newRomanNumeral(3000)).toBe("MMM")
    })
})