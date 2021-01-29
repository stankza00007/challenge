const readline = require('readline')

// We'll use this interface for asking our questions
const interface = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

// This set's our prompt message
interface.setPrompt('This is a phone number validator,Please select a phone number type (1-4)\n');

interface.prompt(`This is a phone number validator,Please select a phone number type (1-4)\n`);

interface.on('line',(userInput) => {
    if (userInput == "1") {
        return check.hongkong(userInput)
    } else if (userInput == "2") {
        return check.china(userInput)
    } else if (userInput == "3") {
        return check.uk(userInput)
    } else if (userInput == "4") {
        return check.usa(userInput)
    } else {
        return "error,Please select a phone number type (1-4)"
    }
})

const check = require('./PhoneNoValidator')