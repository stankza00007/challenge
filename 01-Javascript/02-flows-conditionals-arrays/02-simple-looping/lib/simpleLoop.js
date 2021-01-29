function sumWithFor(min, max) {
  // CONSTRAINT: you should use a while..end structure
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum
}

function sumWithWhile(min, max) {
  // CONSTRAINT: you should use a while..end structure
  let sum = 0
  while (min <= max) {
    sum += min;
    min++;
  }
  return sum
}

module.exports = {
    sumWithFor,
    sumWithWhile
}