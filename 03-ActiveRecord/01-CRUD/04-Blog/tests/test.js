require('../lib/index') // init DB


const User = require('../lib/User')
const Post = require('../lib/Post')
const Comment = require('../lib/Comment')

let userInfo = {
    username: "testing",
    gender: "Male",
    dob: new Date().getTime() / 1000
}
let postInfo = {
    title: "testing Title",
    content: "testing post"
}
let commentInfo = {
    comment: "testing comment",
    date: new Date().getTime()/1000
}

describe('User', () => {
    let user1

    beforeAll(() => {
        user1 = new User(userInfo)
    })

    test('should return an instance of User', () => {
        expect(user1 instanceof User).toBeTruthy()
    })
    test('findById should be a class method', () => {
        expect(user1.findById).toBeUndefined()
        expect(User.findById).toBeDefined()
    })
    test('all should be a class method', () => {
        expect(user1.all).toBeUndefined()
        expect(User.all).toBeDefined()
    })
    test('id should not be assigned before save', () => {
        expect(user1.id).toBeUndefined()
    })
    test('id should be assigned after save', () => {
        user1.save()
        expect(user1.id).toBeDefined()
    })
    test('findById should return a User instance', () => {
        expect(User.findById(user1.id) instanceof User).toBeTruthy()
    })
    test('user record should be saved to database', () => {
        let temp = User.findById(user1.id)
        expect(temp instanceof User).toBeTruthy()
        expect(temp.id).toEqual(user1.id)
        expect(temp.username).toEqual(user1.username)
        expect(temp.gender).toEqual(user1.gender)
        expect(temp.dob).toEqual(user1.dob)
    })
    test('all should return an array of User instance', () => {
        const users = User.all()
        expect(Array.isArray(users)).toBeTruthy()
        expect(users[0] instanceof User).toBeTruthy()
    })
    test('should remove a user from database', () => {
        user1.destroy()
        expect(User.findById(user1.id)).toBeUndefined()
    })
})

describe('Post', () => {
    let user2
    let post1

    beforeAll(() => {
        user2 = new User(userInfo)
        user2.save()
        postInfo.user_id = user2.id
        post1 = new Post(postInfo)
    });

    afterAll(() => {
        user2.destroy()
    });

    test('should return an instance of Post', () => {
        expect(post1 instanceof Post).toBeTruthy()
    })
    test('findById should be a class method', () => {
        expect(post1.findById).toBeUndefined()
        expect(Post.findById).toBeDefined()
    })
    test('findByUserId should be a class method', () => {
        expect(post1.findByUserId).toBeUndefined()
        expect(Post.findByUserId).toBeDefined()
    })
    test('all should be a class method', () => {
        expect(post1.all).toBeUndefined()
        expect(Post.all).toBeDefined()
    })
    test('id should not be assigned before save', () => {
        expect(post1.id).toBeUndefined()
    })
    test('id should be assigned after save', () => {
        post1.save()
        expect(post1.id).toBeDefined()
    })
    test('likes should be default to zero', () => {
        expect(post1.likes).toEqual(0)
    })
    test('findById should return a Post instance', () => {
        expect(Post.findById(post1.id) instanceof Post).toBeTruthy()
    })
    test('post record should be saved to database', () => {
        let temp = Post.findById(post1.id)
        expect(temp instanceof Post).toBeTruthy()
        expect(temp.id).toEqual(post1.id)
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
    test('findByUserId should return any array of Post instance', () => {
        const posts = Post.findByUserId(user2.id)
        expect(Array.isArray(posts)).toBeTruthy()
        expect(posts[0] instanceof Post).toBeTruthy()
    })
    test('should remove a post from database', () => {
        post1.destroy()
        expect(Post.findById(post1.id)).toBeUndefined()
    })
})

describe('Comment', () => {
    let user2
    let post2
    let comment1, comment2

    beforeAll(() => {
        user2 = new User(userInfo)
        user2.save()
        postInfo.user_id = user2.id
        post2 = new Post(postInfo)
        post2.save()
        commentInfo.user_id = user2.id
        commentInfo.post_id = post2.id
        comment1 = new Comment(commentInfo)
        comment2 = new Comment(commentInfo)
    })

    afterAll(() => {
        user2.destroy()
        post2.destroy()
    })
    test('should return an instance of Comment', () => {
        expect(comment1 instanceof Comment).toBeTruthy()
    })
    test('findById should be a class method', () => {
        expect(comment1.findById).toBeUndefined()
        expect(Comment.findById).toBeDefined()
    })
    test('findByPostId should be a class method', () => {
        expect(comment1.findByPostId).toBeUndefined()
        expect(Comment.findByPostId).toBeDefined()
    })
    test('deleteByPostId should be a class method', () => {
        expect(comment1.deleteByPostId).toBeUndefined()
        expect(Comment.deleteByPostId).toBeDefined()
    })
    test('all should be a class method', () => {
        expect(comment1.all).toBeUndefined()
        expect(Comment.all).toBeDefined()
    })
    test('id should not be assigned before save', () => {
        expect(comment1.id).toBeUndefined()
    })
    test('id should be assigned after save', () => {
        comment1.save()
        expect(comment1.id).toBeDefined()
    })
    test('findById should return a Comment instance', () => {
        expect(Comment.findById(comment1.id) instanceof Comment).toBeTruthy()
    })
    test('comment record should be saved to database', () => {
        let temp = Comment.findById(comment1.id)
        expect(temp instanceof Comment).toBeTruthy()
        expect(temp.id).toEqual(comment1.id)
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
    test('findByPostId should return any array of Comment instance', () => {
        const comments = Comment.findByPostId(post2.id)
        expect(Array.isArray(comments)).toBeTruthy()
        expect(comments[0] instanceof Comment).toBeTruthy()
    })
    test('should remove a comment from database', () => {
        comment1.destroy()
        expect(Comment.findById(comment1.id)).toBeUndefined()
    })
    test('should remove comments of specific post from database', () => {
        new Comment(commentInfo).save()
        new Comment(commentInfo).save()
        expect(Comment.findByPostId(post2.id).length).toEqual(2)
        Comment.deleteByPostId(post2.id)
        expect(Comment.findByPostId(post2.id).length).toEqual(0)
    })
})