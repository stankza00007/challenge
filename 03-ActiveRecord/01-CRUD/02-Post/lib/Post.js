<<<<<<< HEAD
// import { isModuleDeclaration } from "@babel/types";

const DB = global.DB

class Post {
    constructor (postInfo) {

        let {

            id,
            title,
            content,
            user_id,
            likes,

        } = postInfo

        this._id = id
        this.title = title
        this.content = content
        this._user_id = user_id
        this.likes = likes || 0
    }

    static all(){
        const cmd = DB.prepare('SELECT * FROM `posts`')
        const res = cmd.all()
        let ar = res.map(ob => new Post(ob))
        return ar
    }
    
    static findById(id){
        const cmd = DB.prepare('SELECT * FROM `posts` WHERE id = ?')
        const res = cmd.get(id)
        return new Post(res)
    }


    // save() {
    //     const stmt = DB.prepare("INSERT INTO `posts` (postInfo) VALUES (?)")
    //     const info = stmt.run(this.id,this.title,this.content,this.user_id,this.likes)
    //     this._id = info.lastInsertRowid
        
    //     return infoinfo.lastInsertRowid
    // }
}

module.exports = Post
=======
const DB = global.DB

>>>>>>> upstream/master
// TODO: Create Post class
// TODO: Don't forget to export your class