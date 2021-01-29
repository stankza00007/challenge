// Here we import a library `readline` for allowing us to capture user inputs
const readline = require('readline')
const ageInDays = require('./ageInDays.js')

// This below will assign `interface` as our new interface
// Dont worry about understanding this part yet.
const interface = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

let birthYear, birthMonth, birthDay;

interface.question('Whats your year of birth?' + '\n', function(answer1) {
    birthYear = answer1

    interface.question('Whats your month of birth?' + '\n', function(answer2) {
        birthMonth = answer2

        interface.question('Whats your day of birth?' + '\n', function(answer3) {
            birthDay = answer3

            console.log("Calculating your age using complex algorithms......")
            
            let calculatedAge = ageInDays(birthYear,birthMonth,birthDay)
            
            console.log(`You are ${calculatedAge} days old... phew!`)

            interface.close()
        });

    });
});