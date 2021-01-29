const BankAccount = require('./lib/BankAccount')
const accountA = new BankAccount("Alice", "1234-1234-1234", 100)
const accountB = new BankAccount("Bob", "5678-5678-5678", 200)


console.log("Account A history:")
accountA.history()
console.log("Balance: $" + accountA.getBalance())
console.log("============================\n")

accountA.withdraw(20)
accountA.deposit(30)
accountA.history()
console.log("Balance: $" + accountA.getBalance())
console.log("============================\n")



console.log("Account B history:")
accountB.history()
console.log("Balance: $" + accountB.getBalance())
console.log("============================\n")

accountB.withdraw(20)
accountB.deposit(30)
accountB.history()
console.log("Balance: $" + accountB.getBalance())
console.log("============================\n")

console.log("Transfer $150 from B to A")
BankAccount.transfer(accountB, accountA, 150)

console.log("\nAccount B history:")
accountB.history()
console.log("Balance: $" + accountB.getBalance())
console.log("============================\n")

console.log("\nAccount A history:")
accountA.history()
console.log("Balance: $" + accountA.getBalance())
console.log("============================\n")