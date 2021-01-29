const Staff = require('./Staff')

class Salesperson extends Staff {
    constructor(firstname, lastname, salary, project) {
        super(firstname,lastname,salary)
        this._project = project
    }
    getProjects() {
        return this._project
    }
    setProjects(project) {
        this._project = project
    }
    getSalary() {
        
        let sum = super.getSalary()
        this.getProjects().forEach(item => {
            sum += item.getCost()/10
        })
        return sum
    }
}

module.exports = Salesperson