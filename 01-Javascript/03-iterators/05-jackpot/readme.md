## Specs
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

The elements must be exactly identical for there to be a jackpot.

```javascript
jackpot(["@", "@", "@", "@"]) ➞ true

jackpot(["abc", "abc", "abc", "abc"]) ➞ true

jackpot(["SS", "SS", "SS", "SS"]) ➞ true

jackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

jackpot(["SS", "SS", "SS", "Ss"]) ➞ false
```

## Resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every