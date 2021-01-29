const {
  Model,
  Models
} = require('../index')
const crypto = require('crypto')

class User extends Model {
  static get dates() {
    return super.dates.concat(['dob'])
  }

  static castDates(field, value) {
    if (field === 'dob') {
      return value.format("YYYY-MM-DD")
    }
    return super.formatDates(field, value)
  }
  
  posts() {
    return this.hasMany(Models.get('Post'))
  }

  comments() {
    return this.hasMany(Models.get('Comment'))
  }

}

Models.add('User', User)

module.exports = User