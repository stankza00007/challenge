## Background & Objectives

- In real world, developers always need to deal with a series of operations which are reuired to be done `in order`. e.g. Transactions
- Learn why do we should always void `nested callbacks`.
- Try to enhance the `readability` of the provided codes.

## Specs
In this exercise, you are given a `Books` program, which is implemented using `nested callbacks` approach by a junior programer, Simon. Your boss, Nathan asked you to review and try to improve his codes. The `Books` program performs a series of operations to get book author and details: 
1. Get Book record by `Id`
2. Get Book Author
3. Get Book Cover
4. Print out Book details.

You should reorganize his code into 4 functions:
1. `getBookById`
2. `getAuthor`
3. `getCover`
4. `printDetails`

Also, Pleases complete `getDetailsPromise` and `getDetailsAsync` functions.

### Approach 1: Promise
Try to rewrite the logic using `Promise` approach.

```javascript

promiseFunction.then(result => {
    // promise resolved...
}).catch(error => {
    // promise rejected...
}).finally(_ => {
    // promise settled...
})

```

### Approach 2: Async/Await
Try to enhance the code using `Async/Await` approach.

```javascript
try {
    // wait for promise resolved...
    let result = await promiseFunction()
} catch (error) {
    // promise rejected, error thrown...
}

```

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```

- You'll see that your program returns a list of operations. 
```bash

Books:
1. 
2.
3. 
4. 
5. 

Please select a book: 1

Book Title:
Book Author:
Book Cover:
Book No. of pages: 

```
- User can get book details by input a number. 

## Further Suggestions & resources
- You may find that some operations `do not really need to wait` other operations complete before taking actions. e.g. getting author and cover photo can be done in parallel. Try to speed up the performance using `Promise.all`. Click [here](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/how-to-join-promises) to learn how to use `Promise.all`.

## Key learning points
- How to improve `nested callbacks`
- Transform `nested callbacks` to `Promise` approach
- Further enhance the `readability` using `Async/Await`