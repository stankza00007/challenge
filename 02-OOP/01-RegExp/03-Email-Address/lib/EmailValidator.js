
function validate(email) {
    let regex = /\w+@[\w]+?\.\w/g
    let check = regex.test(email)
    return check
}

function getUsername(email) {
    let regex = /\w+@/g
    let res = email.match(regex)
    let resp = res.join('')
    let resf = resp.slice(0,-1)
    return resf
}

function getDomain(email) {
    let regex = /@+\w+.\w+/g
    let res = email.match(regex)
    let resp = res.join('')
    let resf = resp.substr(1)
    return resf
}

module.exports = {
    validate,
    getUsername,
    getDomain,
}