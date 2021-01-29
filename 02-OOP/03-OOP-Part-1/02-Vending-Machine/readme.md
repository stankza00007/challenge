## Background & Objectives
In this exercise, you are going to create a simple vending machine which only sell one item.
- As a user, I can insert coins.
- As a user, I can buy a snack.
- As a user, I can see the menu of vending machine.
- As a user, I can see the total amount of coin inserted.

## Specs

### `Product`
1. Create a `Product` class that accepts `name` and `price` as initiate variables.
2. Implement `getter` and `setter` methods.

### `VendingMachine`
1. Create a `VendingMachine` class that takes `product` and `qty` as initial variable and set `totalAmount` and `insertAmount` as zero.
2. Implement `insertCoin` method that takes `amount` as parameter.
3. Implemnt `buySnack` method.
    1. Checks if the inserted amount is enough to buy a snack.
    2. Checks if snack quantity > 0.
    3. Calculate the total amount earned.
    4. Deduct insert amount by product price.
4. Implement `displayMenu` method to display selling product and inserted amount.

### Interactive Program
- Once all your methods done, we want to use it in `lib/interface.js` which runs a command line tool. To launch this program, just run this in your terminal:

```bash
node lib/interface.js
```

- You'll see that your program returns a list of operations. 
```
Welcome to WA Vending Machine!
Please insert coins: 200

#1 - Chocolate, $20, 10
Inserted Amount: 200

Do you want to buy snack? yes
> Snack dropped.

#1 - Chocolate, $20, 9
Inserted Amount: 180

Thank you! See you again!
```

## Further Suggestions & resources
1. Try to modify `VendingMachine` class so it can sell more products.
2. [`Mozilla OOP Tutorial`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)