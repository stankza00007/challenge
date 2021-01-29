function sumOddIndexed(array) {
  // TODO: computes the sum of elements at odd indexes (1, 3, 5, 7, etc.)
  //       You should use forEach
  let sum = 0
  array.forEach((odd,index)=> {
    if (!(index%2)) {
      sum += odd;
    }
  })
  console.log("Sum of odd indexes:",sum)
  return sum
}

function evenNumbers(array) {
  // TODO: Return the even numbers from a list of integers.
  let even = []
  for (let counter = 0; counter <= array.length; counter++ ) {
    if (array[counter] % 2 === 0) {
      even.push(array[counter])
    }
  } console.log("Here's your even numbers:",even)
  return even
}

function shortWords(array, max_length) {
  // TODO: Take an array of words, return the array of words not exceeding max_length characters
  //       You should use filter
  let result = array.filter(word => {
    if (word.length <= max_length) {
      return true
    }
  })
  console.log("Here we go:",result)
  return result
}

function firstUnder(array, limit) {
  // TODO: Return the first number from an array that is less than limit.
  //       You should use find or filteer
  let thisone = array.find(chosen => {
    if (chosen < limit) {
      return true
    }
  })
  console.log("Picked:",thisone)
  return thisone
}

function addBang(array) {
  // TODO: Take an array of strings and return a new array with "!" app}ed to each string.
  //       You should use map
  let bang = array.map(ping => {
    return ping+"!"
  })
  console.log("BANG!!",bang)
  return bang
}

function concatenate(array) {
  // TODO: Concatenate all strings given in the array.
  //       You should use of reduce
  let aoe = (a,b) => a + b;
  let ans = array.reduce(aoe)
  console.log("Got it:",ans)
  return ans
  }

function sortedPairs(array) {
  // TODO: Reorganize an array into slices of 2 elements, and sort each slice alphabetically.
  //       You should use of slice
  let pieces1 = array.slice(0,2)
  let pieces2 = array.slice(2,4)
  let pieces3 = array.slice(4,6)

  console.log("Pieces of:",pieces1,pieces2,pieces3)
  return [pieces1,pieces2,pieces3]
}

module.exports = {
  sumOddIndexed,
  evenNumbers,
  shortWords,
  firstUnder,
  addBang,
  concatenate,
  sortedPairs
}
