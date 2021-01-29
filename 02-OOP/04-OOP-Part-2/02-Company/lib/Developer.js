const Staff = require('./Staff')

class Developer extends Staff {
    constructor(firstname, lastname, salary, skills) {
        super(firstname, lastname, salary)
        this._skills = skills
    }
    getSkills() {
        return this._skills
    }
    getSalary() {
        return (this._salary + ((this._skills).length)*100)
    }
    //Getter

    setSkills(skills) {
        this._skills = skills
    }
}

module.exports = Developer