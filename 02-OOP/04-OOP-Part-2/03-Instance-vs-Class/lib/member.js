class Member {
    constructor (firstname,lastname) {
        this._firstname = firstname
        this._lastname = lastname
        this._id = Member.generateId()
    }
    static generateId () {
        Member.count++
        return (Member.count + "").padStart(8,'0')
    }
    getId () {
        return this._id
    }
    getFirstName() {
        return this._firstname
    }
    getLastName() {
        return this._lastname
    }
    getInfo() {
    }
}

Member.count = 0

module.exports = Member
