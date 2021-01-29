class Staff {
    constructor (firstname, lastname, salary) {
        this._firstname = firstname
        this._lastname = lastname
        this._salary = salary
    }
    getFirstname() {
        return this._firstname
    }
    getLastname() {
        return this._lastname
    }
    getSalary() {
        return this._salary
    }
    //Getter

    setFirstname(firstname) {
        this._firstname = firstname
    }
    setLastname(lastname) {
        this._lastname = lastname
    }
    setSalary(salary) {
        this._salary = salary
    }
    //Setter

    toString(detail) {
        return detail.toString()
    }
}

module.exports = Staff