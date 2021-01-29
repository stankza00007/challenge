const {
    db, Factory
} = require('./index')

require('./factory/init')

const { User, Profile, Cart, Product, Order } = require('./model/init')

async function createUsersTable() {
    return db.schema.createTable('users', function (table) {
      
    })
}

async function createProfileTable() {
    
}

async function createCartsTable() {
    
}

async function createOrdersTable() {
   
}

async function createProductsTable() {
    
}

async function createOrderProductsTable() {
   
}

async function seed() {
    await createTables()

    let users = await Factory.model('model:User').createMany(5)
    let products = await Factory.model('model:Product').createMany(5)
    let orders = await Factory.model('model:Order').createMany(5)
    let carts = await Factory.model('model:Cart').createMany(5)

    for(let i = 0; i < orders.length; i++) {
        let order = orders[i]
        await order.products().save(products[i], row => {
            row.qty = 1
        })
    }

    for(let i = 0; i < users.length; i++) {
        let user = users[i]
        let profile = await Factory.model('model:Profile').make()
        await user.profile().save(profile)
        await user.orders().save(orders[i])
        await user.cart().save(carts[i])
    }

    for(let i = 0; i < carts.length; i++) {
        let cart = carts[i]
        await cart.product().associate(products[i])
    }

    let customer = new User()
    let profile = await Factory.model('model:Profile').make()

    customer.username = "testing"
    customer.password = "123"

    await customer.profile().save(profile)

    console.log("Seed Done.")

}

async function createTables() {
    await Promise.all([
        db.schema.dropTableIfExists('order_products'),
        db.schema.dropTableIfExists('orders'),
        db.schema.dropTableIfExists('carts'),
        db.schema.dropTableIfExists('products'),
        db.schema.dropTableIfExists('users'),
        db.schema.dropTableIfExists('profiles'),
    ])
    await Promise.all([
        createUsersTable(),
        createProfileTable(),
        createCartsTable(),
        createOrdersTable(),
        createProductsTable(),
        createOrderProductsTable()
    ])
}

module.exports = {
    seed,
    createUsersTable,
    createProfileTable,
    createCartsTable,
    createOrdersTable,
    createProductsTable,
    createOrderProductsTable
}