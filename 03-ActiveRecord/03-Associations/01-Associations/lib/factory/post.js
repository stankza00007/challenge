const { Factory } = require('../index')

Factory.blueprint('model:Post', async (faker) => {
    return {
        title: faker.sentence({ words: 4 }),
        content: faker.paragraph(),
        likes: faker.integer({ min: 0, max: 120 })
    }
})
