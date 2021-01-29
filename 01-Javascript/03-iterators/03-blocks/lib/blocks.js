function myMap(array, mapFunction) {
  // TODO: Re-implement the same behavior as `map` without using it! You can use `#each` though.
  // map takes an array and function as argument
  let result = []
  array.forEach ( num => {
    result.push(mapFunction(num))
  })

  console.log(result)
  return result
}
//Create new array
//Access to Original
//

module.exports = {
  myMap
}
