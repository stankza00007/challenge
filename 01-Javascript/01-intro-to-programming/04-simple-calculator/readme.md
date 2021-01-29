## Background and Objectives

We've used if..else statements for our conditionals, now let's take a look at switch cases. Whats the difference? Deciding whether to use if-then-else statements or a switch statement is based on readability and the expression that the statement is testing.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

## Specs

We want you to write a method `calculator` which takes 3 arguments and returns the value based on the operator and two values.

Example:

Our arguments are as follows: 10, '+', 30

This should return 40.

Your function should be able to support:

- Add +
- Subtract -
- Multiple *
- Division /

## Going further: Enhancements

Great we can support simple arithmetic operations, but we should make this slightly more clever. 

We want to be able to use our function `calculatorEnhanced` to be able to calculate from a user expression.

Example: '2 plus 2' 

Our `calculatorEnhanced` function should parse this and use the existing `calculator` function to return `4`

## Specs

Your function should be able to support the following:

- Add 'add'
- Substract 'minus'
- Multiple 'times'
- Division 'divide'

Don't worry about supporting more than two numbers, we will assume that we only have two numbers.

So that we can do these expressions:

'2 add 30' = 32
'30 minus 3' = 27
'3 times 9' = 27
'9 divide 3' = 3

Switch statements are great for readibility but don't offerr exactly what we're looking for. 