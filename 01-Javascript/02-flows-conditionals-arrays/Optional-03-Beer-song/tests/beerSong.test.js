const beerSong = require('../lib/beerSong')
const shell = require('shelljs')
let path = require('path')

describe('The \'beerSong\' function', () => {
    test('should sing the beer song for one beer!', () => {
        let reqPath = path.join(__dirname, '../')
        let result = shell.exec(`node ${reqPath}/lib/beerSong.js 1` )

        expect(result.stdout).toContain("1 bottle of beer on the wall, 1 bottle of beer!\nTake one down, pass it around, no more bottles of beer on the wall!")
    })

    test('should sing the beer song for two beer!', () => {
        let reqPath = path.join(__dirname, '../')
        let result = shell.exec(`node ${reqPath}/lib/beerSong.js 2` )

        expect(result.stdout).toContain("2 bottles of beer on the wall, 2 bottles of beer!\nTake one down, pass it around, 1 bottle of beer on the wall\n1 bottle of beer on the wall, 1 bottle of beer!\nTake one down, pass it around, no more bottles of beer on the wall!")
    })
})