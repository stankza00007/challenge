## Background & Objectives
`WA Bank` is growing so fast. Nathan decided to add more account types to serve more different customers. The new account types are `Saving` and `Current`. 

## Specs
`Saving` account:
1. Customer can deposit and withdraw money.
2. Customer can transfer money.
2. Account balance `cannot` be negative.
3. If a customer tries to withdraw/transfer more than he has in his account, the transaction will be declined

`Current` account:
1. Customer can deposit and withdraw money.
2. Customer can transfer money.
3. The initial balance should be greater than $1000.
2. Account balance `can` be negative.
3. If a customer tries to withdraw/transfer more than he has in his account, 10% handling fee will be charged per transaction.

### BankAccount
1. Create a `BankAccount` class that accepts `name` and `initialDeposit` as initiate variables.
2. Generate `IBAN` no.
    1. Should use class method to generate.
    2. `IBAN` format: {AccountType}-{8 digits number}.
        - Account Type: 
            - C => Current Account
            - S => Saving Account
        - Example: 
            1. Saving account: S-00000001
            2. Current account: C-00000002
2. Each account maintains it own transaction history. `hints: an array of transactions`.
3. Implement `getter` and `setter` methods.
4. Implement `deposit` method to add deposit transaction to transaction history.
5. Implement `withdraw` method to add withdraw transaction to transaction history.
6. Implemnt `transferFrom` method to add transfer transaction.
6. Implemnt `transferTo` method to add transfer transaction.
7. Implement `getBalance` method to calculate account's balance based on transaction history.
8. Implement `transfer` class method to make transfer between accounts.

### SavingAccount
1. Create a `SavingAccount` class that inherites `BankAccount`.
2. Override `withdraw` method to prevent overdraft.
3. Override `transferTo` method to prevent overdraft.

### CurrentAccount
1. Create a `CurrentAccount` class that inherites `BankAccount`.
2. Override `withdraw` method, charge 10% handling fee if the new balance is negative.
3. Override `transferTo` method to preven overdraft, , charge 10% handling fee if the new balance is negative.

### Transaction
1. Create a `Transaction` class `amount` as initial variables.
2. Implement `getter` method.
3. Define `toString` method to print out the details of transaction.

### DepositTransaction
1. Create a `DepositTransaction` class that inherites `Transaction`.
2. Override `toString` method to print out the deposit details.

### WithdrawTransaction
1. Create a `WithdrawTransaction` class that inherites `Transaction`.
2. Override `toString` method to print out the withdraw details.
3. Override `getAmount` method to return negative `amount`

### HandlingFeeTransaction
1. Create a `HandlingFeeTransaction` class that inherites `Transaction`.
2. Override `toString` method to print out the handling fee details.
3. Override `getAmount` method to return negative `amount`

### TransferToTransaction
1. Create a `TransferToTransaction` class that accepts `account` and inherites `Transaction`.
2. Override `toString` method to print out the transfer details.
3. Override `getAmount` method to return negative `amount`

### TransferFromTransaction
1. Create a `TransferFromTransaction` class that accepts `account` and inherites `Transaction`.
2. Override `toString` method to print out the transfer details.


## Further Suggestions & resources
1. If you can finish this exercise by yourself, it means that you already understand the basic concept of OOP.
2. Try to discuss what kind of OOP techniques have been applied in this exercise.