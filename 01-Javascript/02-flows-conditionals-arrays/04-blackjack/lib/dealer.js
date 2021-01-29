const blackJack = require('./blackJack')

// Prompt
let prompt = require('readline-sync');

function stateOfTheGame(playerScore, bankScore) {
  // TODO: return (not print!) a message containing the player's score and bank's score
  // use /n to print on a new line
  return "player score: " + playerScore + "\n" + "bank score: " + bankScore
}

function endGameMessage(playerScore, bankScore) {
  // TODO: return (not print!) a message telling if the user won or lost.
  if (playerScore > 21 || playerScore < bankScore) {
    return "You're Lose Man"
  } else if ( playerScore == 21 ) {
    return "Black Jack"
  } else if ( playerScore > bankScore ) {
    return "Win!, Are you cheating ?"
  } else if ( playerScore == bankScore ) {
    return "Draw, Greedy!" }
  }

function askingForCard(score) {
  // Send the prompt message here!\
  if (prompt.question("Card? 'y' to get a new card\n") == "y") {
      return true   
  } else {
      return false
  }
}

function deal() {
  // TODO: make the user play from terminal in a while loop that will stop
  // when the user will not be asking for a new card
  let playerScore = 0
  let bankScore = blackJack.pickBankScore()
  while (askingForCard()) {
    playerScore = playerScore + blackJack.pickPlayerCard()
    console.log(stateOfTheGame(playerScore,bankScore))
  }
  console.log(endGameMessage(playerScore,bankScore))
  }



module.exports = { stateOfTheGame, deal, endGameMessage }


