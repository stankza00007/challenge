## Specs

Write a program that prints the lyrics of the song [99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html).

It will take as an argument the starting number of bottles, given through the command line when executing the program. This program should work this way.

```bash
node lib/beerSong.rb 5

5 bottles of beer on the wall, 5 bottles of beer!
Take one down, pass it around, 4 bottles of beer on the wall!
4 bottles of beer on the wall, 4 bottles of beer!
Take one down, pass it around, 3 bottles of beer on the wall!
3 bottles of beer on the wall, 3 bottles of beer!
Take one down, pass it around, 2 bottles of beer on the wall!
2 bottles of beer on the wall, 2 bottles of beer!
Take one down, pass it around, 1 bottle of beer on the wall!
1 bottle of beer on the wall, 1 bottle of beer!
Take one down, pass it around, no more bottles of beer on the wall!
```

### Hint

* You can send arguments to your program from the command line using [ARGV](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* I hope you noticed the change from bottl<strong>es</strong> to bottl<strong>e</strong> when only 1 bottle remains!

### A bit of context on ARGV

Any NodeJS program you write runs inside another piece of software: the NodeJS interpreter. And that interpreter is itself running inside another piece of software: your operating system. These software layers are called the environment, and there are many ways you can exchange data between the environment & your program.

One way is via the ARGV constant which comes pre-defined in every NodeJS program. It is an Array of Strings representing the command line arguments. Consider this simple program

**testingArgvjs**

```javascript
console.log("*** Command line arguments ***")
let args = process.argv()
console.log(args)
```

Now run it in the terminal this ways

```bash
node lib/testingArgv.js one two three

*** Command line arguments ***
[
    "/Users/name/.nvm/versions/node/v8.12.0/bin/node", // Your node 
    "/Users/name/challenges/01-Javascript/02-flows-conditionals-arrays/Optional-03-Beer-song/lib/testingArgv.js", // the file you\'re running
    "one", 
    "two", 
    "three"
]
```

```bash
node lib/testingArgv.js "one two three" four

*** Command line arguments ***
[
    ...,
    "one two three",
    "four"
]
```
