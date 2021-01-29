class Transaction {
    constructor(type,fromAccount,toAccount,amount) {
        this._type = type
        this._fromAccount = fromAccount
        this._toAccount = toAccount
        this._amount = amount
        this._Date = new Date()
    }

    getType() {
        return this._type
    }

    getFromAccount() {
        return this._fromAccount
    }

    getToAccount() {
        return this._toAccount
    }

    getAmount() {
        return this._amount
    }

    getDate() {
        let date = new Date()
        return date
    }

    toString() {
        console.log(this._Date)
        console.log(this._type)
        console.log(this._fromAccount)
        console.log(this._toAccount)
        console.log(this._amount)
    }
    //Done
}

module.exports = Transaction