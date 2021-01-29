class Product {
    constructor(name,price){
        this.name = name
        this.price = price
    }

    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }

    getPrice(){
        return this.price
    }
    setPrice(price){
        this.price = price
    }

    
}

module.exports = Product
