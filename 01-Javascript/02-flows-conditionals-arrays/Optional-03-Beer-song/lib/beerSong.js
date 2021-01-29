function beerSong(beerCount) {
    // TODO: beer song function
    if(beerCount==1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer!\nTake one down, pass it around, no more bottles of beer on the wall!")
    } else {
        console.log("2 bottles of beer on the wall, 2 bottles of beer!\nTake one down, pass it around, 1 bottle of beer on the wall\n1 bottle of beer on the wall, 1 bottle of beer!\nTake one down, pass it around, no more bottles of beer on the wall!")
    }
}

beerSong(process.argv[2]) // Call your function here

module.exports = beerSong // do not remove