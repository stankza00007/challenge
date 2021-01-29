class VendingMachine {

    constructor(product, qty) {
        this._product = product
        this._qty = qty
        this._totalAmount = 0
        this._insertAmount = 0
    }

    insertCoin(amount) {
        this._insertAmount = (this._insertAmount+amount)
    }

    buySnack() {
    
        if (this._insertAmount >= this._product.price) {
            this._qty-- 
            this._totalAmount = this._product.price
            this._insertAmount = this._insertAmount - this._product.price
            
            return this._totalAmount
        }    
    }

    displayMenu() {
        console.log("=====================================")
        console.log("#1 - ",this._product.name,"$",this._product.price,this._qty,"Units")
        console.log("Inserted Amount: ",this._insertAmount)
        console.log("=====================================")
    }

}

module.exports = VendingMachine