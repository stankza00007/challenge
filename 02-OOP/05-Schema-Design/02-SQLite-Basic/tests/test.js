const {
    getTablesFromXML
} = require('../../helper/schema')

const table = getTablesFromXML(__dirname + '/../lib/wa_hospital.xml')

const expectedSchema = [{
        name: 'doctors',
        properties: ['id', 'departments_id', 'name', 'specialty'],
        primaryKey: ['id']
    },
    {
        name: 'patients',
        properties: ['id', 'name', 'address', 'phone'],
        primaryKey: ['id']
    },
    {
        name: 'consultations',
        properties: ['id',
            'doctors_id',
            'nurses_id',
            'patients_id',
            'start_date',
            'end_date'
        ],
        primaryKey: ['id']
    },
    {
        name: 'departments',
        properties: ['id', 'name', 'head'],
        primaryKey: ['id']
    },
    {
        name: 'nurses',
        properties: ['id', 'name', 'registered'],
        primaryKey: ['id']
    },
    {
        name: 'rooms',
        properties: ['id', 'type', 'availability'],
        primaryKey: ['id']
    },
    {
        name: 'prescribes',
        properties: ['doctors_id',
            'patients_id',
            'medications_id',
            'date',
            'consultations_id',
            'dose'
        ],
        primaryKey: ['doctors_id', 'patients_id', 'medications_id', 'date']
    },
    {
        name: 'medications',
        properties: ['id', 'name', 'brand', 'description'],
        primaryKey: ['id']
    },
    {
        name: 'stay',
        properties: ['id', 'room_id', 'patients_id'],
        primaryKey: ['id']
    }
]

describe('Hospital Schema', () => {
    test('should be correct', () => {
        expect(table).toEqual(expectedSchema)
    })
})