function sizeSplitter(array, size) {
  // TODO: Return an array of two arrays, the first containing
  //       words of length `size`, the second containing all the other words
  //       In addition to this split, each array should be *sorted*.
  let result = []
  let bresult = []
  array.forEach (word => {
    if (word.length == size) {
      result.push(word)
    } else {
      bresult.push(word)
    }
  })

  console.log(result,bresult)
  return [result.sort(),bresult.sort()]
}

module.exports = {
  sizeSplitter
}
