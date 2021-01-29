// initialize
const { User } = require('./model/init')
require('./factory/init')

const {
    createUserTable,
    dropTables
} = require('./createTables')

const { Factory } = require('./index')

async function createUsers(n) {
    let users = await Factory.model('model:User').createMany(n)
    return users
}
async function generateUsers(n) {
    let users = await Factory.model('model:User').makeMany(n)
    return users
}

async function run() {

    await dropTables()
    await createUserTable()
   
    console.log("Table created.")
    let users = await createUsers(11)

    let user = new User()

    user.username = "bangbang"
    user.password = "jim"
    user.gender = "Male"
    user.dob = new Date()

    await user.save()

    console.log("Seeded.")

}

module.exports = {
    run,
    createUsers,
}