function allowedToVote(age) {
    // TODO: return (not print!) a boolean stating whether `age` is old enough to vote
    // NOTE: Use an if/else statment
    if ( age >= 18 ) {
        return (true)
    } else {
        return (false)
    }
} 

module.exports = allowedToVote