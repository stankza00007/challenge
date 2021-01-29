function enoughChange(change, price) {

    let q = change[0]*0.25
    let d = change[1]*0.10
    let n = change[2]*0.05
    let p = change[3]*0.01

    if (q+d+n+p >= price) {
        return true
    } else {
        return false
    }    
}

module.exports = enoughChange