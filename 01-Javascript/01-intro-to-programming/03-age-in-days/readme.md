## Background & Objectives

- Get familiar with requiring external scripts and calling functions from them
- **Fully** understand the concepts of [variables](http://en.wikipedia.org/wiki/Program_variable), variable assignation, method definition and method calls.

## Specs

### Compute the age

- Complete the method `ageInDays` defined in the `lib/ageInDays.js` file. This method takes 3 arguments (`day`, `month` and `year`) and should return a `Integer` which is your age in days (the number of days you've lived on planet Earth).

### Interactive Program

- Once your method `ageInDays` is correct, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```

You'll see that your program says you are `0 years old`. You must change the code so that the program uses your `ageInDays` method. 

note: You may need to alter the code in the `interface.js` line 25!


## Further suggestions & resources

- You may want to use the [Date class]
- Use the interactive nodejs console to experiment.
- As you can see from the given code, JacaScript uses the `console.log` method to output values (show you things!) to the terminal.

## Key learning points

The following questions may seem obvious to most of you, **but make 100% sure you can precisely answer all of them**. Variables and methods are the cornerstones of javascript programming, and you should have an in-depth understanding of these concepts.

### On variables

- What is a variable? What are the different variables in your program?
- What does "defining a variable" mean? What's the syntax to define a variable?
- Can we use a variable that has not been defined?
- Can we assign a new value to a variable already defined? How?
- Are you able to describe with the right words **exactly** what we do in these two lines of code below?

```javascript
let someNumber = 1
someNumber = someNumber * 2
```

- What's the proper convention for naming variables in javascript (you can google the answer)?

### On functions

- What is a function? What are the functions in your program?
- What's the difference between defining a method and calling a method?
- Where do we define functions in this program? Where do we call them?
- What's the return value of a method?
- What is the simple javascript convention for a method's return?
