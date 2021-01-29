class Transaction {
}

class DepositTransaction extends Transaction {
}

class WithdrawTransaction extends Transaction { 
}

class HandlingFeeTransaction extends Transaction {
}

class TransferToTransaction extends Transaction {
}

class TransferFromTransaction extends Transaction {
}

module.exports = {
    Transaction,
    DepositTransaction,
    WithdrawTransaction,
    HandlingFeeTransaction,
    TransferFromTransaction,
    TransferToTransaction,
}