const baseUrl = "https://fakerestapi.azurewebsites.net"
const request = require("request")
const rp = require("request-promise")


function getDetailsCallback(id, callback) {
    // Get Book Record by Id
    let book = {}
    request({
        url: `${baseUrl}/api/Books/${id}`,
        method: 'GET',
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log(error)
            return callback(error)
        } else {
            book['title'] = body["Title"]
            book['pages'] = body["PageCount"]

            request({
                url: `${baseUrl}/authors/books/${id}`,
                method: 'GET',
                json: true
            }, (error, response, body) => {
                if (error) {
                    console.log(error)
                    return callback(error)
                } else {
                    book['authors'] = body.map(author => {
                        return `${author["FirstName"]}, ${author["LastName"]}`
                    }).join(" & ")

                    request({
                        url: `${baseUrl}/books/covers/${id}`,
                        method: 'GET',
                        json: true
                    }, (error, response, body) => {
                        if (error) {
                            console.log(error)
                            return callback(error)
                        } else {
                            book['cover'] = body.map(cover => {
                                return cover["Url"]
                            }).join(' & ')
                            
                            return callback(null, book)
            
                        }
                    })
                }
            })
        }
    })
}

/////////////////////////////////////////////////////////////////

function getBookById(id) {
    return new Promise (function (resolve, reject) {
        request({
            url: `${baseUrl}/api/Books/${id}`,
            method: 'GET',
            json: true
        }, (error, response, body) => {
            resolve(body)
        })
    })
}

function getAuthor(id) {
    return new Promise (function (resolve, reject) {
        request({
            url: `${baseUrl}/authors/books/${id}`,
            method: 'GET',
            json: true
        }, (error, response, body) => {
            resolve(body)
        })
    })

}

function getCover(id) {
    return new Promise (function (resolve, reject) {
        request({
            url: `${baseUrl}/books/covers/${id}`,
            method: 'GET',
            json: true
        }, (error, response, body) => {
            resolve(body)
        })
    })

}

///////////////////////////////////////////////////////////////

function getDetailsPromise(id) {
    // Try to convert nested callback to promise approach.
    let book = {}

    return getBookById(id)
        .then(function (result) {
            book['title'] = result["Title"]
            book['pages'] = result["PageCount"]

    return getAuthor(id)
        .then(function (result) {
            book['authors'] = result.map(author => {
            return `${author["FirstName"]}, ${author["LastName"]}`
            }).join(" & ")

    return getCover(id)
        .then(function (result) {
            book['cover'] = result.map(cover => {
            return cover["Url"]
            }).join(' & ')
            
            return book

        })
        })
        })
}

async function getDetailsAsync(id) {
    // Try to use async/await to simplify promise approach
    let book = {}

    try {
        const bookDetails = await getBookById(id)
        const authorIfo = await getAuthor(id)
        const coverInfo = await getCover(id)
        
            book['title'] = bookDetails["Title"]
            book['pages'] = bookDetails["PageCount"]

            book['authors'] = authorIfo.map(author => {
                return `${author["FirstName"]}, ${author["LastName"]}`
                }).join(" & ")

            book['cover'] = coverInfo.map(cover => {
                return cover["Url"]
                }).join(' & ')

            return book
            
    }catch (e){
        console.log("Fail You did really bad mistakes which 'CAN NOT' be undone!!")
    }
     
}

////////////////////////////////////////////////////////////
// For testing use.

function testCallback(id) {
    return new Promise((resolve, reject) => {
        getDetailsCallback(id, (err, book) => {
            if (err) {
                reject(err)
            } else {
                resolve(book)
            }
        })
    })
}

function testPromise(id) {
    return getDetailsPromise(id)
}

async function testAsync(id) {
    return await getDetailsAsync(id)
}

module.exports = {
    getDetailsCallback,
    testCallback,
    testPromise,
    testAsync,
}