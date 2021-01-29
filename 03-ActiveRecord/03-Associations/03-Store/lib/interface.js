(async () => {
    const prompt = require('prompt-sync')();
    const crypto = require('crypto')



    // Initialize
    const UserController = require('./controller/UserController')
    const ProductController = require('./controller/ProductController')
    const CartController = require('./controller/CartController')
    const OrderController = require('./controller/OrderController')

    console.log("Hello, Welcome back!\n")
    let success = false
    let user
    do {
        let username = prompt("Please enter your username: ")
        let password = prompt("Please enter your password: ")


        user = await UserController.login(username, password)

        success = user.rows.length > 0

        if (!success) {
            console.log("\nLogin Failed!")
            console.log("Message: Invalid username/password.\n")
        } else {
            user = user.rows[0]
            console.log("\nLogin Success!")
            console.log(`Welcome back, ${user.username}!\n`)
        }

    } while (!success)

    let operation

    do {

        console.log(`1. Browser Products\n2. Add to Cart\n3. My Cart\n4. My Order`)

        operation = prompt('Select an option: ')

        switch(operation) {
            case "1": {
                await browserProducts()
                break
            }
            case "2": {
                await addToCart()
                break
            }
            case "3": {
                await myCart()
                break
            }
            case "4": {
                await myOrder()
                break
            }
        }

    } while (operation != 'exit')

    async function browserProducts() {
        let products = await ProductController.all()
        products.rows.forEach(product => {
            product = product.toJSON()
            console.log(`\nProduct Id: ${product.id}`)
            console.log(`Name: ${product.name}`)
            console.log(`Description: ${product.description}`)  
        })

    }

    async function addToCart() {
        let productId = prompt("Please enter product Id ")
        let qty = prompt("Please enter qty: ")

        await CartController.create({
            userId: user.id, 
            productId, 
            qty
        })

    }

    async function myCart() {
        let result = await CartController.findByUserId(user.id)
        console.log("\nCart:")
        let items = result.rows
        let products = []
        if (items.length) {
            items.forEach(item => {
                item = item.toJSON()
                let product = item.product
                console.log(`Product Id: ${product.id}, Name: ${product.name}, Qty: ${item.qty}`)
                products.push({
                    id: product.id,
                    qty: item.qty
                })
            })
        } else {
            console.log(`No item in cart.`)
        }
        console.log()
        console.log(`1. Main Menu\n2. Checkout`)
        let cartOperation = prompt('Select an option: ')
        if (cartOperation == '2') {
            if (products.length) {
                let confirm = prompt('Confirm? (yes/no)')
                if (confirm == 'yes') {
                    let delivery_address = prompt('Please enter delivery address:')
                    let contact_no = prompt('Please enter contact number:')

                    // Create order
                    await OrderController.create({
                        delivery_address,
                        contact_no,
                        products,
                        userId: user.id
                    })
                    // Clear cart
                    await CartController.clear(user.id)
                    console.log(`\nOrder created.\n`)
                }
            } else {
                console.log("\nNo item to checkout.\n")
            }
        }
    }

    async function myOrder() {
        let result = await OrderController.findByUserId(user.id)
        let orders = result.rows
        console.log()
        if (orders.length) {

            orders.forEach(order => {
                order = order.toJSON()
                console.log(`=========================================`)
                console.log(`Order Date: ${order.created_at}`)
                console.log(`Delivery Address: ${order.delivery_address}, Contact No.: ${order.contact_no}`)
                console.log(`Ordered Items:`)
                order.products.forEach(p => {
                    console.log(`Product Id: ${p.id}, Name: ${p.name}, Qty: ${p.pivot.qty}`)
                })
                console.log(`=========================================\n`)

            })

        } else {
            console.log(`No order found.`)
        }
    }

    process.exit(0)
})()