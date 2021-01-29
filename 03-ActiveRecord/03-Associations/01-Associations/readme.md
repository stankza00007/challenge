## Objectives

We have created User, Post and Comment classes in previous challenges. In this exercise, you have to create relationships between classes.

## Spec

You have 3 things to do:
1. Define relationships in models.
2. Create dummy data based on model's relationships.
3. Make join table queries

### Define Relationships
Create relationships based on the following:

**`User` model**
1. A user can create many posts.
2. A user can leave many comments in different posts.

**`Post` model**
1. A post is created by a user.
2. A post may have many comments.

**`Comment` model**
1. A comment belongs to a post.
2. A comment is written by a user.

### Database Seeding
Factories are given, complete `lib/seed.js`:
1. Implement `generatePostsForUser` that accepts `user` object and `n` as parameter to generate n dummy posts for a user.
2. Implement `generateCommentsForUserPost`  that accepts `post` object, `user` object and `n` as parameter to generate n dummy comments.

You may use `node lib/seed.js` to create dummy data, but is not needed to pass the test.

### Join Tables Queries
`lib/query.js`
1. Implement `getUserPostsByUserId` that take `userId` as parameter to retrieve user's post from database.
    1. Your function should return an array of object
    2. For each item in array, should contains `posts` property
2. Implement `getUserCommentsByUserId` that take `userId` as parameter to retrieve user's comments from database.
    1. Your function should return an array of object
    2. For each item in array, should contains `comments` property
3. Implement `getPostsWithComments` to retrieve all posts with comments.
    1. Your function should return an array of object
    2. For each item in array, should contains properties:
    - `user`, author of the post
    - `comments`, an array of object, for each item should contains:
        1. `user`, author of the comment
