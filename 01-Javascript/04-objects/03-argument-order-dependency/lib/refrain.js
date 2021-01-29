function refrain(lyrics, numberOfTimes=1, vibrato=0, strong=false) {
    let songRefrain=[]
    
    if(strong) {
        lyrics.toUpperCase()
    }

    for(let i = 0; i < numberOfTimes; i++) {
        songRefrain.push(lyrics)
    }

    songRefrain.join(" ")

    return songRefrain
}

refrain('hey ya', 3)

function betterRefrain(lyrics, options = { vibrato: 0, numberOfTimes: 1, strong: false }) {
    // TODO: implement this better version which breaks argument order dependency
}

module.exports = { 
    refrain, 
    betterRefrain 
}