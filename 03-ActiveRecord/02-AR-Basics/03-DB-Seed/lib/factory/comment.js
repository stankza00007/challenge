const { Factory } = require('../index')
<<<<<<< HEAD

Factory.blueprint('model:Comment', async (faker) => {
    return {
        comment: faker.string(),
        date: faker.date(),
        user_id: faker.integer({min: 1, max: 5}),
        post_id: faker.integer({min: 1, max: 5})

    }


})
=======
>>>>>>> upstream/master
