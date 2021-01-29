

function coachAnswer(yourMessage) {
  // TODO: return coach answer to yourMessage
  if (yourMessage == "I am going to work right now!") {
    return ""
  } else if (yourMessage.includes("?")) { return "Silly question, get dressed and go to work!" } 
    else {
      return "I don't care, get dressed and go to work!"
    }
  }

function coachAnswerEnhanced(yourMessage) {
  // TODO: return coach answer to yourMessage, with additional custom rules of yours!
  // Warning: You should use the function above in some way! And do not copy and paste
  // the conditional statements above!
  if (yourMessage == "I AM GOING TO WORK RIGHT NOW!") {
    return ""
  } else if (yourMessage.includes("?")&&(yourMessage.toUpperCase())) { 
    return "I can feel your motivation! Silly question, get dressed and go to work!" }
    else if (yourMessage.includes("?")) { return "Silly question, get dressed and go to work!" } 
    else {
      return "I don't care, get dressed and go to work!"
    }
  
}

module.exports = {
    coachAnswer,
    coachAnswerEnhanced
}