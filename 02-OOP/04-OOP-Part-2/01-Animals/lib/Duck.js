const Animal = require('./Animal')
class Duck extends Animal{
    speak() {
        return "Quack"
    }
}

module.exports = Duck