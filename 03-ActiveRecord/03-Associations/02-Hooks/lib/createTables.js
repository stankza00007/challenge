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
    dropTables,
}