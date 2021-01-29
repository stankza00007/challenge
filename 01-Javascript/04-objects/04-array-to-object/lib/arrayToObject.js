function arrayToObject(array) {
    // TODO: implement a function to convert an array to an object
    console.log(array)
    console.log(Object.assign({},array))
    return Object.assign({},array)
}

function arrayToObjectTwo(array) {
    // TODO: implement a function that builds an object with the first element of each pair as the key
    let res = {}
    for (let i = 0; i < array.length; i += 2) {
        res[array[i]] = array[i+1]
    }
    console.log(array)
    console.log(res)
    return res
}

function twoDArrayToObject(array) {
    // TODO: implement a function to convert an array of arrays to an object
    let bestar = []
    let fakob = {}
    array.forEach (item => {
        item.forEach (inc => {
            bestar.push(inc)
            })
    })
    for (let i = 0; i < bestar.length; i += 2) {
        fakob[bestar[i]] = bestar[i+1]
    }
    console.log(fakob)
    console.log(bestar)
    return fakob
}

module.exports = { 
    arrayToObject,
    arrayToObjectTwo,
    twoDArrayToObject
}
