function jackpot(array) {
  // TODO: elements must be exactly identical for there to be a jackpot.
  // Return true if all items are identical
  // Return false if they are no
  let result = array.every((checker,index,num) => checker === num[0])
  return result
}


module.exports = jackpot