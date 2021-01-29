const {
    db
} = require('./index')

const {
    createUserTable,
    createPostTable,
    createCommentTable,
} = require('./createTables')

async function run() {
    console.log("Create tables...")
    await Promise.all([
        createUserTable(),
        createPostTable(),
        createCommentTable()
    ])
    console.log("Done.")
}

run()

