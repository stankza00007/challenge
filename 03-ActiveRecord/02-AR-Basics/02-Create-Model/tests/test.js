const moment = require('moment')
const {
    User,
    Post,
    Comment
} = require('../lib/model/init')
const UserController = require('../lib/controller/User')
const { db, Model, Models } = require('../lib/index')

let usersColumns = ['username', 'gender', 'dob']
let postsColumns = ['title', 'content', 'likes', 'user_id']
let commentsColumns = ['comment', 'date', 'user_id', 'post_id']

describe('Model & Controller', () => {
    beforeAll(async () => {
        await db.table('users').truncate()
        await db.table('posts').truncate()
        await db.table('comments').truncate()
    })


    describe('User Model', () => {
        test('should be an instance of User and inherited Model', async () => {
            let temp = new User()
            expect(temp).toBeInstanceOf(User)
            expect(temp).toBeInstanceOf(Model)
        })
        test('should create a record in database', async () => {
            let temp = new User()
            temp.username = "testing"
            temp.gender = "Male"
            temp.dob = new Date()
            await temp.save()
            let temp2 = await User.find(temp.id)
            expect(temp2).toBeInstanceOf(User)
        })
        test('should have dob in dates', async () => {
            expect(User.dates).toContain('dob')
        })
        test('should have cast dob to YYYY-MM-DD', async () => {
            let casted = User.castDates('dob', moment(new Date()))
            expect(casted).toBe(moment(new Date()).format("YYYY-MM-DD"))
        })
        test('should have fields that match table columns name', async () => {
            let temp = new User()
            temp.username = "testing"
            temp.gender = "Male"
            temp.dob = new Date()
            await temp.save()
            expect(Object.keys(temp.toJSON())).toEqual(expect.arrayContaining(usersColumns));
        })
    })


    describe('Post Model', () => {
        test('should be an instance of Post and inherited Model', async () => {
            let temp = new Post()
            expect(temp).toBeInstanceOf(Post)
            expect(temp).toBeInstanceOf(Model)
        })
        test('should create a record in database', async () => {
            let temp = new Post()
            temp.title = "testing title"
            temp.content = "testing content"
            temp.likes = 0
            temp.user_id = 1
            await temp.save()
            let temp2 = await Post.find(temp.id)
            expect(temp2).toBeInstanceOf(Post)
        })
        test('should have fields that match table columns name', async () => {
            let temp = new Post()
            temp.title = "testing title"
            temp.content = "testing content"
            temp.likes = 0
            temp.user_id = 1
            await temp.save()
            expect(Object.keys(temp.toJSON())).toEqual(expect.arrayContaining(postsColumns));
        })
    })


    describe('Comment Model', () => {
        test('should be an instance of Comment and inherited Model', async () => {
            let temp = new Comment()
            expect(temp).toBeInstanceOf(Comment)
            expect(temp).toBeInstanceOf(Model)
        })
        test('should create a record in database', async () => {
            let temp = new Comment()
            temp.comment = "testing comment"
            temp.user_id = 1
            temp.post_id = 1
            temp.date = new Date()
            await temp.save()
            let temp2 = await Comment.find(temp.id)
            expect(temp2).toBeInstanceOf(Comment)
        })
        test('should have date in dates', async () => {
            expect(Comment.dates).toContain('date')
        })
        test('should have cast date to value from now', async () => {
            let casted = Comment.castDates('date', moment(new Date()))
            expect(casted).toBe(moment(new Date()).fromNow())
        })
        test('should have fields that match table columns name', async () => {
            let temp = new Comment()
            temp.comment = "testing comment"
            temp.user_id = 1
            temp.post_id = 1
            temp.date = new Date()
            await temp.save()
            expect(Object.keys(temp.toJSON())).toEqual(expect.arrayContaining(commentsColumns));
        })
    })


})
