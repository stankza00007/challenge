require('../lib/index') // init DB


const User = require('../lib/User')

let userInfo = {
    username: "testing",
    gender: "Male",
    dob: new Date().getTime() / 1000
}
const user1 = new User(userInfo)

describe('User', () => {

    test('should return an instance of User', () => {
        expect(user1 instanceof User).toBeTruthy()
    })
    test('findById should be a class method', () => {
        expect(user1.findById).toBeUndefined()
        expect(User.findById).toBeDefined()
    })
    test('all should be a class method', () => {
        expect(user1.all).toBeUndefined()
        expect(User.all).toBeDefined()
    })
    test('id should not be assigned before save', () => {
        expect(user1._id).toBeUndefined()
    })
    test('findById should return a User instance', () => {
        let temp = User.findById(10)

        expect(temp instanceof User).toBeTruthy()
        expect(temp).toHaveProperty('_id')
        expect(temp).toHaveProperty('username')
        expect(temp).toHaveProperty('gender')
        expect(temp).toHaveProperty('dob')
    })
    test('all should return an array of User instance', () => {
        const users = User.all()
        expect(Array.isArray(users)).toBeTruthy()
        expect(users[0] instanceof User).toBeTruthy()
    })
})