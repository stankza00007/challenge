const {
    Model,
    Models
} = require('../index')

class User extends Model {
    static get dates() {
        return super.dates.concat(['dob'])
    }

    static castDates (field, value) {
        if (field === 'dob') {
          return value.format("YYYY-MM-DD")
        }
        return super.formatDates(field, value)
      }
}

Models.add('User', User)

module.exports = User