class Employee {
    constructor(id, firstname, lastname, salary) {
        this._id = id
        this._firstname = firstname
        this._lastname = lastname
        this._salary = salary
    }
    getId() {
        return this._id
    }
    setId(id) {
        this._id = id
    }


    getLastName() {
        return this._lastname
    }
    setLastName(lastname) {
        this._lastname = lastname
    }


    getFirstName() {
        return this._firstname
    }
    setFirstName(firstname) {
        this._firstname = firstname
    }


    getSalary() {
        return this._salary
    }
    setSalary(salary) {
        this._salary = salary
    }


    getAnnualSalary() {
        return this._salary*12
    }

    raiseSalary(salary) {
        this._salary = (this._salary) + (salary)
    }

}
module.exports = Employee