const palindrome = require('../lib/palindrome')

describe('Your `Palindrome`function', function() {

    it('should return false for an empty string', () => {
        expect(palindrome("")).toBe(false)
    });

    it('should return false for a non-palindromic word', () => {
        expect(palindrome("whiteboard")).toBe(false)
    });

    it('should return true for a simple palindromic word', () => {
        expect(palindrome("madam")).toBe(true)
    });

    it('should return true for a simple palindromic word, ignoring case', () => {
        expect(palindrome("MaDam")).toBe(false)
    });
  
    it('should work for a complex sentence with punctuation', () => {
        expect(palindrome("Red rum, sir, is murder")).toBe(false)
    });

    it('should work for an even more complex sentence', () => {
        expect(palindrome("A man, a plan, a canal -- Panama")).toBe(false)
    });
});