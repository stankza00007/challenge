// One line of code for each method
// Just look in the doc for the right method of the String, Integer, and Array classes!

function getRidOfSurroundingWhitespaces(aString) {
    // TODO: return a copy of the string with leading and trailing whitespaces removed
    // example: getRidOfSurroundingWhitespaces("  hey yo  ") => "hey yo"
    return aString.trim()
}

function belongs(sentence, word) {
    // TODO: Return true if a `sentence` contains a `word`
    // example: belongs("hey jude", "jude") => true
    return sentence,word.includes(word)
}

function replace(initialString, oldLetter, newLetter) {
    // TODO: return a copy of the string with the new letter replacing the old one
    // example: replace("casanova", "a", "o") => "cosonovo"
    var oldLetter = /a/gi
    return initialString.replace(oldLetter,newLetter)
}

function divisibleByTwo(anInteger) {
    // TODO: return true if anInteger is divisible by 2
    // example: divisibleByTwo?(6) => true
    return anInteger % 2 === 0
}

function isArray(someData) {
    // TODO: return whether someData is an array
    // example: isArray(['a','b','c','d','e','f','g','h']) => true
    // example: isArray('hello') => false
    return Array.isArray(someData)
}

function reverse(anArray) {
  // TODO: Return the reverse order of anArray
  // example: randomize([1, 2, 3, 4]) => [4,3,2,1]
  return anArray.reverse()
}

function ascendingOrder(anArray) {
  // TODO: return a copy of anArray with elements in ascending order
  // example: ascendingOrder([7, 3, 1, 6, 9]) => [1, 3, 6, 7, 9]
  return anArray.sort()
}

function join(anArray) {
    // TODO: return an array that joins all words by a space
    // example: join(["Hello", "how", "are", "you"]) => "Hello how are you"
    return anArray.join(' ')

}

function addToAnArray(anArray, newItem) {
    // TODO: return a copy of anArray with a new element added
    // example: addToAnArray([1,2,3,4], 5) => [1,2,3,4,5]
    return [...anArray, newItem]
}

module.exports = {
    getRidOfSurroundingWhitespaces,
    belongs,
    replace,
    divisibleByTwo,
    isArray,
    reverse,
    ascendingOrder,
    join,
    addToAnArray
}