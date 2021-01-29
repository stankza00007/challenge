require('../lib/index') // init DB
const {
    User, Post, Comment
} = require('../lib/model/init')

const {
    getPostsWithComments,
    getUserCommentsByUserId,
    getUserPostsByUserId
} = require('../lib/query')

const {
    generatePostsForUser,
    generateCommentsForUserPost
} = require('../lib/seed')

// const {
//     createUserTable,
//     createPostTable,
//     createCommentTable,
//     dropTables
// } = require('../lib/createTables')

describe('Models', () => {

    describe('User', () => {
        it('Should have many posts', async () => {
            let user = await User.first()
            let usersPost = user.posts()
            expect(usersPost.$relation.primaryTable).toBe('users')
            expect(usersPost.$relation.foreignTable).toBe('posts')
            expect(usersPost.$relation.name).toBe('HasMany')
        })
        it('Should have many comments',  async () => {
            let user = await User.first()
            let userComments = user.comments()
            expect(userComments.$relation.primaryTable).toBe('users')
            expect(userComments.$relation.foreignTable).toBe('comments')
            expect(userComments.$relation.name).toBe('HasMany')
        })
    })

    describe('Post', () => {
        it('Should belong to a user',  async () => {
            let post = await Post.first()
            let postAuthor = post.user()
            expect(postAuthor.$relation.primaryTable).toBe('posts')
            expect(postAuthor.$relation.foreignTable).toBe('users')
            expect(postAuthor.$relation.primaryKey).toBe('user_id')
            expect(postAuthor.$relation.name).toBe('BelongsTo')
        })
        it('Should has many comments',  async () => {
            let post = await Post.first()
            let postComments = post.comments()
            expect(postComments.$relation.primaryTable).toBe('posts')
            expect(postComments.$relation.foreignTable).toBe('comments')
            expect(postComments.$relation.name).toBe('HasMany')
        })
    })

    describe('Comment', () => {
        it('Should belong to a post', async () => {
            let comment = await Comment.first()
            let commentParentPost = comment.post()
            expect(commentParentPost.$relation.primaryTable).toBe('comments')
            expect(commentParentPost.$relation.foreignTable).toBe('posts')
            expect(commentParentPost.$relation.name).toBe('BelongsTo')
        })
        it('Should be written by a user', async () => {
            let comment = await Comment.first()
            let commentAuthor = comment.user()
            expect(commentAuthor.$relation.primaryTable).toBe('comments')
            expect(commentAuthor.$relation.foreignTable).toBe('users')
            expect(commentAuthor.$relation.name).toBe('BelongsTo')
        })
    })
})

describe('Database Seeding', () => {

    describe('generatePostsForUser function', () => {
        it('Should generate `n` dummy posts for a user', async () => {
            let firstUser = await User.first()
            let before = await firstUser.posts().fetch()
            await generatePostsForUser(firstUser, 5)
            let after = await firstUser.posts().fetch()
            expect(before.rows.length + 5).toBe(after.rows.length)
        })
    })

    describe('generateCommentsForUserPost function', () => {
        it('Should generate `n` dummy comments for a post', async () => {
            let firstUser = await User.first()
            let firstPost = await Post.first()
            let userCommentsBefore = await firstUser.comments().fetch()
            let postCommentsBefore = await firstPost.comments().fetch()
            await generateCommentsForUserPost(firstUser, firstPost, 10)
            let userCommentsAfter = await firstUser.comments().fetch()
            let postCommentsAfter = await firstPost.comments().fetch()
            expect(userCommentsBefore.rows.length + 10).toBe(userCommentsAfter.rows.length)
            expect(postCommentsBefore.rows.length + 10).toBe(postCommentsAfter.rows.length)
        })
    })
})

describe('Join Tables', () => {

    describe('getUserPostsByUserId function', () => {

        it('Should contain a `posts` property', async () => {
            let firstUser = await User.first()
            let firstUserPosts = await getUserPostsByUserId(firstUser.id)
            expect(firstUserPosts.posts).toBeTruthy()
        })

        it('Should return an array of objects for `posts` property', async () => {
            let firstUser = await User.first()
            let firstUserPosts = await getUserPostsByUserId(firstUser.id)
            expect(Array.isArray(firstUserPosts.posts)).toBeTruthy()
        })

        it('Should return user\'s posts', async () => {
            let firstUser = await User.first()
            let firstUserPosts = await getUserPostsByUserId(firstUser.id)
            for(i in firstUserPosts.posts) {
                expect(firstUserPosts.posts[i].user_id).toBe(firstUser.id)
            }
        })
    })

    describe('getUserCommentsByUserId function', () => {
        it('Should contain a `comments` property', async () => {
            let firstUser = await User.first()
            let firstUserComments = await getUserCommentsByUserId(firstUser.id)
            expect(firstUserComments.comments).toBeTruthy()
        })
        it('Should return an array of objects for `comments` property', async () => {
            let firstUser = await User.first()
            let firstUserComments = await getUserCommentsByUserId(firstUser.id)
            expect(Array.isArray(firstUserComments.comments)).toBeTruthy()
        })

        it('Should return user\'s comments', async () => {
            let firstUser = await User.first()
            let firstUserComments = await getUserCommentsByUserId(firstUser.id)
            for (i in firstUserComments.comments) {
                expect(firstUserComments.comments[i].user_id).toBe(firstUser.id)
            }
        })
    })

    describe('getPostsWithComments function', () => {
        it('Should return an array of objects', async () => {
            let postsWithComments = await getPostsWithComments()
            expect(Array.isArray(postsWithComments)).toBeTruthy()
        })

        it('Each item in the array should have a `user` property', async () => {
            let postsWithComments = await getPostsWithComments()
            for(i in postsWithComments) {
                expect(postsWithComments[i].user).toBeTruthy()
            }
        })

        it('Each item in the array should also have a `comments` property',  async () => {
            let postsWithComments = await getPostsWithComments()
            for(i in postsWithComments) {
                expect(postsWithComments[i].comments).toBeTruthy()
            }
        })

        it('Should have an author for each comment (user)', async () => {
            let postsWithComments = await getPostsWithComments()
            for(i in postsWithComments) {
                if(postsWithComments[i].comments && postsWithComments[i].comments.length>0) {
                    // expect(postsWithComments[i].comments).toBeTruthy()
                    // console.log(postsWithComments[i].comments[0])
                    expect(postsWithComments[i].comments[0].user).toBeTruthy()
                }
            }
        })
    })
})