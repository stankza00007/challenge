(async () => {
    const prompt = require('prompt-sync')();
    const moment = require('moment')

    // Initialize
    const {
        User,
        Post,
        Comment
    } = require('./model/init')
    const UserController = require('./controller/User')


    let operation = ""

    do {
        console.log(`1. Browse All Users\n2. Get User By Id\n3. Create User\n4. Update User\n5. Delete User\n`)

        operation = prompt("Select an option: ")

        switch(operation) {
            case "1": {
                let users = await UserController.index()
                users = users.rows
                if (!users.length) console.log("No user found")

                users.forEach(user => {
                    let temp = user.toJSON()
                    console.log(`\nId: ${temp.id}`)
                    console.log(`Username: ${temp.username}`)
                    console.log(`Gender: ${temp.gender}`)
                    console.log(`DOB: ${temp.dob}\n`)
                })

                break;
            }
            case "2": {
                let id = prompt("Enter user Id: ")

                let user = await UserController.show(id)
                let temp = user.toJSON()
                console.log(`\nId: ${temp.id}`)
                console.log(`Username: ${temp.username}`)
                console.log(`Gender: ${temp.gender}`)
                console.log(`DOB: ${temp.dob}\n`)
                break;
            }
            case "3": {
                let username = prompt("Enter user username: ")
                let gender = prompt("Enter user gender (Male, Female): ")
                let dob = prompt("Enter user dob (YYYY-MM-DD): ")

                dob = moment(dob, "YYYY-MM-DD")

                await UserController.store({
                    username: username,
                    gender: gender,
                    dob: dob.toDate(),
                })

                console.log("User created.")

                break;
            }
            case "4": {
                let id = prompt("Enter user Id: ")
                let username = prompt("Enter user username: ")
                let gender = prompt("Enter user gender (Male, Female): ")
                let dob = prompt("Enter user dob (YYYY-MM-DD): ")

                dob = moment(dob, "YYYY-MM-DD")
                
                await UserController.update(id, {
                    username: username,
                    gender: gender,
                    dob: dob.toDate(),
                })

                console.log("User saved.")
            }
            case "5": {
                let id = prompt("Enter user Id: ")
                await UserController.delete(id)
                break;
            }
        }

    } while (operation != 'exit')

    process.exit(0)
})()