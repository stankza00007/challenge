## Background & Objectives

An advanced exercise that makes you write a `shuffle` method that takes an array and returns a totally shuffled version. But how would you make sure you are getting an actual shuffle? What would you even say a good shuffle would be?

## Specs

### Core

- In `lib/shuffle.js`, write the `#shuffle` function.
- You should the use nodejs `Math.random()` and possibly `Math.floor()` method to create a random number
- To write your algorithm, you are not authorized to use any fancy Array methods like `sort`

**Hint**: You might need to `slice` the array into an array A to manipulate the copy. One algorithm could be to create a new empty array B, and until A is empty, randomly select an index in A, append the element in A at that index in B, then deleting that index in A. Proceed untly A is empty. B should contain the new shuffled array!
