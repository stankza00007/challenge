
function ipv4(address) {
    let regex = /\b(([0-5]|[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/gusm

    let check = regex.test(address)
    
    return check
}

function ipv6(address) {
    let regex = /(([0-9]|[a-f]){1,4}(:|$)){7}([0-9])/g

    let check = regex.test(address)
    
    return check
    
}

module.exports = {
    ipv4,
    ipv6
}