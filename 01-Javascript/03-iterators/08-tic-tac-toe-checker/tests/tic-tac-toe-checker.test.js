const ticTacToeChecker = require('../lib/tic-tac-toe-checker')

describe("The \'ticTacToeChecker\' function", () => {
    describe(`O is the winner for the board [["-XO"],["XOX"],["O-O"]]` , () => {
        it('should return \'O\' is the winner', () => {
            // expect(ticTacToeChecker([["OXO"],["XOO"],["OXX"]])).toBe('O')
            expect(ticTacToeChecker(["-XO","XOX","O-O"])).toBe('O')
        })
    })

    describe("X is the winner" , () => {
        it(`should return \'X\' is the winner for the board [["XO-"],["OX-"],["--X"]]`, () => {
            // expect(ticTacToeChecker([["XXO"],["XXO"],["OXO"]])).toBe('X')
            expect(ticTacToeChecker(["XO-","OX-","--X"])).toBe('X')
        })
    })

    describe("No winners" , () => {
        it('should return \'No Winners\' if no winners were found [["OOX"], ["XXO"], ["OXX"]]', () => {
            // expect(ticTacToeChecker([["OXX"],["XOO"],["OXX"]])).toBe('No Winners')
            expect(ticTacToeChecker(["OOX", "XXO", "OXX"])).toBe('No Winners')
        })
    })

    describe("Incomplete game" , () => {
        it('should return \'Incomplete Game\' if a board is empty [[],[],[]]', () => {
            expect(ticTacToeChecker(["","",""])).toBe('Incomplete Game')
        })
    })

    describe("Corrupted game" , () => {
        it('should return \'Corrupted Game\' if a board includes values that are not \'-\' or \'O\' or \'X\' ', () => {
            expect(ticTacToeChecker(["XXX","XOX","123"])).toBe('Corrupted Game')
        }) 
    })
})