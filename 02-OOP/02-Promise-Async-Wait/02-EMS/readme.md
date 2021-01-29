## Background & Objectives

Jimmy is a CTO of WA Ltd. He wants to make a `Employee Management System (EMS)` to manage employees more efficiently. The new system should be able to:

- As a user, I should be able to browse all employee records.
- As a user, I should be able to get an employee details.
- As a user, I should be able to create new employee record.
- As a user, I should be able to update an employee record.
- As a user, I should be able to delete an employee record.

## Specs
In this exercise, you have to implement 5 functions to archieve the above requirements using [this API endpoint](http://dummy.restapiexample.com/). You are free to use `callback`, `promise` or `async/await` approach to implement your logic.

- Implement `getAll` method to `retrieve all` employee records.
- Implement `get` method to `retrieve` employee record by `id`.
- Implement `create` method to `create` new employee record.
- Implement `update` method to `update` an employee record.
- Implement `destroy` method to `delete` an employee record.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```

- You'll see that your program returns a list of operations. 
```bash
1. Get All employees
2. Get employee by id
3. Create new employee
4. Update employee record
5. Delete employee record

Please select an option: 
```
- User can select one of the available operations by input a number. 

## Further Suggestions & resources
- Try to use all `3 different approaches` to implement your functions.
- Master you `async` skills [here](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript)

## Key learning points
- How to implement `asynchronous` function in javascript.