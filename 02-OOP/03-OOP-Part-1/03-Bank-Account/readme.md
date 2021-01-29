## Background & Objectives
Our CEO, Nathan, is a billioniare. He decided to open new bank, called `WA Bank`. In his new bank, there is only one type of bank account avaiable to his customer. In order to create a new bank account, customer has to fill in their `name` and make an `initial desposit`. Customer can then `deposit`, `withdraw` or `transfer` money using their account.

## Specs

### BankAccount
1. Create a `BankAccount` class that accepts `name`, `iban` and `initialDeposit` as initiate variables.
2. Each account maintains it own transaction history. `hints: an array of transactions`.
3. Implement `getter` and `setter` methods.
4. Implement `deposit` method to add deposit transaction to transaction history.
5. Implement `withdraw` method to add withdraw transaction to transaction history.
6. Implemnt `transfer` method to add transfer transaction to both `from` and `to` account.
7. Implement `getBalance` method to calculate account's balance based on transaction history.
9. Implement `history` method to print out transactions history.

### Transaction
1. Create a `Transaction` class that accepts `type`, `fromAccount`, `toAccount` and `amount` as initial variables.
2. Implement `getter` and `setter` methods.
3. Implement `toString` method to print out the details of transaction depends on transaction type. for example, if there are `withdraw`, `deposit` and `transfer` transactions, it should look like: (Time, Type, Amount)
```
21:13:35, Withdraw, $20
21:13:35, Deposit, $30
21:13:35, From: Bob to Alice, $150
```


### Expected Output

- If your implementation is correct, it should be like:
```
Account A history:
21:13:35, Deposit, $100
Balance: $100
============================

21:13:35, Deposit, $100
21:13:35, Withdraw, $20
21:13:35, Deposit, $30
Balance: $110
============================

Account B history:
21:13:35, Deposit, $200
Balance: $200
============================

21:13:35, Deposit, $200
21:13:35, Withdraw, $20
21:13:35, Deposit, $30
Balance: $210
============================

Transfer $150 from B to A

Account B history:
21:13:35, Deposit, $200
21:13:35, Withdraw, $20
21:13:35, Deposit, $30
21:13:35, From: Bob to Alice, $150
Balance: $60
============================


Account A history:
21:13:35, Deposit, $100
21:13:35, Withdraw, $20
21:13:35, Deposit, $30
21:13:35, From: Bob to Alice, $150
Balance: $260
============================
```

