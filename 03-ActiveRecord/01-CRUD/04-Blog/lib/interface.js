(async () => {
    require('./index') // init DB
    const prompt = require('prompt-sync')();
    const moment = require('moment')

    const User = require('./User')
    const Post = require('./Post')
    const Comment = require('./Comment')
    


    
    let operation = ""

    let user = ""

    do {

        let userId = prompt("Enter user Id:")

        user = User.findById(userId)

    } while (!user)

    console.log(`\n\nWelcome back ${user.username}!`)
    mainMenu()

    function mainMenu() {
        let mainMenu = `1. Browse All Posts\n2. Browse Post By Id\n3. Browse My Posts\n4. Create Posts\n5. Delete Post`

        do {
            console.log(`\n`)
            console.log(mainMenu)
            operation = prompt("Select an option (exit): ")
            switch(operation) {
                case "1": {
                    browsePosts()
                    break
                }
                case "2": {
                    browsePostById()
                    break
                }
                case "3": {
                    browseMyPosts()
                    break
                }
                case "4": {
                    createPost()
                    break
                }
                case "5": {
                    deletePost()
                    break
                }
            }
        } while (operation !== 'exit')

    }

    function browsePosts() {
        let posts = Post.all()
        posts.forEach(post => {
            printPost(post)
        })
    }

    function browsePostById() {
        let postId = prompt("Enter Post Id:")

        postId = parseInt(postId)
        let post = Post.findById(postId)
        if (!post) return console.log("Post not found.")
        printPost(post)
        console.log("\nComments: ")
        let comments = Comment.findByPostId(postId)
        printComments(comments)
    }

    function browseMyPosts() {
        let posts = Post.findByUserId(user.id)
        posts.forEach(post => {
            printPost(post)
        })
    }

    function createPost() {
        let title = prompt("Enter Title: ")
        let content = prompt("Enter content: ")

        let postInfo = {
            title,
            content,
            date: new Date().getTime / 1000,
            user_id: user.id
        }

        let post = new Post(postInfo)
        post.save()
        console.log(`${post.title} created.`)
        printPost(post)

    }

    function deletePost() {
        let postId = prompt("Enter Post Id:")
        postId = parseInt(postId)
        let post = Post.findById(postId)
        if (post) {
            post.destroy()
            console.log(`Post deleted.`)
            let result = Comment.deleteByPostId(postId)
            console.log(`No. of comment deleted: ${result.changes || 0}`)
        }

    }

    function printPost(post) {
        let author = User.findById(post.author)
        console.log(`\nPost Id: ${post.id}, Title: ${post.title}, likes: ${post.likes}`)
        console.log(`Author: ${author.username}`)
        console.log(`Content: `)
        console.log(`${post.content}`)
    }

    function printComments(comments) {
        if (!comments.length) console.log("No comment.")
        comments.forEach(comment => {
            let commentor = User.findById(comment.commentorId)
            console.log(`\n${comment.comment}`)
            console.log(`By ${commentor.username}, ${moment.unix(comment.date).fromNow()}`)
        })
    }
    

})();
