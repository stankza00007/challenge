## Background and Objectives

This exercise is designed to validate the core concepts you have seen so far, common to most programming languages:

- Read user input / Print output to user
- Variables and methods
- Program flow and control structures
- Manipulation of strings and arrays

### Black Jack - Rules

We will implement a *simplified* version of Black Jack:

- The player starts with no cards (score of 0)
- The bank starts with a score between 16 and 21
- For each round, the player can:
  - Draw a card with a random value between 1 and 11. This number will be added to his score.
  - Draw another, or stick with the current score and finish the game.
- In the end, there are 5 possibilities:
  - If the player's score is > 21, they lose (bust).
  - If the player's score is 21, they pull a "Black Jack" and win.
  - If the player's score is > than the bank's, they win.
  - If the player's score is < than the bank's, they lose.
  - If the player's score is == to the bank's, it's a "Push". The player gets their money back.

## Specs

### `blackJack.js`

- Implement the `#pickBankScore` method which returns a random bank score between 16 and 21.
- Implement `#pickPlayerCard` which returns a random card value between 1 and 11.

### `dealer.js`

- Implement the `#stateOfTheGame` method which builds a message containing the bank and player's scores.
- Implement the `#endGameMessage` method to be called at the end of the game, containing the game outcome (win/lost/push)
- Implement the main `#deal` method which runs a Black Jack game from the terminal. It should work this way:

```bash
node lib/startGame.js

Card? 'y' or 'yes' to get a new card
> yes
Your score is 6, bank is 17

Card? 'y' or 'yes' to get a new card
> yes
Your score is 16, bank is 17

Card? 'y' or 'yes' to get a new card
> yes
Your score is 19, bank is 17

Card? 'y' or 'yes' to get a new card
> no
You beat the bank! You win.
```

⚠️ For this exercise you're not finished when `npm test` is 100% green! You need to make sure that you can actually play the game by running `node lib/startGame.js` 😉

## Key learning points

- What are the different ways of looping?
- What are the different conditional structures available?
- What is string interpolation?

## Further suggestions & resources

- You might want to use the [Random class] in the Math class
- When looping, you need a condition to make your game loop stop at some point.

## Notes 

- You will need to use a library called `readline-sync` which has already been included for you. 

Library documentation:
https://www.npmjs.com/package/readline-sync

prompt is a function that will accept `1` arguments, you will only need to use one of those.

Let's try and experiment!

Create a testing file called `test.js` under the `/lib` directory
and copy the following code into it:
```javascript
// lib/test.js
let prompt = require('readline-sync')
 
// Wait for user's response.
let userName = prompt.question('May I have your name?\n> ')
console.log('Hi ' + userName + '!');

```

Let's quickly go through each line.

`let prompt = require('readline-sync')`

With any external module/plugin we first need to require it and in some cases we will need to store it as a variable for later use. 

For this instance we are assigning the `realine-sync` module to `prompt` which is a more distinguishable name.

`let userName = prompt.question('May I have your name?\n> ')`

Here we are storing the value received back to the `userName` variable.

\n is used to make a new line.

To run your code make sure you're in `04-blackjack folder` 
`node /lib/test.js`