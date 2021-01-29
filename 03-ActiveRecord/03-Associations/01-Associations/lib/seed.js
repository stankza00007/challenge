// initialize
require('./model/init')
require('./factory/init')

const {
    createUserTable,
    createPostTable,
    createCommentTable,
    dropTables
} = require('./createTables')

const { Factory } = require('./index')

async function createUsers(n) {
    let users = await Factory.model('model:User').createMany(n)
    return users
}

async function createPosts(n) {
    let posts = await Factory.model('model:Post').createMany(n)
    return posts
}

async function createComments(n) {
    let comments = await Factory.model('model:Comment').createMany(n)
    return comments
}

async function generatePostsForUser(user, n) {
    // remember to return posts
<<<<<<< HEAD
    let posts = await Factory.model('model:Post').createMany(n) 
    await user.posts().saveMany(posts)
    return posts
=======
>>>>>>> upstream/master
}

async function generateCommentsForUserPost(user, post, n) {
   // no need return
<<<<<<< HEAD
   let comments = await Factory.model('model:Comment').createMany(n)
   await post.comments().saveMany(comments)
   await user.comments().saveMany(comments)
=======
>>>>>>> upstream/master
}

async function run() {

    //  Keep 
    await dropTables()
    await createUserTable()
    await createPostTable()
    await createCommentTable()
    console.log("Table created.")
    // Keep
    
    let postsAry = []
    let users = await createUsers(11)

    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        let posts = await generatePostsForUser(user, 2)
        postsAry = postsAry.concat(posts)
    }

    for (let i = 0; i < postsAry.length; i++) {
        let post = postsAry[i]
        let user = users[Math.floor(Math.random() * Math.floor(users.length))] 
        let n = Math.floor(Math.random() * Math.floor(2))
        await generateCommentsForUserPost(user, post, n)
    }

    console.log("Seeded.")

}

// run()

module.exports = {
    createUsers,
    createPosts,
    createComments,
    generatePostsForUser,
    generateCommentsForUserPost,
}