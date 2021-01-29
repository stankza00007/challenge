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
                throw Error('Looks like you forgot to make some tables or missing fields or incorrect data type.')
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

seeder()
