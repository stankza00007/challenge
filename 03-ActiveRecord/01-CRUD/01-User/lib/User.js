const DB = global.DB

<<<<<<< HEAD
class User {
    constructor (userinfo) {
        let {
            id,
            userName,
            gender,
            dob,
        } = userinfo
        this._id = id
        this.username = userName
        this.gender = gender
        this.dob = dob
    }

    static all (){
        const cmd = DB.prepare('SELECT * FROM `users`')
        const res = cmd.all()
        let ar = res.map(ob => new User(ob))
        return ar
    }

    static findById(id){
        const cmd = DB.prepare(`SELECT * from users where id = ?`)
        const res = cmd.get(id)
        return new User(res)
    }
}


module.exports = User

=======
>>>>>>> upstream/master
// TODO: Create User class
// TODO: Don't forget to export your class