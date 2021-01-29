const { Factory } = require('../index')

Factory.blueprint('model:User', async (faker) => {
    return {
        username: faker.email(),
        gender: faker.gender(),
        dob: faker.date()
    }
})
