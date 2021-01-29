const {
    getTablesFromXML
} = require('C:/Users/ging/whiteboard-challenges/02-OOP/05-Schema-Design/helper/schema')

const table = getTablesFromXML(__dirname + '/../lib/users.xml')

const expectedSchema = [{
    name: 'User',
    properties: ['id', 'firstname', 'lastname', 'email'],
    primaryKey: ['id']
}]

describe('User Schema', () => {
    test('should have primary key id and properties firstname, lastname, email.', () => {
        expect(table).toEqual(expectedSchema)
    })
})