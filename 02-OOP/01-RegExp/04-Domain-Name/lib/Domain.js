
function get(domain) {
    let regex = /\w+[^http://.]/
    let res = domain.match(regex)
    let resf = res.join('')
    return resf
}

module.exports = {
    get
}