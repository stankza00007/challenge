## Objectives

We have learnt about how to create tables using Lucid model, lets create `models` to manipulate the database.

https://adonisjs.com/docs/4.0/lucid 

## Spec
The goal of this exercise is to focus on how to create a `Model` for our tables in the database. 
We will create 3 models 
1. `User`,
2. `Post`
3. `Comment`

As convention, the model name should be `singular` and `start with a capital letter`, while table names should be `plural` and `lowercase`

e.g. `User` model is mapped to the `users` table.

**Note**: `db` is given, so that you don't need to do it 


For each of our models we should have the following: 

### `User` model
1. For `lib/model/User.js` create a `User` model.
2. Tell Lucid `which field(s) is/are date`, let Lucid handle date for you.
3. Cast `dob` to `YYYY-MM-DD` before display it to user
4. Remember to add your model to `Models`

### `Post` model
1. For `lib/model/Post.js` create a `Post` model.
2. Remember to add your model to `Models`

### `Comment` model
1. For `lib/model/Post.js` create a `Post` model.
2. Tell Lucid `which field(s) is/are date`, let Lucid handle date for you.
3. Cast `date` to `value from now` before display it to user
5. Remember to add your model to `Models`


The great thing with models is now we can make cleaner queries!

### Use model to execute queries
1. For `lib/controller/User.js`
2. Implement `index` method to return all users.
3. Implement `store` method that accepts an `userInfo` object to create a new user.
4. Implement `show` method that accepts an `id` to return specific user details.
5. Implement `update` method that accepts an `id` and `userInfo` to update a user.
6. Implement `delete` method that accepts an `id` to delete a user.

## Key Learning Points
1. Can you see how much better it is to use ActiveRecord than writing all the SQL yourself?
2. Do you know what is [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)? We have implemented MVC in this challenge, can you identify MVC components?