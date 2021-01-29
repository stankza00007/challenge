require('../lib/index') // init DB
const Comment = require('../lib/Comment')

let postInfo = {
    title: "testing Title",
    content: "testing post",
    likes: 10,
    user_id: 10
}

let commentInfo = {
    comment: "testing comment",
    date: new Date().getTime()/1000
}
let comment1 = new Comment(commentInfo)

describe("Comment", () => {

    let info
    beforeAll(() => {
        const postStmt = DB.prepare("INSERT INTO posts (title, content, likes, user_id) VALUES (?, ?, ?, ?)")
        const infoPost = postStmt.run(postInfo.title, postInfo.content, postInfo.likes, postInfo.user_id)
        postInfo.id = infoPost.lastInsertRowid

        comment1._user_id = 10
        comment1._post_id = postInfo.id
        const stmt = DB.prepare("INSERT INTO comments (comment, date, post_id, user_id) VALUES (?, ?, ?, ?)")
        info = stmt.run(comment1.comment, comment1.date, comment1._post_id, comment1._user_id)
    })

    test('should return an instance of Comment', () => {
        expect(comment1 instanceof Comment).toBeTruthy()
    })
    test('findById should be a class method', () => {
        expect(comment1.findById).toBeUndefined()
        expect(Comment.findById).toBeDefined()
    })
    test('all should be a class method', () => {
        expect(comment1.all).toBeUndefined()
        expect(Comment.all).toBeDefined()
    })
    test('id should not be assigned before save', () => {
        expect(comment1._id).toBeUndefined()
    })
    test('id should be assigned after save', () => {
        comment1.save()
        expect(comment1._id).toBeDefined()
    })
    test('findById should return a Comment instance', () => {
        expect(Comment.findById(comment1._id) instanceof Comment).toBeTruthy()
    })
    test('comment record should be saved to database', () => {
        let temp = Comment.findById(comment1._id)
        expect(temp instanceof Comment).toBeTruthy()
        expect(temp._id).toEqual(comment1._id)
        expect(temp.comment).toEqual(comment1.comment)
        expect(temp.date).toEqual(comment1.date)
        expect(temp.user_id).toEqual(comment1.user_id)
        expect(temp.post_id).toEqual(comment1.post_id)
    })
    test('all should return an array of Comments instance', () => {
        const comments = Comment.all()
        expect(Array.isArray(comments)).toBeTruthy()
        expect(comments[0] instanceof Comment).toBeTruthy()
    })
    test('should remove a comment from database', () => {
        comment1.destroy()
        expect(Comment.findById(comment1._id)).toBeUndefined()
    })

    afterAll(() => {
        const stmt = DB.prepare("DELETE FROM comments WHERE id = ?")
        stmt.run(comment1._id)
    })
})