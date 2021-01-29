// We'll use the following library again!
// You can read more on the documentation here
// https://nodejs.org/api/readline.html#readline_event_line
const readline = require('readline')

const coach = require('./coachAnswer')

// We'll use this interface for asking our questions
const interface = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

// This set's our prompt message
interface.setPrompt('What do you want ? \n');

// Send the prompt message
interface.prompt('What do you want ? \n');

// Each time the user types anything
interface.on('line', (userInput) => {
    if (userInput == "exit") {
        return interface.close()
    } else if (userInput == "I am going to work right now!") {
        return console.log(`Coach: 'Good!'`),interface.close()
    }
    
    else console.log(`You: ${userInput}\nCoach: ${coach.coachAnswerEnhanced(userInput)}`)
    
    // TODO: if the user types 'exit' we want to exit the interface.
    // TODO: Pass your userInput to your coachAnswer
    // Note: You may need to make use of interface.close() to exit
})