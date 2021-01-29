const moment = require('moment')
const {
    Model,
    Models
} = require('../index')
<<<<<<< HEAD
class User extends Model {
    static get dates() {
        return super.dates.concat(['dob'])
    }

    static castDates(field, value) {
        if (field == 'dob') {
            return moment(value).format("YYYY-MM-DD")
        }
        return super.castDates(field, value)
    }
}
Models.add('User', User)
=======


>>>>>>> upstream/master


module.exports = User