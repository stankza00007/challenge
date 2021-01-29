## Objectives

Now our tables and models are ready, it's time to implement the logic of our application. **Oh, Wait!** How do you test if your database works, if you don't have any data? To do this, we need to `create a bunch of data` that we can use to bootstrap our database. It's called a `seed`.

Seeding a database is `a process` in which an `initial set of data is provided` to a database when it is being installed .

## Spec

In this exercise, you have to:
1. Define `Factory Blueprint`
2. Create `dummy data` using Model Factory

### Create Factory
Factories define data structures `(blueprints)` used to generate dummy data.

1. User Factory, - Implement factory in `/lib/factory/user.js`
2. Post Factory, - Implement factory in `/lib/factory/post.js`
    1. Make sure that user_id exists. e.g. you create 5 users, the available user id range should be 1-5.
3. Comment Factory, - Implement factory in `/lib/factory/comment.js`
    1. Make sure that user_id exists. e.g. you create 5 users, the available user id range should be 1-5.
    1. Make sure that post_id exists. e.g. you create 5 posts, the available post id range should be 1-5.

**Note**: Reference to [Chance](https://chancejs.com/) to generate fake data. You should pick the most relevant fake data.

### Seed Database
After defining factory, we can now use it to `generate` data.


### Specs
In `lib/seed.js`


1. Implement `generateUser()` that generates a user `without saving` it to the database 
2. Implement `generateUsers()` that accepts `n` as an parameter and generate `n` number of users `without saving` to database

### Why don't we save?
Our generateUser/generateUsers function is simply there to generate a dummy user, we have our functions below to save.

### Remember DRY!

1. Implement `createUser()` that generates a user and `saves` to the database
2. Implement `createUsers()` that accepts `n` as parameter and generates `n` number of users and `saves` to the database


1. Implement `generatePost()` that generates a post `without saving` to database
2. Implement `generatePosts()` that accept `n` as parameter and generate `n` number of posts `without saving` to the database


1. Implement `createPost()` that generates a post and `saves` to the database
2. Implement `createPosts()` that accept `n` as parameter and generate `n` number of posts and `saves` to the database


1. Implement `generateComment()` that generates a comment `without saving` to the database
2. Implement `generateComments()` that accept `n` as parameter and generate `n` number of comments `without saving` to the database



1. Implement `createComment()` that generates a comment and `saves` to the database
2. Implement `createComments()` that accept `n` as parameter and generate `n` number of comments and `saves` to the database


## Further Suggestions
(Optional)
You can try to rewrite the `04-Blog` in Day1 using Lucid Model and write your own `interface.js`.

#DO it.