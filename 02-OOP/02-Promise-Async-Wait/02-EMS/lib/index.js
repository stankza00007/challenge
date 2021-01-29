const request = require('request-promise')
const baseUrl = "http://dummy.restapiexample.com/api/v1/employees"

async function getAll() {
//All Data from Json Object

let options = {
    "url": baseUrl,
    "method": "GET",
    "json": true
    }
    return request(options)
    
}

async function get(id) {
//Get Data from an id
    let options = {
        "url": "http://dummy.restapiexample.com/api/v1/employee/"+id,
        "method": "GET",
        "json": true
        }
        return request(options)

}

async function create(name, salary, age) {

    let options = {
        "url": "http://dummy.restapiexample.com/api/v1/create",
        "method": "POST",
        "json": {
            name,
            salary,
            age
            }
        }
        return request(options)
    
}

async function update(id, name, salary, age) {

    let options = {
        "url": "http://dummy.restapiexample.com/api/v1/update/"+id,
        "method": "PUT",
        "json": {
            name,
            salary,
            age,
            }
        }
        return request(options)
}

async function destroy(id) {

    let options = {
        "url": "http://dummy.restapiexample.com/api/v1/delete/"+id,
        "method": "DELETE",
        "json": true
        }
        return request(options)
    
}

module.exports = {
    getAll,
    get,
    create,
    update,
    destroy,
}
