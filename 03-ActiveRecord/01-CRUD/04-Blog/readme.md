## Objectives

The goal of today is to implement each one of `CRUD` operations and build a simple blog system.

We are using this [library](https://github.com/JoshuaWise/better-sqlite3) to access our SQLite database for today challenges. You may need to refer to their API Documents [here](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md) to use the library.

Sample Usage:
```js
const db = require('better-sqlite3')('foobar.db', options);

const row = db.prepare('SELECT * FROM users WHERE id=?').get(userId);
console.log(row.firstName, row.lastName, row.email);
```

In this exercise, you are going to build a simple blog system based on the classes (`User`, `Post`, `Comment`) we had created.

Note: `DB` variable is given, so no need to do it by yourself. 

## Spec

1. You need to complete `constructor`, `all`, `findById`,  `destroy` and `save` methods for `all` classes.
2. You can just copy and paste your implementations in previous challenges.
2. Other methods (if any) are implemented for you already.

### `User` class
1. Implement `destroy` **instance** method to delete a user in database.
2. Implement `save` **instance** method to create/update a user record in database.
    1. This function has 2 abilities, to create a new record `or` to update a existing record.
    2. You should implement the logic to distingush which action should be taken.

### `Post` class
1. Implement `save` **instance** method to create/update a post record in database.
    1. This function has 2 abilities, to create a new record `or` to update a existing record.
    2. You should implement the logic to distingush which action should be taken.
2. Implement `findByUserId` **class** method that accept `userId` to retrieve all posts that created by specific user.

### `Comment` class
1. Implement `findByPostId` **class** method that accept `postId` to retrieve all comments of specific post.
1. Implement `deleteByPostId` **class** method that accept `postId` to delete all comments of specific post.

**Note**: We want you to protect the program against `SQL injections`. What is an SQL injection you may ask? Well, if you [hack this bank](https://www.hacksplaining.com/exercises/sql-injection#/start), you'll get the picture!. Here's a hint on the exercise: You might need to use `prepare` statement.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```

- You'll see that your program returns a list of operations. 
- Type `exit` to quit the program.
```bash
Enter user Id:2


Welcome back jcastiglio1!


1. Browse All Posts
2. Browse Post By Id
3. Browse My Posts
4. Create Posts
5. Delete Post
Select an option (exit): 
```

### Further Suggestion
An `SQL injection` is a type of attack where the person using your application won't just pass a regular integer id to the find method, but will add an `evil string` to damage your data. If you look at the SQL query in the spec, you'll see what we mean.

`Never trust user data!`
