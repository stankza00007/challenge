const {
    User, Post, Comment
} = require('./model/init')

async function getUserPostsByUserId (userId) {
    // you should return an array of object
<<<<<<< HEAD
    let user = await User.find(userId)
    let posts = await user.posts().fetch()
    return Object.assign({},user.toJSON(),{
        posts: posts.rows.map(post => post.toJSON())
    })
    
    
=======
>>>>>>> upstream/master
}

async function getUserCommentsByUserId (userId) {
    // you should return an array of object
<<<<<<< HEAD
    let user = await User.find(userId)
    let comments = await user.comments().fetch()
    return Object.assign({},user.toJSON(),{
        comments: comments.rows.map(com => com.toJSON())
    })
=======
>>>>>>> upstream/master
}

async function getPostsWithComments() {
    // you should return an array of object
<<<<<<< HEAD
    return console.log(typeof Post);
}

// async function run() {
//     // You can use this to test your functions above

//     let userPosts = await getUserPostsByUserId(1)
//     console.log(userPosts)
//     let userComments = await getUserCommentsByUserId(1)
//     console.log(userComments)

//     let posts = await getPostsWithComments()
//     console.log(posts)
//     posts.forEach(post => {
//         console.log(JSON.stringify(post, null, 4))
//     })
// }
=======
}

async function run() {
    // You can use this to test your functions above

    // let userPosts = await getUserPostsByUserId(1)
    // console.log(userPosts)
    // let userComments = await getUserCommentsByUserId(1)
    // console.log(userComments)

    // let posts = await getPostsWithComments()
    // console.log(posts)
    // posts.forEach(post => {
    //     console.log(JSON.stringify(post, null, 4))
    // })
}
>>>>>>> upstream/master

// run()

module.exports = {
    getPostsWithComments,
    getUserCommentsByUserId,
    getUserPostsByUserId
}