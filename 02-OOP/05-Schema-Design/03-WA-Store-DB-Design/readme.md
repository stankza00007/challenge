## Background & Objectives
Rachel is the owner of `WA Online Store`. She is using `spreadsheet` to manage customers' orders. She found that it is not easy to manage orders when customer base growth. She is looking for some solutions that may help her to manage customer orders more efficiently. 

## Specs
Given a `wa_store.tsv`, You are asked to:
1. Design database schema
2. Draw the schema using [SQL Designer](https://ondras.zarovi.cz/sql/demo/)
    - Save you schema in XML format to `/lib/wa_store.xml`
3. Create a database called `wa_store` using SQLite.
    - Save `wa_store.sqlite` to `/lib/db`
4. Create tables based on your schema in `wa_store` database.
5. Run `node lib/db/seed.js` to insert data to your database.

Run `npm test` to check your solution.

If we look at the tsv file, we can tell that it can be separated into at least 3 tables.

### Customers Table
1. Should have id
1. Should have a firstName
2. Should have a lastName

Customer can make more than one order.

### Products Table
1. Should have id
1. Should have a name
2. Should have a price

### Orders Table
1. Should have id
1. Should have quantity
1. Should have a createdAt timestamp
2. Belong to a customer
3. Belong to a product

A order may have more than one product,

