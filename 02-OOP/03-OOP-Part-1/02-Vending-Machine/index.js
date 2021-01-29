const VendingMachine = require("./lib/VendingMachine")
const Product = require("./lib/Product")

const chocolate = new Product("Chocolate", 20)

const vendingMachine = new VendingMachine(chocolate, 10)

vendingMachine.displayMenu()
console.log("============================")
vendingMachine.insertCoin(30)
vendingMachine.displayMenu()
console.log("============================")

vendingMachine.buySnack()
vendingMachine.displayMenu()
console.log("============================")

vendingMachine.buySnack()
vendingMachine.displayMenu()
console.log("============================")
