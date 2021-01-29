const {
    coachAnswer,
    coachAnswerEnhanced
} = require('../lib/coachAnswer')

describe('The \'coachAnswer\' function', () => {
    test('should return a string', () => {
        expect(typeof coachAnswer("Hello Coach")).toBe("string")
    })

    test('replies saying he does not care when you enter a statement', () => {
        expect(coachAnswer("I want some pizza!")).toBe("I don't care, get dressed and go to work!")
    })

    test('replies saying "it\'s a silly question" when you enter a question', () => {
        expect(coachAnswer("Can I have some pizza?")).toBe("Silly question, get dressed and go to work!")
    })

    test('does not answer back (i.e. answers with an empty string) when you tell him you are going to work', () => {
        expect(coachAnswer("I am going to work right now!")).toBe("")
    })
})

describe('The \'coachAnswerEnhanced\' function', () => {

    test('should return a string', () => {
        expect(typeof coachAnswerEnhanced("Hello Coach")).toBe("string")
    })

    test('replies saying he does not care when you enter a statement (and does not shout)', () => {
        expect(coachAnswerEnhanced("I would love to eat some pizza!")).toBe("I don't care, get dressed and go to work!")
    })

    test('replies saying it\'s a silly question when you enter a question (and does not shout)', () => {
        expect(coachAnswerEnhanced("Can I eat some pizza?")).toBe("Silly question, get dressed and go to work!")
    })

    test('does not answer back (i.e. answers with an empty string) when you tell him you are going to work (and does not shout)', () => {
        expect(coachAnswerEnhanced("I am going to work right now!")).toBe("")
    })

    test('prepends a motivation statement before saying he does not care when you shout a statement at him', () => {
        expect(coachAnswerEnhanced("I WOULD LOVE SOME PIZZA!")).toBe("I can feel your motivation! I don't care, get dressed and go to work!")
    })    
    
    test("prepends a motivation statement before saying that it\'s a silly question when you shout a question at him", () => {
        expect(coachAnswerEnhanced("CAN I EAT SOME PIZZA?")).toBe("I can feel your motivation! Silly question, get dressed and go to work!")
    })    
    
    test("does not answer back (i.e. answers with an empty string) when you shout at him saying you are going to work", () => {
        expect(coachAnswerEnhanced("I AM GOING TO WORK RIGHT NOW!")).toBe("")
    })
})