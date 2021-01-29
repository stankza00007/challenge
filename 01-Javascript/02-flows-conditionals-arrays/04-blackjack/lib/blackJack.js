function pickBankScore() {
    // TODO: Use Random to get a new random score
    const mins = 16
    const maxs = 21
    pickBankScore = Math.floor(Math.random()*(maxs-mins)+mins)
    return pickBankScore
}

function pickPlayerCard() {
    // TODO: Use Random to get a new random card
    const minc = 1
    const maxc = 11
    pickPlayerCard = Math.floor(Math.random()*(maxc-minc)+minc)
    return pickPlayerCard
}

module.exports = {
    pickBankScore,
    pickPlayerCard
}