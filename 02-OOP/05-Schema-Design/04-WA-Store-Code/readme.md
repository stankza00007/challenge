## Background & Objectives
Rachel found that your solution is the best one to her online store. She has adopted your database idea into her online store system. She is happy with her new system now. She want to do some analysis based on the data stored in the database. She want to know:
1. How many customers does her store has?
2. How many orders does her store has?
3. How many product does her store has? 
4. Find all the customers that have ordered twice or more.
5. Which product is the hot sale item?
6. `(Optional)` What is the average order amount? [Sub query](http://www.sqlitetutorial.net/sqlite-subquery/)

## Using sqlite in Nodejs
```bash
npm install sqlite --save
```

Sample Usage
```javascript
(async() => {
    const sqlite = require('sqlite') // import library

    // connect to our databse
    const dbPromise = sqlite.open(__dirname + '/db/wa_store.sqlite', { Promise });
    const db = await dbPromise;

    // make SQL query
    console.log(await db.all('SELECT * FROM customers'))
})()
```

More usage details [here](https://www.npmjs.com/package/sqlite)


## Specs

In this exercise, given `wa_store.sqlite`, you have to implement 5 functions:

1. Implement `countCustomer` method to return total number of unique customers.
2. Implement `countOrder` method to return total number of unique orders.
3. Implement `countProduct` method to return total number of unique products.
4. Implement `loyalCustomers` method to return customers that have ordered twice or more.
6. Implement `hotSaleItem` method to return the hot sale item.

This is optional, if you have time:
1. Implement `averageOrderAmount` method to return avergae order amount.

