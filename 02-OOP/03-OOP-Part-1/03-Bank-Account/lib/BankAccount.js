const Transaction = require('./Transaction')

class BankAccount {
    constructor(name,iban,initialDeposit) {
        this._name = name
        this._iban = iban
        this._initialDeposit = initialDeposit
        this._Bookbank = []
    }

    getName() {
        return this._name
    }
    setName(name) {
        this._name = name
    }
    //NAME//

    getIBAN() {
        return this._iban
    }
    setIban(iban) {
        this._iban = iban
    }
    //Iban

    getInitialDeposit() {
        return this._Bookbank.push(),this._initialDeposit
    }
    //Initial Deposit

    deposit(amount) {
        let dep = this._initialDeposit += amount
        this._Bookbank.push(new Transaction('Deposit',this._name,'',dep))

    }
    withdraw(amount) {
        let wd = this._initialDeposit -= amount
        this._Bookbank.push(new Transaction('Withdraw',this._name,'',wd))

    }
    static transfer(fromAccount,toAccount,amount) {
    let fr = fromAccount._initialDeposit -= amount
    let to = toAccount._initialDeposit += amount
        
        
        

    }
    //Transaction Getter

    getBalance() {
        return this._initialDeposit
    }
    history() {
        console.log(new Transaction(toString).toString())
    }

    //Array of Transaction
}

module.exports = BankAccount