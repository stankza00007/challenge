const Domain = require('../lib/Domain')

describe('Domain' , () => {
    test('http://whiteboard.academy/ should return whiteboard', () => {
        expect(Domain.get('http://whiteboard.academy/')).toEqual('whiteboard')
    })
})