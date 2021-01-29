const Staff = require('../lib/Staff')
const Developer = require('../lib/Developer')
const Salesperson = require('../lib/Salesperson')
const Project = require('../lib/Project')

let projectA = new Project('A', 1000)
let projectB = new Project('B', 500)
let projectC = new Project('C', 600)
let projectD = new Project('D', 800)
let staff = new Staff('A', 'Staff', 800)
let developer = new Developer('A', 'Dev', 1000, ["c++", "java"])
let salesperson = new Salesperson('A', 'Sales', 900, [projectA, projectB])
describe('Project', () => {
    test('should be an instance of Project', () => {
        expect(projectA instanceof Project).toBeTruthy()
        expect(projectB instanceof Project).toBeTruthy()
    })
})

describe('Staff', () => {
    test('should be an instance of Staff', () => {
        expect(staff instanceof Staff).toBeTruthy()
    })

    test('should return last name Staff', () => {
        expect(staff.getLastname()).toBe('Staff')
    })

    test('should return first name A', () => {
        expect(staff.getFirstname()).toBe('A')
        
    })

    test('should return salary 800', () => {
        expect(staff.getSalary()).toBe(800)
        
    })
})

describe('Developer', () => {
    test('should be an instance of Developer', () => {
        expect(developer instanceof Staff).toBeTruthy()
        expect(developer instanceof Developer).toBeTruthy()
    })

    test('should return last name Dev', () => {
        expect(developer.getLastname()).toBe('Dev')
        
    })

    test('should return first name A', () => {
        expect(developer.getFirstname()).toBe('A')
        
    })

    test('should return salary 1200', () => {
        expect(developer.getSalary()).toBe(1200)
        
    })

    test('should set skills', () => {
        developer.setSkills(developer.getSkills().concat(["c", "python", "javascript"]))
        expect(developer.getSkills()).toEqual(["c++", "java", "c", "python", "javascript"])
    })


    test('should return salary 1200', () => {
        expect(developer.getSalary()).toBe(1500)
        
    })

})

describe('Salesperson', () => {
    test('should be an instance of Salesperson', () => {
        expect(staff instanceof Staff).toBeTruthy()
        expect(salesperson instanceof Salesperson).toBeTruthy()
    })

    test('should return last name Sales', () => {
        expect(salesperson.getLastname()).toBe('Sales')
    })

    test('should return first name A', () => {
        expect(salesperson.getFirstname()).toBe('A')
    })

    test('should return salary 1050', () => {
        expect(salesperson.getSalary()).toBe(1050)
    })

    test('should set projects', () => {
        salesperson.setProjects(salesperson.getProjects().concat([projectC, projectD]))
        expect(salesperson.getProjects()).toEqual([projectA, projectB, projectC, projectD])
    })

    test('should return salary 1050', () => {
        expect(salesperson.getSalary()).toBe(1190)
    })
})