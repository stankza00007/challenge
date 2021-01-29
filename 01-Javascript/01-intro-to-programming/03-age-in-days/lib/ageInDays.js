function ageInDays(day,month,year) {
    // return the age expressed in days given the day, month, and year of birth
<<<<<<< HEAD
    var currentDate = new Date()
    var birthDate = new Date(year,month,day)
    var days = (1000 * 60 * 60 * 24)
    return Math.round(((currentDate - birthDate)/days) - 38.58528189815115)
=======
    return Math.ceil((new Date() - new Date(year, month, day)) / (1000 * 60 * 60 * 24))
>>>>>>> upstream/master
}

module.exports = ageInDays
