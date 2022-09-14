"use strict";

// DEFAULT PARAMETERS
// const bookings = [];

// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 100 * numPassengers) {
    
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)

// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 150);




// HOW PASSING ARGUMENT WORKS

// let flight = 'LH234';
// const felix = {
//     name: 'Felix Sam',
//     passport: 2343455668949
// }

// const checkIn = function (flightNum, passenger) {
//     console.log(flightNum);
//     flightNum = 'LH888';
//     console.log(flightNum);
//     // pass by reference gets mutated
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 2343455668949) {
//         // alert('Checked in')
//     } else {
//         // alert('Wrong passport')
//     }
// }

// checkIn(flight, felix);
// console.log(flight);
// console.log(felix);

// Is the same as doing...
// const flightNum = flight;
// const passenger = felix;


// const newPassport = function (person) {
//     console.log(person);
//     person.passport = Math.floor(Math.random() * 222222222);
//     console.log(person);
// };

// newPassport(felix)
// checkIn(flight, felix)

// Javascript does not have pass by reference


/* 
JS treats functions as first-class citizens: means that functions are values
Functions are just another type of objects
We can store functions in variables or properties
Can also pass functions as arguments to other functions
We can also return functions from functions, there are afunction methods

    Higher-order function
A higher order function is a function that receives another function as an argument OR
that returns a new function, or both
This is only possible because of first-class functions


*/


// Functions Accepting Callback functions

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')
// };


// Higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);

// }

// transformer('Javascript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//     console.log('Hello 👋');
// }

// document.body.addEventListener('click', high5)


// function returning functions

// const greet = function (greeting) {
//     return function (name) {
//      console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey')
// greeterHey('Jonas')
// greeterHey('Felix')

// // Using arrow functions
// const gret = greeting => name => console.log(`${greeting} ${name}`);


// gret('Hi')('Felix')



// Call and Apply method

// const airPeace = {
//     airline: 'Air Peace',
//     iataCode: 'AP',
//     bookings: [],

//     book(flightNum, name) {
//         const seatNo = Math.floor(Math.random() * 300) + 1;

//         console.log(`${name} booked a seat number ${seatNo} on ${this.airline} flight ${this.iataCode}${flightNum}`);
        
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, seatNo: seatNo, name})
//     }
// };

// airPeace.book(20, 'Felix Ewulu')
// airPeace.book(230, 'Jonas Smith')
// console.log(airPeace.bookings);


// const eurowings = {
//     airline: 'eurowings',
//     iataCode: 'EW',
    
//     bookings: [],
// }

// const book = airPeace.book;
// does not work
// book(23, 'Natalia wills')


// manually defining the this keyword

// Call method
// The call method calls the book function and sets its othis keyword to eurowings
// book.call(eurowings, 30, 'Phil Jones')
// console.log(eurowings);

// // this keyword points to airpeace
// book.call(airPeace, 349, 'Samoa Joe');
// console.log(airPeace);

// We can now create as many airlines as possible
// const swiss = {
//     airline: 'Swiss Air Line',
//     iataCode: 'SAL',
//     bookings: []
// }

// const virgin = {
//     airline: 'Virgin Air Line',
//     iataCode: 'VAL',
//     bookings: []
// }

// book.call(swiss, 1, 'Cristiano Ronaldo')
// book.call(swiss, 5, 'Strive Masiyiwa')

// book.call(virgin, 30, 'Gladys Ewulu')
// book.call(virgin, 34, 'Chidinma Ewulu')


// THE APPLY METHOD
/* 
It doest receive a list of the arguments, rather it takes an array of the arguments
⭕⭕⭕ NO LONGER USED IN MODERN JAVASCRIPT SYNTAX
*/


// BIND METHOD
/* 
It does not immediately call the function, but returns a new function in which 
the this keyword is BOUND

*/
// book.call(eurowings, 23, 'sam smith')
// const bookEW = book.bind(eurowings);
// const bookAP = book.bind(airPeace);
// const bookswiss = book.bind(swiss);

// bookEW(209, 'Phil Foden')

// predefining a parameter (Partial application)
// const bookAP7 = book.bind(airPeace, 7);
// bookAP7('Felix Ewulu')
// bookAP7('Jonas Philip')
// bookAP7('Samoa jajuar')
// bookAP7('Mike Afor')
// bookAP7('Jobe Ewulu')


// With Event Listeners
// airPeace.planes = 300;
// airPeace.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }

// // airPeace.buyPlane()

// // this is pointing to the element in which the handler is attached to
// document.querySelector('.buy').addEventListener('click', airPeace.buyPlane.bind(airPeace))

// // Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT =  value => value + value * 0.23;

// // The order of the argument is very important
// console.log(addVAT(100));
// console.log(addVAT(30));


// // We use the bind method to create a more specific function from a general function

// // rewriting the code using return function

// const calcTax = (rate) => {
    
//     return function (value) {
//         const addVAT = value + (value * rate);
//         console.log(addVAT);
//     }
// }

// const callFunc = calcTax(0.23);

// callFunc(100);



// Coding Challenge 1
// const pollBtn = document.querySelector('.poll');

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

//     answers: new Array(4).fill(0),

//     registerNewAnswer() {
//         const userAnswer = Number(
//             // Get the answer
//             prompt(
//                 `${this.question}\n${this.options.join('\n')}\n(Write option number)`)
//         );

//         // Register answer
//         typeof userAnswer === 'number' && userAnswer < this.answers.length && this.answers[userAnswer]++;

//         this.displayResults()
//         this.displayResults('string')

//         // console.log(this.answers);
//         // for (const [key, value] of this.options.entries()) {
//         //     // console.log(key, value);
//         //     if (key === userAnswer) {
//         //         this.answers[key]++
//         // console.log(this.answers);

//         //     }
//         // }
//         // return userAnswer;
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }
// }




//     const getUserInput = poll.registerNewAnswer

//     console.log(poll);

//     pollBtn.addEventListener('click', getUserInput.bind(poll))




    // IMMEDIATELY INVOKED FUNCTION EXPRESSION
    /*
     It runs only once
    */

    // (function oneCe () {
    //     console.log('would run just once');
    // })();




// BallonDor vote



const BallonDor = {
  question: "Who is your favourite",
  players: [
    "0: Robert Lewandowski",
    "1: Erling Harland",
    "2: Cristiano Ronaldo",
    "3: Kylian Mbappe",
  ],
  goalKeepers: ["0: De gea", "1: Pickford", "2: Courtous", "3: Ederson"],
  puskas: ["0: Neymar", "1: Richarlson", "2: Anthony", "3: James"],

  playerVotes: new Array(4).fill(0),
  goalKeeperVotes: new Array(4).fill(0),
  puskasVotes: new Array(4).fill(0),

  registerVote() {
    
    //   get user input
    const playerVote = Number(
      prompt(`${this.question} player?\n${this.players.join("\n")}`));
      
    //   check and validate user input
      typeof playerVote === 'number' && playerVote < this.playerVotes.length && this.playerVotes[playerVote]++;   

      console.log(this.playerVotes);
  },
};

BallonDor.registerVote()