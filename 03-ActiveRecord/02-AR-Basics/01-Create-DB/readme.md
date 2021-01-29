## Objectives

In this exercise, you will learn how to use Lucid model's to create database and tables.

Make sure you have lucid model installed first, also make sure you're in the root of `whiteboard-challenges`.

``` bash
npm install @adonisjs/lucid
```

Lucid is the `AdonisJS` implementation of the [active record pattern](https://en.wikipedia.org/wiki/Active_record_pattern), which is built on top of [knexjs](http://knexjs.org/).

All we need to know for now is the Active Record Pattern allows us to design and query our models much easier than standalone SQL queries.

## Spec
The goal of this exercise is focused on creating a table (no model yet!). 

After this exercises we should end up with 3 tables. 
1. `users` table
2. `posts` table
3. `comments` table

Remember to look aat schema building!
[Schema Building](https://knexjs.org/#Schema-Building)

Hints: 
``` js
db.schema.createTable('users', function (table) {
    table.increments() // add id field as primary key and auto increment
    // define other fields here...
    table.timestamps()// tadd created_at and updated_at fields
})
// This will return a promise
```

**Note**: `db` is given, so that you don't need to do it yourself.

Implement all functions in `createTable.js`.

### `users` table
Complete `createUserTable()` to create `users` table.

Your `users` table should have the following items:
- `id` should be an `integer`, `primary key` and should `auto increment`.
- `username` should be an `string` not `null`
- `gender` should be an `string`, not `null`
- `dob` should be an `date`, not `null`

### `posts` table
Complete `createPostTable()` to create `posts` table.

Your `posts` table should have the following items:
- `id` should be an `integer`, `primary key` and should `auto increment`.
- `title` should be an `string`, not `null`
- `content` should be an `string`, not `null`
- `likes` should be an `integer`, not `null` and default to zero.
- `user_id` should be an `integer`, not `null`

### `comments` table
Complete `createCommentTable()` to create `comments` table.

Your `comments` table should have the following items:
- `id` should be an `integer`, `primary key` and should `auto increment`.
- `comment` should be an `string`, not `null`
- `date` should be an `datetime`, not `null`
- `post_id` should be an `integer`, not `null`
- `user_id` should be an `integer`, not `null`










## Still a bit stuck?

Because we are using `Knex` we'll need to abide by their schema building rules.

A typical users table may look something like this. 
Here we are initialising a new table by calling the `createTable` function and passing it a name `users`.
Inside the callback we are given a `table` which is where we will define our `users` columns.

```javascript
db.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
})
```

This specific table is saying:

1. `table.increments` - Include incremental ID (so we don't need to create our own)
2. `table.string('name')` - Include a name column
3. `table.timestamps()` - Include createdAt and updatedAt timestamps for our table


For more information look below!
[Schema Building](https://knexjs.org/#Schema-Building).




