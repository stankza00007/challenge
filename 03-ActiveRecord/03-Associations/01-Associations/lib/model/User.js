const {
  Model,
  Models
} = require('../index')

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
    // define and return relationship here
<<<<<<< HEAD
    return this.hasMany(Models.get('Post'))
  }

  comments() {
    // define and return relationship here   
    return this.hasMany(Models.get('Comment')) 
=======
  }

  comments() {
    // define and return relationship here    
>>>>>>> upstream/master
  }

}

Models.add('User', User)

module.exports = User