const Product = require("../lib/Product")
const VendingMachine = require("../lib/VendingMachine")
let p = new Product("Chocolate", 100)
let vm = new VendingMachine(p, 100)

describe('Proudct', () => {
    test('should return an instance of Product', () => {
        expect(p instanceof Product).toBeTruthy()
    })
    test('should return product name', () => {
        expect(p.getName()).toBe("Chocolate")
    })
    test('should return price', () => {
        expect(p.getPrice()).toBe(100)
    })
    test('should set product name to Chocolate Bar', () => {
        p.setName("Chocolate Bar")
        expect(p.getName()).toBe("Chocolate Bar")
    })
    test('should set price to 110', () => {
        p.setPrice(110)
        expect(p.getPrice()).toBe(110)
    })
})

describe('Vending Machine', () => {
    test('should retrun an instance of Vending Machine', () => {
        expect(vm instanceof VendingMachine).toBeTruthy()
    })
    test('should has $150 inserted amount after insert coin', () => {
        vm.insertCoin(50)
        vm.insertCoin(100)
        expect(vm._insertAmount).toBe(150)
    })
    
    test('should has $110 total amount and $40 inserted amount after buy snack', () => {
        vm.buySnack()
        expect(vm._totalAmount).toBe(110)
        expect(vm._insertAmount).toBe(40)
    })

    test('should has qty 99', () => {
        expect(vm._qty).toBe(99)
    })
    
})