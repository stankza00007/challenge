const Animal = require('../lib/Animal')
const Dog = require('../lib/Dog')
const Duck = require('../lib/Duck')
const Cat = require('../lib/Cat')

let animal = new Animal()
let dog = new Dog()
let duck = new Duck()
let cat = new Cat()

describe('Animal', () => {
    test('should an instance of Animal', () => {
        expect(animal instanceof Animal).toBeTruthy()
    })
    test('should has speak method', () => {
        expect(typeof animal.speak === 'function').toBeTruthy()
    })
    test('should be able to eat', () => {
        expect(animal.eat()).toBe('I can eat.')
    })
})

describe('Dog', () => {
    test('should be an instance of Dog and inherited Animal', () => {
        expect(dog instanceof Animal).toBeTruthy()
        expect(dog instanceof Dog).toBeTruthy()
        
    })
    test('should return Bark', () => {
        expect(dog.speak()).toBe('Bark')
    })
    test('should be able to eat', () => {
        expect(dog.eat()).toBe('I can eat.')
    })
})

describe('Duck', () => {
    test('should be an instance of Duck and inherited Animal', () => {
        expect(duck instanceof Animal).toBeTruthy()
        expect(duck instanceof Duck).toBeTruthy()
    })
    test('should return Quack', () => {
        expect(duck.speak()).toBe('Quack')
    })
    test('should be able to eat', () => {
        expect(duck.eat()).toBe('I can eat.')
    })
})

describe('Cat', () => {
    test('should be an instance of Cat and inherited Animal', () => {
        expect(cat instanceof Animal).toBeTruthy()
        expect(cat instanceof Cat).toBeTruthy()
    })
    test('should return Meow', () => {
        expect(cat.speak()).toBe('Meow')
    })
    test('should be able to eat', () => {
        expect(cat.eat()).toBe('I can eat.')
    })
})