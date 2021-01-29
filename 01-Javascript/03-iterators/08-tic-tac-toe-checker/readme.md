## Specs
Mike and his friend love playing tic tac toe. In fact, they love it so much they created a multiplayer web version to play remotly against each other. At the last minute Mike realized he forgot to call an animation when a player won the game. Now he needs to create a function that will check it but can't do it himself because he's short on time. Mike needs your help!

Create a function ticTacToeCheck that takes a two dimensional array representing a finished game of tic tac toe (e.g. [["XO-"], ["XXX"], ["XO-"]]).

X represents player 1 move(s).
O represents player 2 move(s).
Dash (-) represents no move(s).

## Rules
1) Return 'O' if 'O' winst the game.

```javascript
ticTacToeCheck(["OX-", "OXO", "O-X"]) ➞ 'O'
```

2) Return 'X' if 'X' wins the game.

```javascript
ticTacToeCheck(["XXO","XXO","OXO"]) ➞ 'X'
```

3) Return "No Winners" if nobody won the game.

```javascript
ticTacToeCheck(["XXO", "OOX", "XOO"]) ➞ "No Winners"
```

4) Return "Incomplete Game" if no value was received / all received arrays are void / type of any given value is not "array".

```javascript
ticTacToeCheck(["", "", ""]) ➞ "Incomplete Game"
```

5) Return "Corrupted Game" if any values differ from the expected "X", "O", "-".

```javascript
ticTacToeCheck(["X", "XX", "X-"]) ➞ "Corrupted Game"
```

```javascript
ticTacToeCheck(["XOX", "XOO", undefined]) ➞ "Corrupted Game"
```

```javascript
ticTacToeCheck(["XXX", "XOX", "123"]) ➞ "Corrupted Game"
```

## Notes
Each array in the main array represent a line in the game.