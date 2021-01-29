function oldRomanNumeral(anInteger) {
    // TODO: translate integer in roman number - old-style way
    let roman = {
        1:"I",
        5:"V",
        10:"X",
        50:"L",
        100:"C",
        500:"D",
        1000:"M"
    }
    roman[anInteger]
    
}


function newRomanNumeral(anInteger) {
    // TODO: translate integer in roman number - modern-style way
}

module.exports = {
    oldRomanNumeral,
    newRomanNumeral
}