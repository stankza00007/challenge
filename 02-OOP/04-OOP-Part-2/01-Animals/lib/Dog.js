const Animal = require('./Animal')
class Dog extends Animal{
    speak() {
        return "Bark"
    }
}

module.exports = Dog