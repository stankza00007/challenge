## Objectives

We want to add one more field `password` in `users` table, so that you need to provide password to log in first before submitting a new post.

## Spec

### Create `User` Table
In order to add `password` field to `users` table, we need to modify `createUserTable` in `createTables.js`.
1. Add `password` as `string`, not null
2. Run `node lib/createTables.js` to create new `user` table.

### `User` model
Update `lib/model/User.js` model, so that our class can handle `password` field.

**Note**: We will never saved user's password as plain text. We have to hash the password before it store to the database.
1. Add a `beforeCreate` hook to the model, so it can hash the password before it save to database.
2. Hide `password` field, so `password` will not included in query result.

### `User` Factory
Update `lib/factory/user.js` factory, so that we can generate dummy data based on the new `users` schema.
1. Add `password` to the blueprint.

### Generate `User`
Now, we can use `User` factory to generate fake users in our database.
1. Run `node lib/seedDatabase.js` to seed our database

### Login interface

In `lib/interface.js`, implement the login interface.
1. After getting user password, you have to hash it into ciphertext.
2. Use the hashed password to perform query.

Run `node lib/interface.js`, The interface should be like:

```
Hello, Welcome back!

Please enter your username: bangbang
Please enter your password: 123

Login Failed!
Message: Invalid username/password.

Please enter your username: bangbang
Please enter your password: jim

Login Success!
Welcome back, bangbang!
```
