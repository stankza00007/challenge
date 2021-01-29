## Background & Objectives

We have learnt the basic concept of OOP, `Inheritance`, `Polymorphism` and `Abstraction`. There is one last piece of OOP, it is called `Encapsulation`.

`Encapsulation` implies the idea of hiding the content of a Class, but it only exposes what is necessary. We need to restrict the access to our class as much as we can, so that we can change the properties and the behaviors only from inside the class.

## Specs
In WA Software Company, there are two types of staff, developer and Salesperson. Every staff in the company has basic salary depending on his position. Different developer has different programming language skills. They can get $100 more for each skill. The more programming language skills they have, the more salary they can earn. For salespersons, they are responsible to get more project as many as possible. For each each project, they can get 10% commissions of the project cost. The more project they get, the more salary they can earn.

Notes: You should prefix class private variables by '_' symbol to indicate that it is not exposed.

### Staff
1. Create a `Staff` class that accepts `firstname`, `lastname` and `salary` as initial variables.
2. Implement `getter` and `setter` methods.
3. Implement `toString` method to return the details string.

### Project
1. Create a `Project` class that accepts `name` and `cost` as initial varaibles.
2. Implement `getter` and `setter` methods.

### Developer
1. Create a `Developer` class that inherites `Staff`.
    1. accepts `skills` array as initial vaiables.
2. Implement `getter` and `setter` methods of `skills`.
3. Override `getSalary` method to calculate salary.

### Salesperson
1. Create a `Salesperson` class that inherites `Staff`.
    1. accepts `project` array as initial vaiables.
2. Implement `getter` and `setter` methods of `project`.
3. Override `getSalary` method to calculate salary.
