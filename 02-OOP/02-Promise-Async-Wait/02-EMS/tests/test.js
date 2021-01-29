const EMS = require('../lib/index')

let temp = {
    name: "Champ2",
    age: "0",
    salary: "100000"
}

describe('Employee Management System', () => {
    test('Get all employees', async () => {
        let employees = await EMS.getAll()
        expect(employees.length).toBeGreaterThan(0)
        expect(employees[0]).toHaveProperty('id')
        expect(employees[0]).toHaveProperty('employee_name')
        expect(employees[0]).toHaveProperty('employee_salary')
        expect(employees[0]).toHaveProperty('employee_age')
    })

    test('Create employee', async () => {
        let result = await EMS.create(temp.name, temp.salary, temp.age)

        expect(result).toHaveProperty('id')

        temp.id = result.id
    })

    test('Get employee by Id', async () => {
        let employee = await EMS.get(temp.id)

        expect(employee).toHaveProperty('id', temp.id)
        expect(employee).toHaveProperty('employee_name', temp.name)
        expect(employee).toHaveProperty('employee_salary', temp.salary)
        expect(employee).toHaveProperty('employee_age', temp.age)

    })

    test('Update employee', async () => {
        let result = await EMS.update(temp.id, 'temp champ', "100", "1")
        let employee = await EMS.get(temp.id)

        expect(employee).toHaveProperty('id', temp.id)
        expect(employee).toHaveProperty('employee_name', 'temp champ')
        expect(employee).toHaveProperty('employee_salary', "100")
        expect(employee).toHaveProperty('employee_age', "1")
    })

    test('Delete employee', async () => {
        let result = await EMS.destroy(temp.id)
        let employee = await EMS.get(temp.id)
        expect(employee).not.toHaveProperty('id')
    })
})