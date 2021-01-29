const {
    getTablesFromXML
} = require('../../helper/schema')

const table = getTablesFromXML(__dirname + '/../lib/wa_store.xml')

const expectedSchema = [{
        name: 'customer',
        properties: ['id', 'firstname', 'lastname'],
        primaryKey: ['id']
    },
    {
        name: 'product',
        properties: ['id', 'name', 'price'],
        primaryKey: ['id']
    },
    {
        name: 'order',
        properties: ['id',
            'customer_id',
            'product_id',
            'quantity',
            'price',
            'createdAt'
        ],
        primaryKey: ['id']
    }
]
describe('Store Schema', () => {
    test('should be correct', () => {
        expect(table).toEqual(expectedSchema)
    })
})