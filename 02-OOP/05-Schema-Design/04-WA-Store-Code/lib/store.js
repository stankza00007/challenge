const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename : __dirname + '/db/wa_store.sqlite'
    },
    useNullAsDefault: true
});

/////////////////////////////////////////////////////////
async function reader(result) {
  const sqlite = require('sqlite') // import library
  // connect to our databse
  const dbPromise = sqlite.open(__dirname + '/db/wa_store.sqlite', { Promise });
  const db = await dbPromise;
  const tool = await db.all(result)

  return tool
}
////////////////////////////////////////////////////////


async function countCustomers() {
  const sqlite = require('sqlite') // import library

    // connect to our databse
    const dbPromise = sqlite.open(__dirname + '/db/wa_store.sqlite', { Promise });
    const db = await dbPromise;

    // make SQL query
    return (await db.all('SELECT * FROM customers')).length
}

async function countOrders() {
  const sqlite = require('sqlite') // import library

    // connect to our databse
    const dbPromise = sqlite.open(__dirname + '/db/wa_store.sqlite', { Promise });
    const db = await dbPromise;

    // make SQL query
    return (await db.all('SELECT * FROM orders')).length
}

async function countProducts() {
  const sqlite = require('sqlite') // import library

    // connect to our databse
    const dbPromise = sqlite.open(__dirname + '/db/wa_store.sqlite', { Promise });
    const db = await dbPromise;

    // make SQL query
    return (await db.all('SELECT * FROM products')).length
}

async function loyalCustomers() {
  const sqlite = require('sqlite') // import library

    // connect to our databse
    const dbPromise = sqlite.open(__dirname + '/db/wa_store.sqlite', { Promise });
    const db = await dbPromise;

    // make SQL query
    return (await db.all('SELECT * FROM orders ORDER BY customersId'))
}

async function hotSaleItem() {
}

module.exports = {
    countCustomers,
    countOrders,
    countProducts,
    loyalCustomers,
    hotSaleItem,
}