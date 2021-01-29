<<<<<<< HEAD
const moment = require('moment')
=======
>>>>>>> upstream/master
const {
    Model,
    Models
} = require('../index')
<<<<<<< HEAD
class Comment extends Model {
    static get dates() {
        return super.dates.concat(['date'])
    }

    static castDates(field, value) {
        if (field == 'date') {
            return moment(new Date()).fromNow()
        }
        return super.castDates(field, value)
    }
}





Models.add('Comment',Comment)

module.exports = Comment
=======


module.exports = Comment
>>>>>>> upstream/master
