'use strict'
/* 
A js engine is a computer program that executes js code
Any js engine contains a callstack and a heap
CallStack: where our code is executed using th execution context
Heap: Unstructured memory pull which stores all the objects our app needs

COMPILATION VS INTERPRETATION
Compilation: entire code is converted to machine code at once, and written to a binary file that can
be executed by a computer.
Interpretation: interpreter runs through source code and executes it line by line
Modern js engine uses the Just-in-time(JIT) compilation: entire code is converted into machine code at once
then executed immediately

RUNTIME are functionalitioes provided to the engine, accessible on window object, they 
are called WEB APIs(DOM, Timers, Fetch API) and Callback Queue(onClick, timer, data)

*/

/* 
After compilation JS creates a global execution context(for top-level code i.e codes not inside a function)
Then execution of functions and waiting for callbacks

The CALLSTACK is a place where execution contexts get stacked on top of each other, to keep track of where we 
are in the execution


*/


/* 
Scoping: How our program's variables are organized and accessed. 'where do variables live?' or
where can we access a certain variable, and where not?

Scope: space or environment in which a certain variable is declared. e.g global, function, block scopes.

let and const are block scoped.

Every scope always has access to all the variables from all its outr scopes. This is the scope chain

When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable
its looking for. This is called variable lookup

The scope chain is a one-way street: a scope will never ever access variables of an inner scope

*/

// const myName = 'Felix';

// function first() {
//     const age = 30;

//     if (age >= 30) {
//         const decade = 3;
//         var millenial = true; // variables declared with var are not block scoped but rather function scoped
//     }
//     // An outer scope can never have access to variables in an inner scope

//     function second() {
//         const job = 'teacher';

//         console.log(`${myName} is a ${age}-old ${job}`);
//     }
//     second()
// }

// first();



/* 
THIS keyword/variable: Special variable that is created for every execution context(every ffunction). Takes
the value of(points to) the 'owner' of the function in which the this keyword is used

The value is not static

in simle function call : this = undefined

Arrow fxns do not get their this keyword

Event listener: this = <DOM element that the handler is attached to>


This does not point to the function itself, and also NOT the variable environment




*/

// console.log(this);

// const felix = {
//     name: 'felix',
//     year: 1998,
//     calcAge: function () {
//         return 2022 - this.year; // this points to the OBJECT calling the method
//     }
// }

// console.log(felix.calcAge());

// const calcAge = function () {
//     console.log(this);
// }
// calcAge()

// const calcAgeArrow =  () => {
//     console.log(this); //points to window object
// }
// calcAgeArrow()


// Arrow vs Function expression

// const felix = {
//   firstName: "felix",
//   year: 1998,
//   calcAge: function () {
//     // return 2022 - this.year; // this points to the OBJECT calling the method
      
//     //   solution 1
//     //   const self = this; //preserves the value of this
//     //   const isMillenial = function () {
//     //       console.log(self);
//     //       console.log(self.year);
//     //   }
    
//     // solution 2
//     //
//     // the arrow function gets the this value of the calcAge function0
//       const isMillenial = () => {
//           console.log(this); // uses the this keyword from the parent scope
//           console.log(this.year);
//       }
//       isMillenial();
    
    

//     },
//     greet: function() {
//       console.log(`hey ${this.firstName}`)
//   }
// };
// felix.greet();
// felix.calcAge()

// NEVER USE AN ARROW FUNCTION AS A METHOD



// Primitives vs Objects(Primitive vs Reference Types)
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Felix',
//     age: 25,
// };

// const friend = me; //two identifiers pointing to same value
// friend.age = 32
// friend.name = 'Joe'

// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive types are stored in the call stack
//  reference types are stored in the heap

// The value at a certain memory address is immutable

// objects are stored in the heap because they may be too large to stop in the call stack.

/* 
When a js variable is created, js-engine uses the variable name to create the identifier, then 
a unique address is assigned to it with its corresponding value

*/

let lastName = 'Jay';
let oldLastName = lastName;
lastName = 'Kiaz';
console.log(lastName, oldLastName);

const mabel = {
    firstName: 'Mabel',
    lastName: 'Appiah',
    age: 26,
}
// both variables hold a reference of the address to the heap
const marriedMabel = mabel;

marriedMabel.lastName = 'Koffi';

console.log('Before marriage: ', mabel);
console.log('After marriage: ', marriedMabel);



// Copying objects
const mabel2 = {
    firstName: 'Mabel',
    lastName: 'Appiah',
    age: 26,
}

// it creates a shallow copy of the object
const mabelCopy = Object.assign({}, mabel2);
mabelCopy.lastName = 'Anan'
console.log("Before marriage: ", mabel2);
console.log("After marriage: ", mabelCopy);
















