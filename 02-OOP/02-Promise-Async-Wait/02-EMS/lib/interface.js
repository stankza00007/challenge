
(async () => {
    const prompt = require('prompt-sync')();
    const EMS = require('../lib/index')

    let menu = `\n1. Get All employees\n2. Get employee by id\n3. Create new employee\n4. Update employee record\n5. Delete employee record\n`
    
    let operations = ""
    do {
        console.log(menu)
        operations = prompt("Please select and option: ")
    
        switch (operations) {
            case "1":
                try {
                    let employees = await EMS.getAll()
                    employees.slice(0,5).forEach(({ id, employee_name, employee_salary, employee_age }) => {
                        console.log(`\n======================================`)
                        console.log(`Id: ${id}`)
                        console.log(`Name: ${employee_name}`)
                        console.log(`Salary: ${employee_salary}`)
                        console.log(`Age: ${employee_age}`)
                    })
                } catch (error) {
                    console.log(error.message)
                }
                break
            case "2":
                try {
                    let employee_id = prompt("Enter employee id: ")
                    let employee = await EMS.get(employee_id)
                    console.log(`\n======================================`)
                    let { id, employee_name, employee_salary, employee_age } = employee
                    if (id) {
                        console.log(`Id: ${id}`)
                        console.log(`Name: ${employee_name}`)
                        console.log(`Salary: ${employee_salary}`)
                        console.log(`Age: ${employee_age}`)
                    } else {
                        console.log(`Employee Id not found.`)
                    }
                } catch (error) {
                    console.log(error.message)
                }
                break
            case "3": {
                console.log(`\n======================================`)
                let name = prompt("Enter employee name: ")
                let age = prompt("Enter employee age: ")
                let salary = prompt("Enter employee salary: ")

                try {
                    let result = await EMS.create(name, salary, age)
                    console.log(`Employee created. Employee Id: ${result.id}\n`)
                } catch (error) {
                    console.log(error.message)
                }

                break
            }
            case "4": {
                console.log(`\n======================================`)
                let id = prompt("Enter employee id: ")
                let name = prompt("Enter employee name: ")
                let age = prompt("Enter employee age: ")
                let salary = prompt("Enter employee salary: ")

                try {
                    await EMS.update(id, name, salary, age)
                    console.log(`Employee updated.\n`)
                } catch (error) {
                    console.log(error.message)
                }
                break
            }
            case "5":
                console.log(`\n======================================`)
                let id = prompt("Enter employee id: ")

                try {
                    await EMS.destroy(id)
                    console.log(`Employee deleted.\n`)
                } catch (error) {
                    console.log(error.message)
                }
                break
            default:
                return
        }
    
    } while (operations != 'exit')
})();