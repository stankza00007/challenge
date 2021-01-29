const {
    pickBankScore,
    pickPlayerCard
} = require('../lib/blackJack')

describe('blackJack.js # pickBankScore function', () => {

    test(`should return a number`, () => {
        expect(typeof pickBankScore()).toBe('number')
    }) 

    test(`should give a number between 16 and 21`, () => {
        let scores = []
        for(let i = 0; i<100; i++) {
            score = pickBankScore()
            if(score>=16&&score<=21) {
                scores.push(score)
            }
        }
        expect(scores.length).toBe(100)
    }) 
})

describe('dealer.js # pickPlayerCard function', () => {

    test(`should return a number`, () => {
        expect(typeof pickPlayerCard()).toBe('number')
    }) 

    test(`should draw a number between 1 and 11`, () => {
        let scores = []
        for(let i = 0; i<100; i++) {
            score = pickPlayerCard()
            if(score>=1&&score<=11) {
                scores.push(score)
            }
        }
        expect(scores.length).toBe(100)    }) 
})