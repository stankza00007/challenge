## Background & Objectives
- Learn how to validate phone number using regular expression.

## Specs
- Implement a method `hongkong` that takes a `phoneno` as paramter and returns a boolean, `true` when it is a valid Hong Kong phone number.
- Implement a method `china` that takes a `phoneno` as paramter and returns a boolean, `true` when it is a valid China phone number.
- Implement a method `uk` that takes a `phoneno` as paramter and returns a boolean, `true` when it is a valid UK phone number.
- Implement a method `us` that takes a `phoneno` as paramter and returns a boolean, `true` when it is a valid USA phone number.

### Notes:
- `phoneno` may contain `area code`, your methods should be able to handle it. `e.g. +852-61234567`
- `phoneno` accepts dashed format. `e.g +852-6123-4567`.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```
- You will see:
```bash
This is a phone number validator.
1. Hong Kong
2. China
3. UK
4. USA
Select a phone number type (1-4): 1
Input your phone number: +852-6123-4567

> This is a valid Hong Kong phone number.
```

## Further Suggestions & resources
- As a developer, you will encounter a lot of data validation to ensure the data is `clean and controllable`.
- Try to implement more different area phone number validators. [FYR](https://en.wikipedia.org/wiki/Category:Telephone_numbers_by_country)