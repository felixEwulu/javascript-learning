// STRICT MODE
/* 
Stric mode allows us write more secured javascript codes
it prevents accidental errors
it creates visibe errors which are not so obvious if not enabled
*/
"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }

// FUNCTIONS
/* 
The fundamental building blocks of real world js apps are functions
A function is a reusable piece of code, just like a variable, but functions are chunks of codes
A variable holds values, while functions can hold one or more complete lines of codes
Parameters are variables that are SPECIFIC to the function being declared
the return keyword returns any value from the function
parameters are paceholders
*/

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(6, 0);
// const orangeJuice = fruitProcessor(0, 8);

// console.log(appleJuice, orangeJuice);

// function decarations
// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge(1998);
// console.log(age1);

// function expressions / anonymous function
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName}, ${age} years, retires in ${retirement} years`;
// }

// const retirementAge = yearsUntilRetirement(1998, 'Felix');
// console.log(retirementAge);

// // CALLING FUNCTION FROM ANOTHER FUNCTION
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// // CODING CHALLENGE #1
// const calcAvg = (a, b, c) => {
//     return (a + b + c) / 3;
// }

// const avgDolphins = calcAvg(23, 34, 27);
// const avgKoalas = calcAvg(85, 54, 41);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= (2 * avgKoalas)) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//         // return avgDolphins;
//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//         // return avgKoalas;
//     } else {
//         console.log('No team wins');
//     }

// }

// checkWinner(avgDolphins, avgKoalas);

// ARRAYS
/* 
Arrays are like a big container where we can keep variables and later reference them
*/
// In each position in the [a, b, c], js expects an EXPRESSION, so we can do calculations
// const friends = ['Michs', 'Dave', 'Bob'];

// console.log(friends);

// // const years = new Array(1991, 1998, 2005, 2020);
// // console.log(years);

// // we use the square brackets to get elements from an array
// console.log(friends[0]);
// // the length property in an array is not zero-based, it gives the actual length of an array
// console.log(friends.length);
// // The [] can also hold an expression that evaluates to a value
// console.log(friends[friends.length - 1]);

// //  we can mutate an array
// // NB: only primitive values are immutable but arrays are non-primitive values, hence can be mutated
// friends[2] = 'Jasmine';
// console.log(friends);

// const firstName = 'Felix';
// const felix = [firstName, 'Ewulu', 2022 - 1998, 'Software Engineer at Google', friends];
// console.log(felix);
// let stretch = felix[felix.length - 1][1]
// // stretch = stretch[1]
// console.log(stretch);

// EXERCISE
// const calcAge = (birthYear) => {
//     return 2022 - birthYear;
// }

// const years = [1998, 2000, 1996, 1994];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

// ARRAY METHODS
// push method adds element to the end of an array
// const pals = ['Steve', 'Justin', 'Mike']
// pals.push('Teekay');
// pals.unshift('Jay')
// console.log(pals);
// pals.pop() //it returns the removed element
// pals.shift() // it returns the element removed in the first position
// pals.indexOf('steve') // it returns the position of an item in an array

// pals.includes('Anny'); // returns true if the item Anny is in the array and false if otherwise
// if (pals.includes('Justin')) {
//      console.log(`You have a prayerful friend`);
//  }

// CODING CHALLENGE #2

// const calcTip = (bill) => {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//     return tip;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(tips);
// console.log(total);

// OBJECTS
// WE GET undefined when we try to access property that does not exist in an object

// const felix = {
//   firstName: "Felix",
//   lastName: "Ewulu",
//   age: 2022 - 1998,
//   job: "Software Engineer",
//   friends: ["Steve", "Joseph", "Mike"],
// };
// console.log(felix['friends']['friends'.length]);
// // the dot notation expects an already defined property name
// // while the bracket expects the expression

// console.log(felix.lastName);
// console.log(felix["lastName"]);

// const nameKey = "Name";

// // when we need to first compute the property name, use the bracket notation
// console.log(felix["first" + nameKey]);
// console.log(felix["last" + nameKey]);

// // const interestedIn = prompt('What do you want to know about Felix? Choose between firstName, lastName, age, job, and friends')
// // console.log(felix[interestedIn]);
// // when a property does not exist in an object, js returns undefined

// // if (felix[interestedIn]) {
// //     console.log(felix[interestedIn]);
// // } else {
// //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// // }

// console.log(`${felix.firstName} has ${felix.friends.length} and his best friend is called ${felix.friends[0]}`);

// OBJECT METHODS

// const felix = {
//   firstName: "Felix",
//   lastName: "Ewulu",
//   birthYear: 1998,
//   job: "Software Engineer",
//   friends: ["Steve", "Joseph", "Mike"],

//   calcAge: function () {
//     this.age = 2022 - this.birthYear; //created a new property
//     return this.age;
//   },

//   getSummary: function () {
//     return `My name is ${this.firstName}, I am ${this.age} years old, I am currently a ${this.job} and have ${this.friends.length} best friends`;
//   },

// calcAge: function (birthYear) {
//     return 2022 - birthYear;
// }

// calcAge: function () {
//     // console.log(this);
//     // 'this refers to the object calling the method'
//     return 2022 - this.birthYear;
// }
// };
// console.log(felix.calcAge());
// // We have to cal the method once before using the this keyword used to create a new property
// console.log(felix.age);
// console.log(felix.age);
// console.log(felix.age);
// console.log(felix.age);
// console.log(felix['calcAge'](1998))

// console.log(felix.getSummary());

// CODING CHALLENGE #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// // mark is the object calling the BMI
// console.log(mark.calcBMI(), john.calcBMI());

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI ${mark.BMI} is greater than ${john.fullName}'s ${john.BMI}`
//   );
// }

//  LOOPS
/* 
    loops allow us to automate repetitive tasks
    A loop has 3 parts:
    1) initial value of counter
    2) A logical evaluation before each iteration of the loop
*/

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     // the variable we defined is available in the code block, hence we can easily reference it
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// one of the commonest use of for loop is to loop through an array

// const felix = [
//   "Felix",
//   "Ewulu",
//   2022 - 1998,
//   "Software Engineer at Google",
//   ["Steve", "Mike", "Josh"],
// ];
// const itemType = [];
// for (let i = 0; i < felix.length; i++) {
//   itemType.push(typeof felix[i]);

//   //   console.log(felix[i],);
// }
// console.log(itemType);

// const years = [1994, 1996, 1998, 2000, 2004];
// let ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// CONTINUE AND BREAK

/* 
The continue statement is used to end the current iteration in a for loop and continues to the next iteration

It causes the loop to immediately jump to the next iteration of the loop

THE BREAK STATEMENT *JUMPS OUT* of a loop, the continue statement *JUMPS OVER* one iteration of the loop
*/

// console.log("----------ONLY NON-STRINGS -----------");
// for (let i = 0; i < felix.length; i++) {
//   if (typeof felix[i] == "string") {
//     continue;
//   }
//   console.log(felix[i], typeof felix[i]);
// }

// console.log("----------ONLY NUMBERS -----------");
// for (let i = 0; i < felix.length; i++) {
//   if (typeof felix[i] === "number") {
//     break;
//   }

//   console.log(felix[i], typeof felix[i]);
// }

// LOOPING BACKWARDS
// const felix = [
//   "Felix",
//   "Ewulu",
//   2022 - 1998,
//   "Software Engineer at Google",
//   ["Steve", "Mike", "Josh"],
// ];

// for (let i = felix.length - 1; i >= 0; i--) {
//   console.log(i, felix[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weigth repetition ${rep}`);
//   }
// }

// WHILE LOOPS
// we can only specify a condition in a while loop
// a while loop is used if we dont know when the iteration would end
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weigth repetition ${rep}`);
//   rep++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// // console.log
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end...");
//   }
// }

//  CODING CHALLENGE

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

// let sum = 0;
// for (let i = 0; i < totals.length; i++) {
//   sum = sum + totals[i];
// }
// console.log(sum);

// // console.log(average);

// const calcAverage = (arr) => {
//   return arr / totals.length;
// };
// console.log(calcAverage(sum));

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(tips));
