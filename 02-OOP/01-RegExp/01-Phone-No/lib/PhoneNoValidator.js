function hongkong(phoneNo) {
//+852
let regex = /\+?(\(?\d{3}\)?)?\-?[235679]\d{3}\-?\d{4}/g

let valid = regex.test(phoneNo)

return valid
}

function china(phoneNo) {
//+86
let regex = /\+?(\(?\d{2}\)?)?\-?\d{3}\-?\d{3}\-?\d{2}/g

let valid = regex.test(phoneNo)

return valid

}

function uk(phoneNo) {
//+44
let regex = /\+?(\(?\d{2}\)?)?\-?\d{3}\-?\d{3}\-?\d{2}/g

let valid = regex.test(phoneNo)

return valid

}

function usa(phoneNo) {
//+1
let regex = /\+?(\(?\d\)?)?\-?\d{3}\-?\d{3}\-?\d{2}\d{2}|\d{8}/g

let valid = regex.test(phoneNo)

return valid
    
}


module.exports = {
    hongkong,
    china,
    uk,
    usa,
}