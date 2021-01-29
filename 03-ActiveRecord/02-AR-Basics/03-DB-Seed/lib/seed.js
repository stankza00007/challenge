// initialize
require('./model/init')
require('./factory/init')

const { Factory } = require('./index')

async function generateUser() {
<<<<<<< HEAD
    const user = await Factory
    .model('model:User')
    .make()
    return user
}

async function generateUsers(n) {
    const users = await Factory
    .model('model:User')
    .makeMany(n)
    return users
=======
    
}

async function generateUsers(n) {
>>>>>>> upstream/master
    
}

async function createUser() {
<<<<<<< HEAD
    const user = await Factory
    .model('model:User')
    .create()
    return user
}

async function createUsers(n) {
    const user = await Factory
    .model('model:User')
    .createMany(n)
    return user
=======
   
}

async function createUsers(n) {
   
>>>>>>> upstream/master
}


async function generatePost() {
<<<<<<< HEAD
    const post = await Factory
    .model('model:Post')
    .make()
    return post
}

async function generatePosts(n) {
    const posts = await Factory
    .model('model:Post')
    .makeMany(n)
    return posts
}

async function createPost() {
    const post = await Factory
    .model('model:Post')
    .create()
    return post
}

async function createPosts(n) {
    const posts = await Factory
    .model('model:Post')
    .createMany(n)
    return posts
=======
   
}

async function generatePosts(n) {
  
}

async function createPost() {
   
}

async function createPosts(n) {
    
>>>>>>> upstream/master
}



async function generateComment() {
<<<<<<< HEAD
    const comment = await Factory
    .model('model:Comment')
    .make()
    return comment
}

async function generateComments(n) {
    const comments = await Factory
    .model('model:Comment')
    .makeMany(n)
    return comments
}

async function createComment() {
    const comment = await Factory
    .model('model:Comment')
    .create()
    return comment
}

async function createComments(n) {
    const comments = await Factory
    .model('model:Comment')
    .createMany(n)
    return comments
=======
   
}

async function generateComments(n) {
    
}

async function createComment() {
    
}

async function createComments(n) {
    
>>>>>>> upstream/master
}

module.exports = {
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
}