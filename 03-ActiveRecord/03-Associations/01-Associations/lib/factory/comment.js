const { Factory } = require('../index')

Factory.blueprint('model:Comment', async (faker) => {
    return {
        comment: faker.paragraph({sentences: 1}),
        date: faker.date(),
    }
})
