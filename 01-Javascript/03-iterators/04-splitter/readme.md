## Background & Objectives

Let's combine the power of enumerables (`#each`, `#map`, etc.). We'll want to create a **splitter** method which will take an array and divide it into two groups according to an arbitrary rule. You might want to split by age if we're talking about a group of people.

## Specs

### Size Splitter

Implement a first method `sizeSplitter` which takes two parameters: an array, and a integer (the `size`). We will assume that the array only contains words, e.g. `Strings`, and that the arbitrary rule is to form two groups: the first one with words of the given size (second parameter of the method), and the other group with all the other words.

The `sizeSplitter` method should return an array of two arrays - the two groups defined above - with the contents sorted **alphabetically**.

```javascript
let words = ["dog", "data", "ask", "my", "win", "two", "beer", "as"])
let result = sizeSplitter(words, 3)

// result => [["ask", "dog", "two", "win"], ["as", "beer", "data", "my"]]
```