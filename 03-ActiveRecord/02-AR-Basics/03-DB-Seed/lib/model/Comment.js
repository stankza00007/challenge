const {
    Model,
    Models
} = require('../index')

class Comment extends Model {
    static get dates() {
        return super.dates.concat(['date'])
    }

    static castDates (field, value) {
        if (field === 'date') {
          return `${value.fromNow(true)} old`
        }
        return super.formatDates(field, value)
      }
}

Models.add('Comment', Comment)

module.exports = Comment
