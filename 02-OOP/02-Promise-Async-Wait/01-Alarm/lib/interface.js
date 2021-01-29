const prompt = require('prompt-sync')();
const Alarm = require('../lib/index')

let seconds = prompt("How long? (seconds): ")

Alarm.setAlarm(seconds, askForSnooze)
console.log(`> Set a ${seconds} seconds alarm done.`)

function askForSnooze() {
    console.log("> Alarm ringing...\n")
    let answer = prompt("Snooze 5 seconds? ")
    if (answer.toLowerCase() == 'yes') {
        console.log("> Ringing in 5 seconds...")
        Alarm.snooze(askForSnooze)
    }
}