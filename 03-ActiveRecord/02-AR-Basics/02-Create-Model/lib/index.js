const path = require('path')
const Lucid = require('@adonisjs/lucid')

const { db, Model, Models, Factory } = Lucid({
    connection: 'sqlite',
    sqlite: {
        client: 'sqlite',
        connection: {
            filename: path.join(__dirname, '/db/ar-blog.sqlite3')
        }
    }
})

module.exports = {
    db, Model, Models, Factory
}