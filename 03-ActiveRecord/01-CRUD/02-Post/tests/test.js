require('../lib/index') // init DB
const Post = require('../lib/Post')

let postInfo = {
    title: "testing Title",
    content: "testing post",
    user_id: 10
}
let post1 = new Post(postInfo)

describe('Post', () => {
    let info
    beforeAll(() => {
        const stmt = DB.prepare("INSERT INTO posts (title, content, likes, user_id) VALUES (?, ?, ?, ?)")
        info = stmt.run(post1.title, post1.content, post1.likes, post1._user_id)
    })

    afterAll(() => {
        const stmt = DB.prepare("DELETE FROM posts WHERE id = ?")
        stmt.run(post1._id)
    })

    test('should return an instance of Post', () => {
        expect(post1 instanceof Post).toBeTruthy()
    })
    test('findById should be a class method', () => {
        expect(post1.findById).toBeUndefined()
        expect(Post.findById).toBeDefined()
    })
    test('all should be a class method', () => {
        expect(post1.all).toBeUndefined()
        expect(Post.all).toBeDefined()
    })
    test('id should not be assigned before save', () => {
        expect(post1._id).toBeUndefined()
        post1._id = info.lastInsertRowid
    })
    test('likes should be default to zero', () => {
        expect(post1.likes).toEqual(0)
    })
    test('findById should return a Post instance', () => {
        expect(Post.findById(post1._id) instanceof Post).toBeTruthy()
    })
    test('post record should be saved to database', () => {
        let temp = Post.findById(post1._id)
        expect(temp instanceof Post).toBeTruthy()
        expect(temp._id).toEqual(post1._id)
        expect(temp.title).toEqual(post1.title)
        expect(temp.content).toEqual(post1.content)
        expect(temp.user_id).toEqual(post1.user_id)
        expect(temp.likes).toEqual(post1.likes)
    })
    test('all should return an array of Post instance', () => {
        const posts = Post.all()
        expect(Array.isArray(posts)).toBeTruthy()
        expect(posts[0] instanceof Post).toBeTruthy()
    })
    test('should remove a post from database', () => {
        post1.destroy()
        expect(Post.findById(post1._id)).toBeUndefined()
    })
})