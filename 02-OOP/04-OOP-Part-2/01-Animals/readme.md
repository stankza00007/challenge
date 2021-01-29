## Background & Objectives

`Inheritance` is a core concept of OOP. It allows us to "transfer" methods by defining subclasses (children) that inherit from superclasses (parents). A child class will inherit from its parents' methods.

Using the technique of Inheritance, we can have `Polymorphism`, which is the state where an object can take the shape of many different forms, and lets us do the right thing at the right time. for example, we knows that `Dog` is a subclass of `Animal` and it can make `bark` sound;`Cat` is also a subclass of  `Animal`
and it can make `meow` sound.

We are going to create `Animal` class as the base class. In `Animal` class, we define some typical behaviors of animal can do, like `speak` and `eat`. The process of design our `Animal` class is call `Abstraction`.

In our subclasses of `Animal`, we are going to do `Method Overriding` to define subclasses `speak` method instead of the default `Animal` one.

## Specs

### Animal
1. Create a `Animal` class
2. Define the `speak` method.
3. Implement the `eat` method.

### Dog
1. Create a `Dog` class, which is inherited from `Animal` class.
2. Override the `speak` method, which is return `bark`.

### Duck
1. Create a `Dog` class, which is inherited from `Animal` class.
2. Override the `speak` method, which is return `quack`.

### Cat
1. Create a `Cat` class, which is inherited from `Animal` class.
2. Override the `speak` method, which is return `meow`.

## Further Suggestions & resources
1. Inheritance, inherite parents' states and behaviour instead of repeating your code.
2. Polymorphism, subclasses may have different forms of the same behavior. e.g. Dog speaks `bark`, Cat speaks `meow`, Duck speaks `quack`.
3. Abstraction, find the common properties and behaviours. e.g. Animal can `speak`, `eat` and `breath`, etc.
4. Method Overriding, same method but different implementation.