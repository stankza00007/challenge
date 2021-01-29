const {
    Transaction,
    DepositTransaction,
    WithdrawTransaction,
    HandlingFeeTransaction,
    TransferFromTransaction,
    TransferToTransaction,
} = require('../lib/Transactions')

const {
    BankAccount,
    CurrentAccount,
    SavingAccount,
} = require('../lib/BankAccounts')

let saving = new SavingAccount('Saving', 100)
let current = new CurrentAccount('Current', 1500)

let deposit = new DepositTransaction(100)
let withdraw = new WithdrawTransaction(100)
let handlingfee = new HandlingFeeTransaction(20)
let transferto = new TransferToTransaction(10, saving)
let transferfrom = new TransferFromTransaction(10, current)

describe('DepositTransaction', () => {
    test('should an instance of DepositTransaction and inherited Transfer', () => {
        expect(deposit instanceof Transaction).toBeTruthy()
        expect(deposit instanceof DepositTransaction).toBeTruthy()
    })
    test('should return deposit amount', () => {
        expect(deposit.getAmount()).toBe(100)
    })
    test('should return deposit date', () => {
        expect(deposit.getDate() instanceof Date).toBeTruthy()
    })
    test('should return despoit details', () => {
        expect(deposit.toString()).toBe(`${deposit._date.toISOString()}, deposit, $${deposit._amount}`)
    })
})
describe('WithdrawTransaction', () => {
    test('should an instance of WithdrawTransaction and inherited Transfer', () => {
        expect(withdraw instanceof Transaction).toBeTruthy()
        expect(withdraw instanceof WithdrawTransaction).toBeTruthy()
    })
    test('should return withdraw amount', () => {
        expect(withdraw.getAmount()).toBe(-100)
    })
    test('should return withdraw date', () => {
        expect(withdraw.getDate() instanceof Date).toBeTruthy()
    })
    test('should return withdraw details', () => {
        expect(withdraw.toString()).toBe(`${withdraw._date.toISOString()}, withdraw, $${withdraw._amount}`)
    })
})
describe('HandlingFeeTransaction', () => {
    test('should an instance of HandlingFeeTransaction and inherited Transfer', () => {
        expect(handlingfee instanceof Transaction).toBeTruthy()
        expect(handlingfee instanceof HandlingFeeTransaction).toBeTruthy()
    })
    test('should return handling fee amount', () => {
        expect(handlingfee.getAmount()).toBe(-20)

    })
    test('should return handling fee transaction date', () => {
        expect(handlingfee.getDate() instanceof Date).toBeTruthy()
    })
    test('should return details', () => {
        expect(handlingfee.toString()).toBe(`${handlingfee._date.toISOString()}, overdraft handling fee, $${handlingfee._amount}`)

    })
})
describe('TransferToTransaction', () => {
    test('should an instance of TransferToTransaction and inherited Transfer', () => {
        expect(transferto instanceof Transaction).toBeTruthy()
        expect(transferto instanceof TransferToTransaction).toBeTruthy()
    })
    test('should return amount', () => {
        expect(transferto.getAmount()).toBe(-10)
    })
    test('should return date', () => {
        expect(transferto.getDate() instanceof Date).toBeTruthy()
    })
    test('should return details', () => {
        expect(transferto.toString()).toBe(`${transferto._date.toISOString()}, transfer to ${transferto._account.getName()}, $${transferto._amount}`)
    })
    test('should return account', () => {
        expect(transferto.getAccount()).toEqual(saving)
    })
})
describe('TransferFromTransaction', () => {
    test('should an instance of TransferFromTransaction and inherited Transfer', () => {
        expect(transferfrom instanceof Transaction).toBeTruthy()
        expect(transferfrom instanceof TransferFromTransaction).toBeTruthy()
    })
    test('should return amount', () => {
        expect(transferfrom.getAmount()).toBe(10)
    })
    test('should return date', () => {
        expect(transferfrom.getDate() instanceof Date).toBeTruthy()
    })
    test('should return details', () => {
        expect(transferfrom.toString()).toBe(`${transferfrom._date.toISOString()}, transfer from ${transferfrom._account.getName()}, $${transferfrom._amount}`)
    })
    test('should return account', () => {
        expect(transferfrom.getAccount()).toEqual(current)
    })
})
describe('BankAccount', () => {
    test('should has class method generateIBAN', () => {
        expect(typeof BankAccount.generateIBAN === 'function').toBeTruthy()
        expect(typeof saving.generateIBAN === 'function').toBeFalsy()
        expect(typeof current.generateIBAN === 'function').toBeFalsy()
    })
    test('should has class method transfer', () => {
        expect(typeof BankAccount.transfer === 'function').toBeTruthy()
        expect(typeof saving.transfer === 'function').toBeFalsy()
        expect(typeof current.transfer === 'function').toBeFalsy()
    })
})
describe('SavingAccount', () => {
    test('should an instance of SavingAccount and inherited BankAccount', () => {
        expect(saving instanceof BankAccount).toBeTruthy()
        expect(saving instanceof SavingAccount).toBeTruthy()
    })
    test('should return name', () => {
        expect(saving.getName()).toBe("Saving")
    })
    test('should return IBAN', () => {
        expect(saving.getIBAN()).toBe("S-00000001")
    })
    test('should return $100 balance', () => {
        expect(saving.getBalance()).toBe(100)
    })
    test('should has $80 balance after withdrawal', () => {
        saving.withdraw(10)
        saving.withdraw(10)
        expect(saving.getBalance()).toBe(80)
    })
    test('should has $110 balance after desposit', () => {
        saving.deposit(20)
        saving.deposit(10)
        expect(saving.getBalance()).toBe(110)
    })
    test('should has $100 balance after transfer', () => {
        BankAccount.transfer(saving, current, 10)
        expect(saving.getBalance()).toBe(100)
        BankAccount.transfer(current, saving, 10)
    })
    test('should reject withdraw if overdraft', () => {
        expect(() => saving.withdraw(111)).toThrowError('Does not have enough balance.')
    })
    test('should reject transfer if overdraft', () => {
        expect(() => saving.transferTo(current, 111)).toThrowError('Does not have enough balance.')
    })
})
describe('CurrentAccount', () => {
    test('should an instance of CurrentAccount and inherited BankAccount', () => {
        expect(current instanceof BankAccount).toBeTruthy()
        expect(current instanceof CurrentAccount).toBeTruthy()
    })
    test('should return name', () => {
        expect(current.getName()).toBe("Current")
    })
    test('should return IBAN', () => {
        expect(current.getIBAN()).toBe("C-00000002")
    })
    test('should return $1500 balance', () => {
        expect(current.getBalance()).toBe(1500)
    })
    test('should has $1300 balance after withdrawal', () => {
        current.withdraw(100)
        current.withdraw(100)
        expect(current.getBalance()).toBe(1300)
    })
    test('should has $1600 balance after desposit', () => {
        current.deposit(200)
        current.deposit(100)
        expect(current.getBalance()).toBe(1600)
    })
    test('should has $1500 balance after transfer', () => {
        BankAccount.transfer(current, saving, 100)
        expect(current.getBalance()).toBe(1500)
    })
    test('should charge handling if overdraft - withdraw', () => {
        current.withdraw(2000)
        expect(current.getBalance()).toBe(-700)
        current.deposit(2700)
    })
    test('should charge handling if overdraft - transfer', () => {
        BankAccount.transfer(current, saving, 2000)
        expect(current.getBalance()).toBe(-200)
    })
})