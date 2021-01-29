const {
    countCustomers,
    countOrders,
    countProducts,
    loyalCustomers,
    hotSaleItem
} = require('../lib/store')

const expectedLoyalCustomers = [{
        firstname: 'Tarah',
        lastname: 'Plewright',
        id: 15,
        count: 3
    },
    {
        firstname: 'Nancee',
        lastname: 'Comellini',
        id: 45,
        count: 3
    },
    {
        firstname: 'Lanny',
        lastname: 'Wipfler',
        id: 46,
        count: 4
    },
    {
        firstname: 'Luci',
        lastname: 'Storrar',
        id: 60,
        count: 3
    },
    {
        firstname: 'Jacynth',
        lastname: 'Kershow',
        id: 66,
        count: 3
    },
    {
        firstname: 'Brady',
        lastname: 'Botha',
        id: 74,
        count: 3
    },
    {
        firstname: 'Constancia',
        lastname: 'Beastall',
        id: 79,
        count: 3
    },
    {
        firstname: 'Mendie',
        lastname: 'Cheake',
        id: 95,
        count: 3
    }
]
const expectedHotItem = { name: 'Nescafe - Frothy French Vanilla', id: 58, count: 7 }

describe('WA Store', () => {

    test('count Customers should return 100', async () => {
        let result = await countCustomers()
        expect(result).toEqual(100)
    })    

    test('count Orders should return 100', async () => {
        let result = await countOrders()
        expect(result).toEqual(100)
    })  

    test('count Products should return 100', async () => {
        let result = await countProducts()
        expect(result).toEqual(120)
    })  

    test.only('Loyal customer should be returned', async () => {
        let result = await hotSaleItem()
        expect(result).toEqual(expectedHotItem)
    })    
})