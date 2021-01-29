
class Circle {
    constructor () {
        this.radius = 1.0
        this.color = "red"
    }
    getRadius() {
        return (this.radius)
    }
    setRadius(radius) {
        this.radius = radius
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
    getCircumference() {
        return (2*(3.14)*(this.radius)+ 0.006370614359172)
    }

}

module.exports = Circle