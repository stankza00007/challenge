const moment = require('moment')
const crypto = require('crypto')

const {
    db,
    Model,
    Factory
} = require('../lib/index')

const {
    User,
    Cart,
    Order,
    Profile,
    Product,
    OrderProduct
} = require('../lib/model/init')

require('../lib/factory/init')

const {
    seed,
    createUsersTable,
    createCartsTable,
    createOrdersTable,
    createProfileTable,
    createProductsTable,
    createOrderProductsTable
} = require('../lib/seeder')

const UserController = require('../lib/controller/UserController')
const OrderController = require('../lib/controller/OrderController')
const CartController = require('../lib/controller/CartController')
const ProductController = require('../lib/controller/ProductController')

const expectedUserTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    username: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    },
    password: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    }
}
const expectedProfileTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    lastname: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    },
    firstname: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    },
    gender: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    },
    dateOfBirth: {
        type: 'date',
        maxLength: null,
        nullable: true,
        defaultValue: null
    }
}
const expectedCartsTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    user_id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    product_id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    qty: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    }
}
const expectedOrdersTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    user_id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    delivery_address: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    },
    contact_no: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    }
}
const expectedProductsTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    name: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    },
    description: {
        type: 'varchar',
        maxLength: '255',
        nullable: true,
        defaultValue: null
    }
}
const expectedOrderProductsTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    order_id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    product_id: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    },
    qty: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null
    }
}

describe('Simple Online Store', () => {
    beforeAll(async () => {
        await Promise.all([
            db.schema.dropTableIfExists('order_products'),
            db.schema.dropTableIfExists('orders'),
            db.schema.dropTableIfExists('carts'),
            db.schema.dropTableIfExists('products'),
            db.schema.dropTableIfExists('users'),
            db.schema.dropTableIfExists('profiles')
        ])
    })
    describe('Tables', () => {

        describe('User Table', () => {
            test('should create a users table', async () => {
                await createUsersTable()
                let hasTable = await db.schema.hasTable('users')
                expect(hasTable).toBeTruthy()
            })
            test('should has column username', async () => {
                let columnInfo = await db.table('users').columnInfo()
                expect(columnInfo).toHaveProperty('username', expectedUserTable["username"])
            })
    
            test('should has column password', async () => {
                let columnInfo = await db.table('users').columnInfo()
                expect(columnInfo).toHaveProperty('password', expectedUserTable["password"])
            })
        })

        describe('Profile Table', () => {
            test('should create a profiles table', async () => {
                await createProfileTable()
                let hasTable = await db.schema.hasTable('profiles')
                expect(hasTable).toBeTruthy()
            })
            test('should has column firstname', async () => {
                let columnInfo = await db.table('profiles').columnInfo()
                expect(columnInfo).toHaveProperty('firstname', expectedProfileTable["firstname"])
            })
    
            test('should has column lastname', async () => {
                let columnInfo = await db.table('profiles').columnInfo()
                expect(columnInfo).toHaveProperty('lastname', expectedProfileTable["lastname"])
            })
    
            test('should has column gender', async () => {
                let columnInfo = await db.table('profiles').columnInfo()
                expect(columnInfo).toHaveProperty('gender', expectedProfileTable["gender"])
            })
    
            test('should has column dateOfBirth', async () => {
                let columnInfo = await db.table('profiles').columnInfo()
                expect(columnInfo).toHaveProperty('dateOfBirth', expectedProfileTable["dateOfBirth"])
            })
        })

        describe('Cart Table', () => {
            test('should create a carts table', async () => {
                await createCartsTable()
                let hasTable = await db.schema.hasTable('carts')
                expect(hasTable).toBeTruthy()
            })
            test('should has column user_id', async () => {
                let columnInfo = await db.table('carts').columnInfo()
                expect(columnInfo).toHaveProperty('user_id', expectedCartsTable["user_id"])
            })
            test('should has column product_id', async () => {
                let columnInfo = await db.table('carts').columnInfo()
                expect(columnInfo).toHaveProperty('product_id', expectedCartsTable["product_id"])
            })
            test('should has column qty', async () => {
                let columnInfo = await db.table('carts').columnInfo()
                expect(columnInfo).toHaveProperty('qty', expectedCartsTable["qty"])
            })
        })

        describe('Order Table', () => {
            test('should create a orders table', async () => {
                await createOrdersTable()
                let hasTable = await db.schema.hasTable('orders')
                expect(hasTable).toBeTruthy()
            })
            test('should has column user_id', async () => {
                let columnInfo = await db.table('orders').columnInfo()
                expect(columnInfo).toHaveProperty('user_id', expectedOrdersTable["user_id"])
            })
            test('should has column delivery_address', async () => {
                let columnInfo = await db.table('orders').columnInfo()
                expect(columnInfo).toHaveProperty('delivery_address', expectedOrdersTable["delivery_address"])
            })
            test('should has column contact_no', async () => {
                let columnInfo = await db.table('orders').columnInfo()
                expect(columnInfo).toHaveProperty('contact_no', expectedOrdersTable["contact_no"])
            })
        })

        describe('Product Table', () => {
            test('should create a products table', async () => {
                await createProductsTable()
                let hasTable = await db.schema.hasTable('products')
                expect(hasTable).toBeTruthy()
            })
            test('should has column name', async () => {
                let columnInfo = await db.table('products').columnInfo()
                expect(columnInfo).toHaveProperty('name', expectedProductsTable["name"])
            })
            test('should has column description', async () => {
                let columnInfo = await db.table('products').columnInfo()
                expect(columnInfo).toHaveProperty('description', expectedProductsTable["description"])
            })
        })

        describe('Order Product Table', () => {
            test('should create a order_products table', async () => {
                await createOrderProductsTable()
                let hasTable = await db.schema.hasTable('order_products')
                expect(hasTable).toBeTruthy()
            })
            test('should has column order_id', async () => {
                let columnInfo = await db.table('order_products').columnInfo()
                expect(columnInfo).toHaveProperty('order_id', expectedOrderProductsTable["order_id"])
            })
            test('should has column product_id', async () => {
                let columnInfo = await db.table('order_products').columnInfo()
                expect(columnInfo).toHaveProperty('product_id', expectedOrderProductsTable["product_id"])
            })
            test('should has column qty', async () => {
                let columnInfo = await db.table('order_products').columnInfo()
                expect(columnInfo).toHaveProperty('qty', expectedOrderProductsTable["qty"])
            })
        })
    })
    describe('Models', () => {
        describe('User', () => {
            test('should be an instance of User and inherited Model', async () => {
                let temp = new User()
                expect(temp).toBeInstanceOf(User)
                expect(temp).toBeInstanceOf(Model)
            })
            test('Should have profile', async () => {
                let user = new User()
                let profile = user.profile()
                expect(profile.$relation.primaryTable).toBe('users')
                expect(profile.$relation.foreignTable).toBe('profiles')
                expect(profile.$relation.name).toBe('HasOne')
            })
            test('Should have cart', async () => {
                let user = new User()
                let cart = user.cart()
                expect(cart.$relation.primaryTable).toBe('users')
                expect(cart.$relation.foreignTable).toBe('carts')
                expect(cart.$relation.name).toBe('HasMany')
            })
            test('Should have orders', async () => {
                let user = new User()
                let orders = user.orders()
                expect(orders.$relation.primaryTable).toBe('users')
                expect(orders.$relation.foreignTable).toBe('orders')
                expect(orders.$relation.name).toBe('HasMany')
            })
        })
        describe('Profile', () => {
            test('should be an instance of Profile and inherited Model', async () => {
                let temp = new Profile()
                expect(temp).toBeInstanceOf(Profile)
                expect(temp).toBeInstanceOf(Model)
            })
            test('should have dateOfBirth in dates', async () => {
                expect(Profile.dates).toContain('dateOfBirth')
            })
            test('should have casted dateOfBirth to YYYY-MM-DD', async () => {
                let casted = Profile.castDates('dateOfBirth', moment(new Date()))
                expect(casted).toBe(moment(new Date()).format("YYYY-MM-DD"))
            })
        })
        describe('Product', () => {
            test('should be an instance of Product and inherited Model', async () => {
                let temp = new Product()
                expect(temp).toBeInstanceOf(Product)
                expect(temp).toBeInstanceOf(Model)
            })
        })
        describe('Cart', () => {
            test('should be an instance of Cart and inherited Model', async () => {
                let temp = new Cart()
                expect(temp).toBeInstanceOf(Cart)
                expect(temp).toBeInstanceOf(Model)
            }) 
            test('Should have product', async () => {
                let cart = new Cart()
                let products = cart.product()
                expect(products.$relation.primaryTable).toBe('carts')
                expect(products.$relation.foreignTable).toBe('products')
                expect(products.$relation.name).toBe('BelongsTo')
            })
        })
        describe('Order', () => {
            test('should be an instance of Order and inherited Model', async () => {
                let temp = new Order()
                expect(temp).toBeInstanceOf(Order)
                expect(temp).toBeInstanceOf(Model)
            }) 
            test('Should have products', async () => {
                let order = new Order()
                let products = order.products()
                expect(products.$relation.primaryTable).toBe('orders')
                expect(products.$relation.foreignTable).toBe('products')
                expect(products.$relation.name).toBe('BelongsToMany')
                expect(products.$relation.pivot.withFields).toEqual(['qty'])
            })
        })
        describe('OrderProduct', () => {
            test('should be an instance of OrderProduct and inherited Model', async () => {
                let temp = new OrderProduct()
                expect(temp).toBeInstanceOf(OrderProduct)
                expect(temp).toBeInstanceOf(Model)
            })
        })
    })
    describe('Factories', () => {
        test('dummy users should be created and saved', async () => {
            let count = await User.getCount()
            await await Factory.model('model:User').createMany(5)
            count += 5
            expect(count).toBe(await User.getCount())
        })
        test('dummy products should be created and saved', async () => {
            let count = await Product.getCount()
            await await Factory.model('model:Product').createMany(5)
            count += 5
            expect(count).toBe(await Product.getCount())
        })
        test('dummy orders should be created and saved', async () => {
            let count = await Order.getCount()
            await await Factory.model('model:Order').createMany(5)
            count += 5
            expect(count).toBe(await Order.getCount())
        })
        test('dummy carts should be created and saved', async () => {
            let count = await Cart.getCount()
            await await Factory.model('model:Cart').createMany(5)
            count += 5
            expect(count).toBe(await Cart.getCount())
        })
    })
    describe('Controllers', () => {
        beforeAll(async() => {
            await seed()
        })
        describe('UserController', () => {
            test('should have class method all()', () => {
                expect(typeof UserController.all).toBe('function')
            })
            test('all() should return all users', async () => {
                let users = await UserController.all()
                expect(users.rows[0]).toBeInstanceOf(User)
            })
            test('should have class method find()', () => {
                expect(typeof UserController.find).toBe('function')
            })
            test('find() should return a user', async () => {
                let user = await UserController.find(1)
                expect(user).toBeInstanceOf(User)
            })
            test('should have class method login()', () => {
                expect(typeof UserController.login).toBe('function')
            })
            test('login() should return a user if username&password matched', async () => {
                let result = await UserController.login('testing', '123')
                expect(result.rows.length).toBeGreaterThan(0)
            })
            test('login() should return a user if username&password not match', async () => {
                let result = await UserController.login('testinga', '123')
                expect(result.rows.length).toBeLessThanOrEqual(0)
            })
        })
        describe('CartController', () => {
            test('should have class method all()', () => {
                expect(typeof CartController.all).toBe('function')
            })
            test('all() should return all carts', async () => {
                let carts = await CartController.all()
                expect(carts.rows[0]).toBeInstanceOf(Cart)
            })
            test('should have class method findByUserId()', () => {
                expect(typeof CartController.findByUserId).toBe('function')
            })
            test('should have class method create()', () => {
                expect(typeof CartController.create).toBe('function')
            })
            test('create() should add product to user\'s cart', async () => {
                await CartController.create({ userId: 6, productId: 1, qty: 10})
                await CartController.create({ userId: 6, productId: 2, qty: 5})
                let carts = await CartController.findByUserId(6)
                expect(carts.rows.length).toBe(2)
                expect(carts.rows[0].product_id).toBe(1)
                expect(carts.rows[0].qty).toBe(10)
                expect(carts.rows[1].product_id).toBe(2)
                expect(carts.rows[1].qty).toBe(5)
            })
            test('findByUserId() should return specific user\'s cart', async () => {
                let carts = await CartController.findByUserId(6)
                expect(carts.rows[0]).toBeInstanceOf(Cart)
            })
            test('should have class method clear()', () => {
                expect(typeof CartController.clear).toBe('function')
            })
            test('clear() should clear user\'s cart', async () => {
                await CartController.clear(6)

                let carts = await CartController.findByUserId(6)
                expect(carts.rows.length).toBe(0)

            })
        })
        describe('OrderController', () => {
            test('should have class method all()', () => {
                expect(typeof OrderController.all).toBe('function')
            })
            test('all() should return all orders', async () => {
                let orders = await OrderController.all()
                expect(orders.rows[0]).toBeInstanceOf(Order)
            })
            test('should have class method findByUserId()', () => {
                expect(typeof OrderController.findByUserId).toBe('function')
            })
            test('should have class method create()', () => {
                expect(typeof OrderController.create).toBe('function')
            })
            test('create() should add product to user\'s cart', async () => {
                await OrderController.create({ userId: 6, products: [{id: 1, qty: 3}, {id: 3, qty: 1}], delivery_address: "abc", contact_no: "12345678"})
                await OrderController.create({ userId: 6, products: [{id: 2, qty: 7}, {id: 1, qty: 2}], delivery_address: "abc2", contact_no: "212345678"})
                let orders = await OrderController.findByUserId(6)
                expect(orders.rows.length).toBe(2)
                expect(orders.rows[0].toJSON().user_id).toBe(6)
                expect(orders.rows[0].toJSON().delivery_address).toBe("abc")
                expect(orders.rows[0].toJSON().contact_no).toBe("12345678")
                expect(orders.rows[0].toJSON().products[0].id).toBe(1)
                expect(orders.rows[0].toJSON().products[0].pivot.qty).toBe(3)
                expect(orders.rows[0].toJSON().products[1].id).toBe(3)
                expect(orders.rows[0].toJSON().products[1].pivot.qty).toBe(1)
                expect(orders.rows[1].toJSON().user_id).toBe(6)
                expect(orders.rows[1].toJSON().delivery_address).toBe("abc2")
                expect(orders.rows[1].toJSON().contact_no).toBe("212345678")
                expect(orders.rows[1].toJSON().products[0].id).toBe(2)
                expect(orders.rows[1].toJSON().products[0].pivot.qty).toBe(7)
                expect(orders.rows[1].toJSON().products[1].id).toBe(1)
                expect(orders.rows[1].toJSON().products[1].pivot.qty).toBe(2)
            })
            test('findByUserId() should return user\'s orders', async () => {
                let orders = await OrderController.findByUserId(6)
                expect(orders.rows[0]).toBeInstanceOf(Order)
            })
        })
        describe('ProductController', () => {
            test('should have class method all()', () => {
                expect(typeof OrderController.all).toBe('function')
            })
            test('all() should return all products', async () => {
                let products = await ProductController.all()
                expect(products.rows[0]).toBeInstanceOf(Product)
            })
        })
    })
})