const horseRacingFormat = require('../lib/horseRace')

describe('The \'horseRacingFormat\' function', () => {
    test('should follow the horse racing formatting style', () => {
        let horseRace = ["Abricot du Laudot", "Black Caviar", "Brigadier Gerard", "Coup de Folie"]
        expect(horseRacingFormat(horseRace)).toBe(["4-Brigadier Gerard!", "3-Coup de Folie!", "2-Black Caviar!", "1-Abricot du Laudot!"])
    })
})