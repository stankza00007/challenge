const {
  Model,
  Models
} = require('../index')

class Comment extends Model {
  static get dates() {
    return super.dates.concat(['date'])
  }

  static castDates(field, value) {
    if (field === 'date') {
      return `${value.fromNow()}`
    }
    return super.formatDates(field, value)
  }

  user() {
    // define and return relationship here
<<<<<<< HEAD
    return this.belongsTo(Models.get('User'))
=======
>>>>>>> upstream/master
  }
  
  post() {
    // define and return relationship here
<<<<<<< HEAD
    return this.belongsTo(Models.get('Post'))
=======
>>>>>>> upstream/master
  }
}

Models.add('Comment', Comment)

module.exports = Comment