const {
    getTablesFromXML
} = require('../../helper/schema')

const table = getTablesFromXML(__dirname + '/../lib/wa_hotel.xml')

const expectedSchema = [{
        name: 'hotel',
        properties: ['id', 'name', 'address', 'rating'],
        primaryKey: ['id']
    },
    {
        name: 'room',
        properties: ['id', 'hotel_id', 'room_type_id', 'number'],
        primaryKey: ['id']
    },
    {
        name: 'room_type',
        properties: ['id', 'type', 'price', 'description'],
        primaryKey: ['id']
    },
    {
        name: 'booking',
        properties: ['id',
            'room_id',
            'customer_id',
            'checkin_date',
            'checkout_date',
            'booking_date'
        ],
        primaryKey: ['id']
    },
    {
        name: 'customer',
        properties: ['id',
            'firstname',
            'lastname',
            'email',
            'phone_no',
            'passport_no'
        ],
        primaryKey: ['id']
    }
]

describe('Hotel Schema', () => {
    test('should be correct', () => {
        expect(table).toEqual(expectedSchema)
    })
})