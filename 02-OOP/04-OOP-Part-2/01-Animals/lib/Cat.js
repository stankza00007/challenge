const Animal = require('./Animal')
class Cat extends Animal{
    speak() {
        return "Meow"
    }
}

module.exports = Cat