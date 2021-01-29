const {
    db
} = require('./index')

async function createUserTable() {
    return db.schema.createTable('users', function (table) {
        table.increments()
        table.string('username').notNullable()
        table.string('gender').notNullable()
        table.date('dob').notNullable()
        table.timestamps() // created_at and updated_at
    })
}

async function createPostTable() {
    return db.schema.createTable('posts', function (table) {
        table.increments()
        table.string('title').notNullable()
        table.string('content').notNullable()
        table.integer('likes').notNullable().defaultTo(0)
        table.integer('user_id')
        table.timestamps() // created_at and updated_at
    })
}

async function createCommentTable() {
    return db.schema.createTable('comments', function (table) {
        table.increments()
        table.string('comment').notNullable()
        table.datetime('date').notNullable()
        table.integer('user_id')
        table.integer('post_id')
        table.timestamps() // created_at and updated_at
    })
}

// for testing purpose
async function dropTables() {
    await Promise.all([
        db.schema.dropTableIfExists('users'),
        db.schema.dropTableIfExists('posts'),
        db.schema.dropTableIfExists('comments')
    ])

    console.log("All Tables dropped.")
}

module.exports = {
    createUserTable,
    createPostTable,
    createCommentTable,
    dropTables,
}