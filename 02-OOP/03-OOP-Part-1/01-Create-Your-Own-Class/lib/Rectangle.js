class Rectangle {
    constructor (length, width) {
        this._length = length
        this._width = width
    }

    getLength() {
        return this._length
    }

    setLength (length) {
        this._length = length
    }

    getWidth() {
        return this._width
    }

    setWidth(width) {
        this._width = width
    }

    getArea() {
        return this._length*this._width
    }

    getPerimeter() {
        return (2*(this._length + this._width))
    }
}

module.exports = Rectangle
