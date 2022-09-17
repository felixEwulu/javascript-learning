'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array methods

// Methods are functions attached to objects, meaninig that arrays are objects

// slice: extract part of an array without mutating/changing the parent array
// let arr = ['a', 'b', 'c', 'd', 'e']

// console.log(arr.slice(2));
// // console.log(arr);
// console.log(arr.slice(1, 3));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-3, -1));
// console.log(arr.slice(1, -2));

// // we use slice to create a shallow copy of an array without passing any argument to it
// console.log(arr.slice());


// SPLICE: it mutates the original array

// console.log(arr.splice(2));
// The extracted elements are gone from the original array
// console.log(arr);

// Splice is commonly used to remove the last element in an array
// arr.splice(-1)
// console.log(arr);

// The second argument gives the number of array element to be deleted
// arr.splice(1, 2)
// console.log(arr);

// // Reverse: It mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e']
// const arr2 = ['x', 'i', 'l', 'e', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);


// CONCAT: does not mutate any of the original array
// const letters = arr.concat(arr2)
// console.log(letters);
// // same as 
// console.log([...arr, ...arr2 ]);


// // JOIN:
// console.log(letters.join(' - '));



//  The new at method
// const arr = [23, 11, 13, 45];
// console.log(arr[1]);
// console.log(arr.at(1));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// // using the at method
// console.log(arr.at(-1));

// // It  also works on strings
// console.log('felix'.at(0));
// console.log('felix'.at(-1));





// Looping over array with ForEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // using a for-of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// using forEach: first value is current element, second is index, third is the array
// console.log('----------FOREACH----------');

// // It passes the element, the index and the entire array we are looping
// movements.forEach(function (mov, i, arr ) {
//    if (mov > 0) {
//      console.log(`Movement ${i + 1}: You deposited ${mov}`);
//    } else {
//      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//    }
// })

// 0: function(200)
// 1: function(450)
// 2: function(400) ... till the last element of the array

//  we use a callback function to tell a higher order function what to do

/* 
NB: You cannot break out of a forEach loop(continue and break statement does not work)



*/



//  FOREACH WITH MAPS AND SETS

// We are explicitly defining the values and keys
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



// set
/* 
A set neither has keys or indexes

*/

const uniqueCurrencies = new Set(['USD', 'EUR', 'GBP', 'EUR', 'USD'])
console.log(uniqueCurrencies);

uniqueCurrencies.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
})