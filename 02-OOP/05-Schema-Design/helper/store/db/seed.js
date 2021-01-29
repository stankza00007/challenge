const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename : './lib/db/wa_store.sqlite'
    },
    useNullAsDefault: true
});

const productList = require('../data/products')

const customerList = require('../data/customers')

const orderList = require('../data/orders')

async function seeder() {
    try {
        const fs=  require('fs')
        let database = await fs.existsSync('./lib/db/wa_store.sqlite')
        if(database) {
    
            // First check all tables exist
            let [customers,products,orders] = await Promise.all([ 
                    knex.schema.hasTable('customers'), 
                    knex.schema.hasTable('products'), 
                    knex.schema.hasTable('orders') ])

            if(customers&& products && orders) {
                await knex.batchInsert('customers', customerList)
                console.log("Finished adding our customers!")
                await knex.batchInsert('products', productList)
                console.log("Finished adding our products!")
                await knex.batchInsert('orders', orderList)
                console.log("Finished creating our orders!")

            } else {
                throw Error('Looks like you forgot to make some tables')
            }
        } else {
            throw Error("Oops looks like you haven't created a db yet!")
        }

        console.log("seed complete!")

        knex.destroy()
    } catch(err) {
        console.log(err)
        knex.destroy()

    }
}

async function createTables() {
    let customers = await knex.schema.hasTable('customers')

    if(!customers) {
        await knex.schema.createTable('customers', function (table) {
            table.increments()
            table.string('firstname')
            table.string('lastname')
        })
    }

    let products = await knex.schema.hasTable('products')
    if(!products) {
        await knex.schema.createTable('products', function (table) {
            table.increments()
            table.string('name')
            table.decimal('price')
        })
    }

    let orders = await knex.schema.hasTable('orders')
    if(!orders) {
        await knex.schema.createTable('orders', function (table) {
            table.increments()
            table.string('createdAt')
            table.integer('customerId')
            table.integer('productId')
        })
    }

    knex.destroy()
}

async function getCustomer(id) {
    let customer = await knex.table('customers').where({id})
    console.log(customer)
    knex.destroy()
    return customer
}

// For fat

// 1. Run me first
// createTables()

// 2. Populate data for students
// seeder()

// 3. Test
// getCustomer(1)
