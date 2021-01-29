## Objectives

The goal of today is to implement each one of `CRUD` operations and build a simple blog system.

We are using this [library](https://github.com/JoshuaWise/better-sqlite3) to access our SQLite database for today challenges. You may need to refer to their API Documents [here](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md) to use the library.

Sample Usage:
```js
const db = require('better-sqlite3')('foobar.db', options);

const row = db.prepare('SELECT * FROM users WHERE id=?').get(userId);
console.log(row.firstName, row.lastName, row.email);
```

In this exercise, you are going to create a `Post` class and implement methods to retrieve data from database.

Note: `DB` variable is given, so no need to do it by yourself. 

## Spec

You only need to implement `constructor`, `all`, `findById` and `destroy` methods.
Other methods (if any) are implemented for you already.

### `constructor` class method
1. Implement `constructor`to initial columns in instance variables. 2. Add relevant `getter & setter` methods. 
3. Set `likes` to zero by default if it is not provided.

For example:
```js
// Create an instance of Post Class
const postInfo = {
    id: 1, // if any
    title: "Landing page in 2hrs", 
    content: "I m landing page content haha", 
    user_id: 1,
    likes: 1 // default to 0, if not provided
}
const post = new Post(postInfo)
```

### `all` class method
Implement `all` **class** method to retrieve all posts data from database.

### `findById` class method
Implement `findById` **class** method accept `id` parameter to retrieve specific post data from database.

### `destroy` instance method
Implement `destroy` **instance** method to delete a post in database.

**Note**: We want you to protect the `findById` method against `SQL injections`. What is an SQL injection you may ask? Well, if you [hack this bank](https://www.hacksplaining.com/exercises/sql-injection#/start), you'll get the picture!. Here's a hint on the exercise: You might need to use `prepare` statement.

### Further Suggestion
An `SQL injection` is a type of attack where the person using your application won't just pass a regular integer id to the find method, but will add an `evil string` to damage your data. If you look at the SQL query in the spec, you'll see what we mean.

`Never trust user data!`
