const buildBookTitle = require('../lib/debugMe')

describe('I, the student,', () => {
    test('should have fixed the buggy method call after reading the error and stack trace', () => {
        expect(buildBookTitle()).toBe("1984 GEORGE ORWELL")
    })
})