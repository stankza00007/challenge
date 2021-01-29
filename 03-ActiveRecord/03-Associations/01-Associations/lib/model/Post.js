const {
    Model,
    Models
} = require('../index')

class Post extends Model {
    user() {
        // define and return relationship here
<<<<<<< HEAD
        return this.belongsTo(Models.get('User'))
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

Models.add('Post', Post)

module.exports = Post