const BankAccount = require('../lib/BankAccount')
const Transaction = require('../lib/Transaction')

const alice = new BankAccount("Alice", "001", 100)
const bob = new BankAccount("Bob", "002", 100)

describe('BankAccount', () => {
    test('should be an instance of BankAccount', () => {
        expect(alice instanceof BankAccount).toBeTruthy()
        expect(bob instanceof BankAccount).toBeTruthy()
    })
    test('should return name', () => {
        expect(alice.getName()).toBe("Alice")
        expect(bob.getName()).toBe("Bob")
    })
    test('should return IBAN', () => {
        expect(alice.getIBAN()).toBe("001")
        expect(bob.getIBAN()).toBe("002")
    })
    test('should return $100 balance', () => {
        expect(alice.getBalance()).toBe(100)
    })
    test('should has $80 balance after withdrawal', () => {
        alice.withdraw(10)
        alice.withdraw(10)
        expect(alice.getBalance()).toBe(80)
    })
    test('should has $110 balance after desposit', () => {
        alice.deposit(20)
        alice.deposit(10)
        expect(alice.getBalance()).toBe(110)
    })
    test('should has $100 balance after transfer', () => {
        BankAccount.transfer(alice, bob, 10)
        expect(alice.getBalance()).toBe(100)
        expect(bob.getBalance()).toBe(110)
    })
})

describe('Transaction', () => {
    let unknownTransaction = new Transaction('deposit', bob, alice, 10)
    test('should be an instance of Transaction', () => {
        expect(unknownTransaction instanceof Transaction).toBeTruthy()
    })
    test('should return type deposit', () => {
        expect(unknownTransaction.getType()).toBe('deposit')
    })
    test('should return from account bob', () => {
        expect(unknownTransaction.getFromAccount()).toBe(bob)
    })
    test('should return to account alice', () => {
        expect(unknownTransaction.getToAccount()).toBe(alice)        
    })
    test('should return date', () => {
        expect(unknownTransaction.getDate() instanceof Date).toBeTruthy()
    })
    test('should return amount 10', () => {
        expect(unknownTransaction.getAmount()).toBe(10)
    })
})