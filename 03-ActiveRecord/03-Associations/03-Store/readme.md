## Objectives

To apply everything you have learnt and put it all together to make a simple application.

## Spec

In this exercise, you are building a `simple online store`. You can find the database schema [here](https://firebasestorage.googleapis.com/v0/b/temp-392a5.appspot.com/o/wa%2FScreenshot%202019-07-30%20at%202.16.36%20PM.png?alt=media&token=67e9409b-65cf-48d5-bfaa-b5a3b091d218).

It is a simple store that customer can:
1. `Login` to the store.
1. `Browse` all products in the store
2. `Add product` to shopping `cart`.
3. Place an `order`
4. Browse `order history`

```bash
Hello, Welcome back!

Please enter your username: testing
Please enter your password: 123

Login Success!
Welcome back, testing!

1. Browser Products
2. Add to Cart
3. My Cart
4. My Order
Select an option: 4

=========================================
Order Date: 2019-07-30 00:47:03
Delivery Address: some address, Contact No.: 12345678
Ordered Items:
Product Id: 5, Name: Crane, Qty: 2
Product Id: 4, Name: Terrible Claw Lobster, Qty: 3
=========================================

1. Browser Products
2. Add to Cart
3. My Cart
4. My Order
Select an option:
```
In order to build a system like this, you have to: 
1. Create `tables` based on the schema
2. Create `models` for `tables` using `Lucid model`
3. Create `factories` for `models` to generate initial set of data.
4. Create `controllers` to handle some logics, e.g. 
    - `login`
    - `browse products`
    - `add to cart` 
    - `browse cart items`
    - `place order`
    - `browse order history`
5. Generate dummy data
6. Create `interface` to interact with the user

### Create `Tables`
In `lib/seeder.js`:
1. Implement `createUsersTable()` function to create `users` table.
1. Implement `createProfileTable()` function to create `profiles` table.
1. Implement `createCartsTable()` function to create `carts` table.
1. Implement `createOrdersTable()` function to create `orders` table.
1. Implement `createProductsTable()` function to create `products` table.
1. Implement `createOrderProductsTables()` function to create `order_products` table.

### Create `Models`
In `lib/model` directory:
1. Create `User.js` and implement `User` model.
    - Create a `beforeCreate` hook to `hash the password` before saving it to database.
    - Hide `password` field
    - Create relationships between `Cart`, `Order` and `Profile` models
        1. A `user` has a `profile`
        2. A `user` has many `order`
        3. A `user` has many item in `cart`
    - Don't forget to add your `User` model to `Models`
1. Create `Profile.js` and implement `Profile` model.
    - Let Lucid model `handle` the date field `dateOfBirth` for you
    - Display `dateOfBirth` in `YYYY-MM-DD` format 
    - Create relationship between `User` model
        1. A `profile` belongs to a `user`
    - Don't forget to add your `Profile` model to `Models`
1. Create `Product.js` and implement `Product` model.
    - Don't forget to add your `Product` model to `Models`
1. Create `Order.js` and implement `Order` model.
    - Create relationship between `Product` model
        1. A `order` has many products
        2. A `product` belongs to many `order`
    - Remember to return `qty` as pivot field
    - [read this](https://adonisjs.com/docs/4.1/relationships#_belongs_to_manys)
    - Don't forget to add your `Order` model to `Models`
1. Create `OrderProduct.js` and implement `OrderProduct` model.
    - Don't forget to add your `OrderProduct` model to `Models`
1. Create `Cart.js` and implement `Cart` model.
    - Create relationship between `Product` model
        1. A `cart` has many products item
        2. A `product` belongs to many `cart`
    - Don't forget to add your `Cart` model to `Models`

**Hints**: *Forget how to define relationship in model?* check [here](https://adonisjs.com/docs/4.1/relationships#_basic_example)


### Create `Factories`
In `lib/factory`:
1. Create `user.js` factory to generate dummy `User`
1. Create `profile.js` factory to generate dummy `Profile`
1. Create `product.js` factory to generate dummy `Product`
1. Create `order.js` factory to generate dummy `Order`
1. Create `cart.js` factory to generate dummy `Cart`

### Create `Controllers`
In `lib/controller`
1. Create `UserController.js` and implement the functions:
    - `all` class method to return all user records
    - `find` class method that accepts `id` to return a specific user record
    - `login` class method that accepts `username` and `password` to `authenticate` user identity and return user if found
1. Create `ProductController.js` and implement the functions:
    - `all` class method to return all product records
1. Create `OrderController.js` and implement the functions:
    - `all` class method to return all product records
    - `findByUserId` class method that accepts `id` to return a specific user orders
    - `create` class method that accepts `orderInfo` to create an order and save to database
        - `orderInfo` contains:
            1. userId
            2. products object, which is an array of *product id and qty* object
            3. delivery_address
            4. contact_no
1. Create `CartController.js` and implement the functions:
    - `all` class method to return all cart records
    - `findByUserId` class method that accepts `id` to return a specific user cart with products details
    - `create` class method that accepts `cartInfo` to add a product in user cart and save to database
        - `cartInfo` contains:
            1. userId
            2. productId
            3. qty

### Generate Dummy data
Run `node lib/seedDatabase.js` to feed dummy data into our database.

### Run Application
Run `node lib/interface.js` to start the application.
After running `node lib/interface.js`, you are prompted to login first:
1. username: testing
2. password: 123

Now, you can:
- `browse products`
- `add to cart` 
- `browse cart items`
- `place order`
- `browse order history`


