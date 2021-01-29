function setAlarm(seconds, callback) {
    let counter = seconds*1000
    setTimeout(function (){
        return callback()
    }, counter)
}

function snooze(callback) {
    
    return new Promise (function (good, bad) {
        setTimeout(function (){ 
            return callback()
        }, 5000)
    })
}

module.exports = {
    setAlarm,
    snooze,
}