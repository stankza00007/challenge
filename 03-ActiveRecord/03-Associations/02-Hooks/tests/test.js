const moment = require('moment')
const crypto = require('crypto')
const { User } = require('../lib/model/init')
require('../lib/factory/init')

const {
    createUserTable,
    dropTables
} = require('../lib/createTables')

const {
    createUsers
} = require('../lib/seed')

const { db, Factory, Model } = require('../lib/index')
const expectedUserTable = {
    id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    username: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    gender: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
    dob: {
        type: 'date',
        maxLength: null,
        nullable: false,
        defaultValue: null
    },
    password: {
        type: 'varchar',
        maxLength: '255',
        nullable: false,
        defaultValue: null
    },
}
let usersColumns = ['username', 'gender', 'dob']

describe("Hooks", () => {
    beforeAll(async () => {
        await dropTables()
    })

    describe('User Table', () => {

        test('should create a user table', async () => {
            await createUserTable()
            let hasTable = await db.schema.hasTable('users')
            expect(hasTable).toBeTruthy()
        })

        test('should has column id', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('id', expectedUserTable["id"])
        })

        test('should has column username', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('username', expectedUserTable["username"])
        })

        test('should has column gender', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('gender', expectedUserTable["gender"])
        })

        test('should has column dob', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('dob', expectedUserTable["dob"])
        })

        test('should has column password', async () => {
            let columnInfo = await db.table('users').columnInfo()
            expect(columnInfo).toHaveProperty('password', expectedUserTable["password"])
        })

    })

    describe('User Model', () => {
        test('should be an instance of User and inherited Model', async () => {
            let temp = new User()
            expect(temp).toBeInstanceOf(User)
            expect(temp).toBeInstanceOf(Model)
        })
        test('should create a record in database', async () => {
            let temp = new User()
            temp.username = "testing"
            temp.gender = "Male"
            temp.password = "password"
            temp.dob = new Date()
            await temp.save()
            let temp2 = await User.find(temp.id)
            expect(temp2).toBeInstanceOf(User)
        })
        test('should have dob in dates', async () => {
            expect(User.dates).toContain('dob')
        })
        test('should have casted dob to YYYY-MM-DD', async () => {
            let casted = User.castDates('dob', moment(new Date()))
            expect(casted).toBe(moment(new Date()).format("YYYY-MM-DD"))
        })
        test('should have hidden password field', async () => {
            expect(User.hidden).toContain('password')
        })
        test('should have fields that match table columns name', async () => {
            let temp = new User()
            temp.username = "testing"
            temp.gender = "Male"
            temp.password = "passworddd"
            temp.dob = new Date()
            await temp.save()
            expect(Object.keys(temp.toJSON())).toEqual(expect.arrayContaining(usersColumns));
        })
        test('should have saved hashed password', async() => {
            let temp = new User()
            temp.username = "testing"
            temp.gender = "Male"
            temp.password = "password"
            temp.dob = new Date()
            await temp.save()
            
            let result = await db.table('users').where('id', temp.id)

            expect(result[0].password).toBe(crypto.createHash('md5').update("password").digest('hex'))
            
        })
    })

    describe('User Factory', () => {
        test('createUsers should save records to database', async () => {
            let count = await User.getCount()
            await createUsers(5)
            count += 5
            expect(count).toBe(await User.getCount())
        })
    })

})
