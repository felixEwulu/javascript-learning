"use strict";

/* 
 Object Oriented Programming

 It is a programming paradigm based on objects, by using objects, we pack data and the
  corresponding behavior into one block.

  OOP was developed with the goal of organizing code, to make it more flexible and
  easier to maintain.

    Objects are generated using classes.
    A class is a blueprint which we use to create new objects.

    The 4 fundamental principles of OOP

    Abstraction: Ignoring/hiding details that don't matter.

    Encapsulation: keeping properties and methods private inside the class
     so they cant be accesses outside the class


    Inheritance: A child class inherits all the properties and methods of its parent class.

    Polymorphism: A child class can overwrite a method it inherited from a parent class.


    /////////////////////////////
    Javascript implements OOP using prototypal inheritance
    Objects are linked to a prototype object.
    Objects delegate behavior to the prototype object




*/

// Array.prototype is the prototype of all array objects we create in js
// Array.prototype;

// Constructor functions: it is called with the new operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const felix = new Person("Felix", 1998);
const james = new Person("James", 1985);
console.log(felix);
console.log(james);

// Prototypes: Each and every functions in JS has a property called prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// The prototype(__proto__) of felix object is the prototype property of the constructor
james.calcAge();
console.dir(felix.__proto__);

Person.prototype.species = "Homo sapiens";
