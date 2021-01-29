## Background & Objectives
- Understand the difference between class and instance method.
- Understand when to use class or instance method.
- Use `static` to declare class method.

## Specs
In this exercise, we are going to make a `Member` class. For each new member, the system will assign a member id. Memeber id is a 8 digits string, and it is generated based on the number of member. for example, the first member's id should be `00000001`.

1. Create a `Member` class that takes `firstname` and `lastname` as initial variables.
    1. When a new member is created, a new member id should be generated, so it can be retrieved via `getId` method.
2. Implement a static method `generateId` to return new member id.
2. Implement `getter` and `setter` methods.
3. Implement `getId` method to get member id.
4. Implement `getInfo` method to print out member details.