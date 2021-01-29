const Circle = require('../lib/Circle')
const Rectangle = require('../lib/Rectangle')
const Employee = require('../lib/Employee')
const Product = require('../lib/Product')

describe('Circle', () => {
    let c = new Circle()
    test('should return an instance of Circle', () => {
        expect(c instanceof Circle).toBeTruthy()
    })
    test('should return radius', () => {
        expect(c.getRadius()).toBe(1)
    })
    test('should return color', () => {
        expect(c.getColor()).toBe("red")
    })
    test('should set radius to 2', () => {
        c.setRadius(2)
        expect(c.getRadius()).toBe(2)
    })
    test('should set color to white', () => {
        c.setColor("white")
        expect(c.getColor()).toBe("white")
    })
    test('should return correct circumference', () => {
        expect(c.getCircumference()).toBe(2 * Math.PI * 2)
    })
})

describe('Rectangle', () => {
    let r = new Rectangle(2, 2)
    test('should return an instance of Rectangle', () => {
        expect(r instanceof Rectangle).toBeTruthy()
    })
    test('should return length = 2', () => {
        expect(r.getLength()).toBe(2)
    })
    test('should return width = 2', () => {
        expect(r.getWidth()).toBe(2)
    })
    test('should set length to 10', () => {
        r.setLength(10)
        expect(r.getLength()).toBe(10)
    })
    test('should set width to 20', () => {
        r.setWidth(20)
        expect(r.getWidth()).toBe(20)
    })
    test('should return correct area', () => {
        expect(r.getArea()).toBe(20 * 10)
    })
    test('should return correct perimeter', () => {
        expect(r.getPerimeter()).toBe(20 * 2 + 10 * 2)
    })
})

describe('Employee', () => {
    let e = new Employee(1, "Simon", "Tai", 10)
    test('should return an instance of Employee', () => {
        expect(e instanceof Employee).toBeTruthy()
    })
    test('should return id', () => {
        expect(e.getId()).toBe(1)
    })
    test('should return last name', () => {
        expect(e.getLastName()).toBe("Tai")
    })
    test('should return first name', () => {
        expect(e.getFirstName()).toBe("Simon")
    })
    test('should return salary', () => {
        expect(e.getSalary()).toBe(10)
    })
    test('should return annual salary', () => {
        expect(e.getAnnualSalary()).toBe(12 * 10)
    })
    test('should set id to 2', () => {
        e.setId(2)
        expect(e.getId()).toBe(2)
    })
    test('should set last name to Fat', () => {
        e.setLastName("Fat")
        expect(e.getLastName()).toBe("Fat")
    })
    test('should set first name to Chun', () => {
        e.setFirstName("Chun")
        expect(e.getFirstName()).toBe("Chun")
    })
    test('should set salary to 100', () => {
        e.setSalary(100)
        expect(e.getSalary()).toBe(100)
    })
    test('should raise salary by 10%', () => {
        e.raiseSalary(10)
        expect(e.getSalary()).toBeCloseTo(100 * 1.1)
    })
    test('should return annual salary', () => {
        expect(e.getAnnualSalary()).toBeCloseTo(12 * 110)
    })

})

describe('Proudct', () => {
    let p = new Product("Chocolate", 100)
    test('should return an instance of Product', () => {
        expect(p instanceof Product).toBeTruthy()
    })
    test('should return product name', () => {
        expect(p.getName()).toBe("Chocolate")
    })
    test('should return price', () => {
        expect(p.getPrice()).toBe(100)
    })
    test('should set product name to Chocolate Bar', () => {
        p.setName("Chocolate Bar")
        expect(p.getName()).toBe("Chocolate Bar")
    })
    test('should set price to 110', () => {
        p.setPrice(110)
        expect(p.getPrice()).toBe(110)
    })
})