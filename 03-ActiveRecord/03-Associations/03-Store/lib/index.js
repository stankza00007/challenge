const path = require('path')
const Lucid = require('./lucid.standalone.index')

const { db, Model, Models, Factory } = Lucid({
    connection: 'sqlite',
    sqlite: {
        client: 'sqlite',
        connection: {
            filename: path.join(__dirname, '/db/ar-store.sqlite3')
        }
    }
})

module.exports = {
    db, Model, Models, Factory
}