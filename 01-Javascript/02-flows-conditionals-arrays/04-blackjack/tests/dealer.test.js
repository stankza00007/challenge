
const { stateOfTheGame, deal, endGameMessage } = require('../lib/dealer')

describe('dealer.js # stateOfTheGame function', () => {

    test(`should return a string`, () => {
        expect(typeof stateOfTheGame(1,2)).toBe('string')
    }) 

    test(`should return an interpolated String with player and bank scores`, () => {
        expect(stateOfTheGame(1,2)).toBe('player score: 1\nbank score: 2')
    }) 
})

describe('dealer.js # endGameMessage function', () => {

    test(`should return a string`, () => {
        expect(typeof endGameMessage(2,5)).toBe('string')
    }) 

    test(`should return a message telling you that you lost if your score goes over 21`, () => {
        expect(endGameMessage(22,18)).toMatch(new RegExp(/los[et]/i))
    }) 

    test(`should return "Black Jack" when you score exactly 21`, () => {
        expect(endGameMessage(21,18)).toMatch(new RegExp(/black[ -]?jack/i))
    }) 

    test(`should return "draw" if it\'s a draw`, () => {
        expect(endGameMessage(18,18)).toMatch(new RegExp(/draw/i))
    }) 

    test(`should return a message telling you that you won if your score is higher than the bank\'s`, () => {
        expect(endGameMessage(20,18)).toMatch(new RegExp(/w[io]n/i))
    }) 

    test(`should return a message telling you that you lost if your score is lower than the bank\'s`, () => {
        expect(endGameMessage(17,20)).toMatch(new RegExp(/los[et]/i))
    }) 

})