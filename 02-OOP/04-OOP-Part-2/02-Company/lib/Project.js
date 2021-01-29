class Project {
    constructor(name,cost) {
        this._name = name
        this._cost = cost
    }
    getName() {
        return this._name
    }
    getCost() {
        return this._cost
    }
    //Getter

    setName(name) {
        this._name = name
    }
    setCost(cost) {
        this._cost = cost
    }
    //Setter
}

module.exports = Project
