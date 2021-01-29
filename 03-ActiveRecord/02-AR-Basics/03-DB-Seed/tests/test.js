// initialize
const {
    User, Post, Comment
} = require('../lib/model/init')

require('../lib/factory/init')

const { db, Models } = require('../lib/index')

const {
    generateUser,
    generateUsers,
    createUser,
    createUsers,
    generatePost,
    generatePosts,
    createPost,
    createPosts,
    generateComment,
    generateComments,
    createComment,
    createComments,
} = require('../lib/seed')

let usersColumns = ['username', 'gender', 'dob']
let postsColumns = ['title', 'content', 'likes', 'user_id']
let commentsColumns = ['comment', 'date', 'user_id', 'post_id']

describe('Factory', () => {
    beforeAll(async () => {
        await db.table('users').truncate()
        await db.table('posts').truncate()
        await db.table('comments').truncate()
    })

    describe('User', () => {
        test('generateUser should return a User instance', async () => {
            const user = await generateUser()
            expect(user).toBeInstanceOf(User)
        })
        test('generateUser should not save any record to database', async () => {
            let count = await User.getCount()
            await generateUser()
            expect(count).toBe(await User.getCount())
        })
        test('generateUsers should return an array of User instance', async () => {
            const users = await generateUsers(5)
            expect(users[0]).toBeInstanceOf(User)
        })
        test('generateUsers should not save any record to database', async () => {
            let count = await User.getCount()
            await generateUsers(5)
            expect(count).toBe(await User.getCount())
        })
        test('generated user should have fields that match table columns name', async () => {
            const user = (await generateUser()).toJSON()
            expect(Object.keys(user)).toEqual(expect.arrayContaining(usersColumns));
        })

        test('createUser should return a User instance', async () => {
            const user = await createUser()
            expect(user).toBeInstanceOf(User)
        })
        test('createUser should save any record to database', async () => {
            let count = await User.getCount()
            await createUser()
            count++
            expect(count).toBe(await User.getCount())
        })
        test('createUsers should return an array of User instance', async () => {
            const users = await createUsers(5)
            expect(users[0]).toBeInstanceOf(User)
        })
        test('createUsers should not save any record to database', async () => {
            let count = await User.getCount()
            await createUsers(5)
            count += 5
            expect(count).toBe(await User.getCount())
        })
        test('created user should have fields that match table columns name', async () => {
            const user = (await createUser()).toJSON()
            expect(Object.keys(user)).toEqual(expect.arrayContaining(usersColumns));
        })
    })

    describe('Post', () => {
        test('generatePost should return a Post instance', async () => {
            const post = await generatePost()
            expect(post).toBeInstanceOf(Post)
        })
        test('generatePost should not save any record to database', async () => {
            let count = await Post.getCount()
            await generatePost()
            expect(count).toBe(await Post.getCount())
        })
        test('generatePosts should return an array of Post instance', async () => {
            const posts = await generatePosts(5)
            expect(posts[0]).toBeInstanceOf(Post)
        })
        test('generatePosts should not save any record to database', async () => {
            let count = await Post.getCount()
            await generatePosts(5)
            expect(count).toBe(await Post.getCount())
        })
        test('generated post should have fields that match table columns name', async () => {
            const post = (await generatePost()).toJSON()
            expect(Object.keys(post)).toEqual(postsColumns)
        })

        test('createPost should return a Post instance', async () => {
            const post = await createPost()
            expect(post).toBeInstanceOf(Post)
        })
        test('createPost should save any record to database', async () => {
            let count = await Post.getCount()
            await createPost()
            count++
            expect(count).toBe(await Post.getCount())
        })
        test('createPosts should return an array of Post instance', async () => {
            const posts = await createPosts(5)
            expect(posts[0]).toBeInstanceOf(Post)
        })
        test('createPosts should not save any record to database', async () => {
            let count = await Post.getCount()
            await createPosts(5)
            count += 5
            expect(count).toBe(await Post.getCount())
        })
        test('created post should have fields that match table columns name', async () => {
            const post = (await createPost()).toJSON()
            expect(Object.keys(post)).toEqual(expect.arrayContaining(postsColumns));
        })
    })

    describe('Comment', () => {
        test('generateComment should return a Comment instance', async () => {
            const comment = await generateComment()
            expect(comment).toBeInstanceOf(Comment)
        })
        test('generateComment should not save any record to database', async () => {
            let count = await Comment.getCount()
            await generateComment()
            expect(count).toBe(await Comment.getCount())
        })
        test('generateComments should return an array of Comment instance', async () => {
            const comments = await generateComments(5)
            expect(comments[0]).toBeInstanceOf(Comment)
        })
        test('generateComments should not save any record to database', async () => {
            let count = await Comment.getCount()
            await generateComments(5)
            expect(count).toBe(await Comment.getCount())
        })
        test('generated comment should have fields that match table columns name', async () => {
            const comment = (await generateComment()).toJSON()
            expect(Object.keys(comment)).toEqual(commentsColumns)
        })

        test('createComment should return a Comment instance', async () => {
            const comment = await createComment()
            expect(comment).toBeInstanceOf(Comment)
        })
        test('createComment should save any record to database', async () => {
            let count = await Comment.getCount()
            await createComment()
            count++
            expect(count).toBe(await Comment.getCount())
        })
        test('createComments should return an array of Comment instance', async () => {
            const comments = await createComments(5)
            expect(comments[0]).toBeInstanceOf(Comment)
        })
        test('createComments should not save any record to database', async () => {
            let count = await Comment.getCount()
            await createComments(5)
            count += 5
            expect(count).toBe(await Comment.getCount())
        })
        test('created comment should have fields that match table columns name', async () => {
            const comment = (await createComment()).toJSON()
            expect(Object.keys(comment)).toEqual(expect.arrayContaining(commentsColumns));
        })
    })
})