const { Factory } = require('../index')
<<<<<<< HEAD

Factory.blueprint('model:Post', async (faker) => {

    return {
        title: faker.string(),
        content: faker.string(),
        likes: faker.bool(),
        user_id: faker.integer({min:1,max:5})

    }
})
=======
>>>>>>> upstream/master
