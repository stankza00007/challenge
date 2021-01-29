const {
    DepositTransaction,
    WithdrawTransaction,
    HandlingFeeTransaction,
    TransferFromTransaction,
    TransferToTransaction,
} = require('./Transactions')

class BankAccount {
}

BankAccount.count = 0

class SavingAccount extends BankAccount {
}

class CurrentAccount extends BankAccount {
}

module.exports = {
    BankAccount,
    CurrentAccount,
    SavingAccount,
}