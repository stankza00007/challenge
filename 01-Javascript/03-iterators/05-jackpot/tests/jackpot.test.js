const jackpot = require('../lib/jackpot')

let oneSlots = ['@', '@', '@', '@']
let twoSlots = ['!', '!', '!', '!']
let threeSlots = ['abc', 'abc', 'abc', 'abc']
let fourSlots = ['karaoke', 'karaoke', 'karaoke', 'karaoke']
let fiveSlots = ['SS', 'SS', 'SS', 'SS']
let sixSlots = [':(', ':)', ':|', ':|']
let sevenSlots = ['&&', '&', '&&&', '&&&&']
let eightSlots = ['hee', 'heh', 'heh', 'heh']
let nineSlots = ['SS', 'SS', 'SS', 'Ss']
let tenSlots = ['SS', 'SS', 'Ss', 'Ss']

describe("The \'jackpot\' function", () => {
    it(`should return true for [ ${oneSlots} ]`, () => {
        expect(jackpot(oneSlots)).toBe(true)
    })

    it(`should return true for [ ${twoSlots} ]`, () => {
        expect(jackpot(twoSlots)).toBe(true)
    })    
    
    it(`should return true for [ ${threeSlots} ]`, () => {
        expect(jackpot(threeSlots)).toBe(true)
    })

    it(`should return true for [ ${fourSlots} ]`, () => {
        expect(jackpot(fourSlots)).toBe(true)
    })

    it(`should return true for [ ${fiveSlots} ]`, () => {
        expect(jackpot(fiveSlots)).toBe(true)
    })

    it(`should return false for [ ${sixSlots} ]`, () => {
        expect(jackpot(sixSlots)).toBe(false)
    })

    it(`should return false for [ ${sevenSlots} ]`, () => {
        expect(jackpot(sevenSlots)).toBe(false)
    })

    it(`should return false for [ ${eightSlots} ]`, () => {
        expect(jackpot(eightSlots)).toBe(false)
    })

    it(`should return false for [ ${nineSlots} ]`, () => {
        expect(jackpot(nineSlots)).toBe(false)
    })

    it(`should return false for [ ${tenSlots} ]`, () => {
        expect(jackpot(tenSlots)).toBe(false)
    })
})