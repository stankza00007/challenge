
(async () => {
    const prompt = require('prompt-sync')();

    const VendingMachine = require("./VendingMachine")
    const Product = require("./Product")

    const chocolate = new Product("Chocolate", 20)

    const vendingMachine = new VendingMachine(chocolate, 10)
    let exit = "yes"

    let menu = `Welcome to WA Vending Machine!\n `
    console.log("=====================================")
    console.log(menu)
    do {

        let coins = prompt("Please insert coins:")
        
        coins = parseInt(coins)
        vendingMachine.insertCoin(coins)
        vendingMachine.displayMenu()

        let operation = prompt("Do you want to buy snack? ")
        
        if (operation == 'yes') {
            vendingMachine.buySnack()
            vendingMachine.displayMenu()
        }

        exit = prompt("Exit? ")

    } while (exit == 'no')

    console.log("\n\n Thank you! See you again")
})();