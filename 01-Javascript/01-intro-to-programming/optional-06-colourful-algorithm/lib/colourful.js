function colourful(number) {
    let digits = (""+number).split("")
    for (let i = 0; i < 2; i++) {
        if (((digits[i+1]*digits[i]) ==
        digits[digits.length-1]) || 
        (digits[i+1] === digits[i])) {
            return false
        } else {
            return true
        }
    }
}

module.exports = colourful