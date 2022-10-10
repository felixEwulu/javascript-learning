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
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const felix = new Person("Felix", 1998);
// const james = new Person("James", 1985);
// console.log(felix);
// console.log(james);

// // Prototypes: Each and every functions in JS has a property called prototype
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// // The prototype(__proto__) of felix object is the prototype property of the constructor
// james.calcAge();
// console.dir(felix.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// Person.prototype.species = "Homo sapiens";




// // Prototypal inheritance on built-in objects

// const arr = [2, 2, 2, 4, 5, 6, 6, 6, 7];
// console.log(arr.__proto__);


// //  Coding Challenge
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
  
//   console.log(`${this.make} speed now ${this.speed += 10}km/hr`);
// }

// Car.prototype.brake = function () {
//   console.log(`speed reduced to ${this.speed -= 5}km/hr`);
// }

// const BMW = new Car('BMW', 120)
// const mercedes = new Car('Mercedes', 95)
// console.log(BMW);


// BMW.accelerate()
// BMW.accelerate()
// BMW.brake();
// BMW.accelerate()

// mercedes.accelerate()


//    ES6 CLASSES

// class PersonCl  {
//   constructor(fullName, birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }
//   // Set a property that already exist
//    set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert('not a full name')
//   }
  
//   get fullName() {
//     return this._fullName
//   }

//   // Static method not available on the object prototype
//   static hey() {
//     console.log('Hello there');
//     console.log(this);
//   }

// }
// PersonCl.hey()
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.fullName);
// console.log(jessica);
// console.log(jessica.age);
// jessica.calcAge()
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// Classes are executed in strict mode




// GETTERS AND SETTERS

// const account = {
//   owner: 'Felix',
//   movements: [200, 520, 120, 340],

//   get latest() {
//     return this.movements.slice(-1).pop()
//   },

//   set latest(mov) {
//     this.movements.push(mov)
//   }



// }

// account.latest = 20
// console.log(account.latest);
// console.log(account.movements);



// // Coding Challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }

//   brake() {
//     this.speed -= 5;
//   }


//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }


// }


// const ford = new CarCl('Ford', 120)
// ford.speedUS = 50
// console.log(ford);





// //  INHERITANCE BETWEEN CLASSES


const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// Person.prototype.species = "Homo sapiens";

// // Student inherits from person
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear)
//   this.course = course
// }
// // Object.create defines prototype manually
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
// console.log(Student.prototype);
// console.log(Student.__proto__);
// const mike = new Student('Mike', 1994, 'Medicine')
// console.log(mike.__proto__);
// console.log(mike);

// console.log(mike instanceof Student);
// Student.prototype.constructor = Student;


// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make
// }

//  Car.prototype.accelerate = function () {
  
//   console.log(`${this.make} speed now ${this.speed += 10}km/hr`);
// }

// Car.prototype.brake = function () {
//   console.log(`speed reduced to ${this.speed -= 5}km/hr`);
// }

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge

// }

// // link the prototype
// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`Charging..... ${this.charge}%`);
// }

// EV.prototype.accelerate = function () {
//   console.log(`${this.make} accelerates from ${this.speed} to ${this.speed += 20}
//       Charge decreased from ${this.charge}% to ${this.charge -= 1}%🚗`);
// }



// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// // console.log(tesla);
// tesla.accelerate()
// tesla.accelerate()
// tesla.chargeBattery(90);
// tesla.brake()

// tesla.accelerate();



//  INHERITANCE IN ES6 CLASSES

// class PersonCl  {
//   constructor(fullName, birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }
//   // Set a property that already exist
//    set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert('not a full name')
//   }
  
//   get fullName() {
//     return this._fullName
//   }

//   // Static method not available on the object prototype
//   static hey() {
//     console.log('Hello there');
//     console.log(this);
//   }

// }

// class StudentCl extends PersonCl{
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }



// }

// const martha = new StudentCl('Marth Jones', 2012, 'Computer Science');

// martha.introduce()
// martha.calcAge()
// console.log(martha.__proto__);


class Account {
  // Public fields
  locale = navigator.language;
  
  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public interface of object

  // Public methods
  getMovements() {
    return this.#movements;
  }


  deposit(val) {
    this.#movements.push(val);
    return this
  }

  withdraw(val) {
    this.deposit(-val);
    return this
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this
    }
  }
  // Private method
  #approveLoan(val) {
    return true;
  }

}



const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(220)
acc1.withdraw(20)
acc1.requestLoan(300)
console.log(acc1.getMovements())
console.log(acc1);



// Encapsulation: Protected properties and method





// Chaining methods
//  We first need to return this.
// acc1.deposit(200).deposit(500).withdraw(70).requestLoan(30)
// console.log(acc1.getMovements());


// //  Class summary
// class Student extends Person{
//   university = 'University of Nigeria, Nsukka';
//   #studyHours = 0;
//   #course;
//   static numSubjects = 10;

//   constructor(fullName, birthYear, startYear, course) {
//     super(fullName, birthYear);
//     this.startYear = startYear;
//     this.#course = course;
//   }

//   introduce() {
//     console.log(`I study ${this.#course} at ${this.university}`);
//   }

//   study(h) {
//     this.#makeCoffee();
//     this.#studyHours += h
//   }

//   #makeCoffee() {
//     return`Here is a coffee for you`
//   }

//   get testScore() {
//     return this._testScore;
//   }

//   set testScore(score) {
//     this._testScore = score < 20 ? score : 0;
//   }


//   static printCurriculum() {
//   console.log(`There are ${this.numSubjects} subjects`);
// }

// }

// const student = new Student('Felix', 1998, 2017, 'Pharmacy')

// student.introduce()



// #Coding challenge

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make
}

class EVCl extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge;
    
  }
  
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
     console.log(`${this.make} accelerates from ${this.speed} to ${this.speed += 20}
      Charge decreased from ${this.#charge}% to ${this.#charge -= 1}%🚗`);
}

}



const rivian = new EVCl('Rivian', 120, 23)

console.log(rivian.__proto__);


// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge

// }

// // link the prototype
// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`Charging..... ${this.charge}%`);
// }

// EV.prototype.accelerate = function () {
//   console.log(`${this.make} accelerates from ${this.speed} to ${this.speed += 20}
//       Charge decreased from ${this.charge}% to ${this.charge -= 1}%🚗`);
// }



// const tesla = new EV('Tesla', 120, 23);
// console.lo