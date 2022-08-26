let year = '3';
const PI = 3.1415;

// write descriptive variable names
let myFirstJob = 'Coder';
let myCurrentJob = 'Designer';
console.log(myFirstJob);

// Data Types...

/*
 Undefined: value taken by a variable that is not yet defined{empty value} 

Javascript has dynamic typing: we dont have to manually define the data type of the value stored
in a variable. instead, data types are determined automatically.
In js, it is values that have a TYPE and not variable
*/

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'yea';
console.log(typeof javascriptIsFun);




// let, const and var
/* 
we use let to declare variables that can change later, during the execution of our program
const creates a variable that cannot be changed(immutabe)


*/

// let age = 30;
// mutates the age variable
// age = 31



// Opertors
/* 
types: mathematical, assignment logical, comparison
*/
// Mathematical operators
const now = 2022;
const ageFelix = now - 1998;
const ageIfey = now -2000;
console.log(ageFelix, ageIfey);
console.log(ageFelix * 2, ageIfey / 11, 4 ** 3);
// 4 ** 3 means 4 to the power of 3 i.e 4 * 4 * 4

// Assignment Operators
/* let x = 10 + 5; // 15
x += 10 // x = x + 10
x++;
x++;
x--;
console.log(x); */

// Comparison
// console.log(ageFelix > ageIfey);
// console.log(ageIfey >= 18);

// OPERATOR PRECEDENCE
/* 
mathematical operators are evaluated left to right
assignment operators are evaluated right to left
mathematical operators have a higher precedence than an assignment operator, so js executes it first before the assigning.
*/
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// CODING CHALLENGE #1
/* const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const BMI_JOHN = weightJohn / (heightJohn ** 2);
const BMI_MARK = weightMark / (heightMark ** 2)


const markHigherBMI = BMI_MARK > BMI_JOHN;
console.log(BMI_JOHN, BMI_MARK, markHigherBMI);

const weightMark_2 = 95;
const heightMark_2 = 1.88;
const weightJohn_2 = 85;
const heightJohn_2 = 1.76;

const BMI_MARK_2 = weightMark_2 / (heightMark_2 ** 2);
const BMI_JOHN_2 = weightJohn_2 / (heightJohn_2 ** 2);

const markHigherBMI_2 = BMI_MARK_2 > BMI_JOHN_2;
console.log(BMI_JOHN_2, BMI_MARK_2, markHigherBMI_2);

 */

// STRINGS
const firstName = 'Felix',
    job = 'Pharmacist',
    birthYear = 1998,
    currentYear = 2022;

const felix = `I'm ${firstName} a ${currentYear - birthYear} year old ${job}`;

console.log(felix);

// template literal is used to create multi-line strings
console.log(`this is 
a multiple
line string...`);

console.log(`
               #  #   #
             #   #  #    #
            #  #   #  #    #
                #   #     #
             #     #      #
               #   #    #
                  #  #`)




    
  // TAKING DECISION
// const age = 17;
// const isOldEnough = age >= 18;
// if(isOldEnough){
//     console.log(`Sasha can start driving License 🚙`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sasha is too young, wait another ${yearsLeft} years.`);
// }

// // A variabel defined in a code block is only accessible inside that code block
// const birth_year = 2001;
// let century;

// if (birth_year <= 2000) {
//     century = 20;
// } else {
//      century = 21;
// }
// console.log(century);

// // CODING CHALLENGE #2
// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const BMI_JOHN = weightJohn / heightJohn ** 2;
// const BMI_MARK = weightMark / heightMark ** 2;

// if (BMI_JOHN > BMI_MARK) {
//     console.log(`John's BMI (${BMI_JOHN.toFixed(2)}) is higher than Mark's (${BMI_MARK.toFixed(2)})`);
// } else {
//     console.log(`Mark's BMI (${BMI_MARK.toFixed(2)}) is higher than John's (${BMI_JOHN.toFixed(2)})`);
// }




// TRUTHY AND FALSY VALUES

//  5 falsy values: 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Felix'));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(undefined)); */

// js implicitly converts non-boolean values to boolean before evaluating.
// const money = 100;
// if (money) {
//     console.log('Spend it');
// } else {
//     console.log('Go get a job');
// }


// Equality Operators
/* const age = '18';
if (age === 18) console.log('You just became an adult (strict equality)');
if (age == 18) console.log('You just became an adult(loose equality)');

const favourite = Number(prompt(`What's your favourite number?`));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 7) console.log('Number of legendary footballers'); */




// BOOLEAN LOGIC: A branch of computer science that uses true/false values to solve complex problems

const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sasha is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// CODING CHALLENGE #3
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);
const minScore = 100;

if (averageDolphins === averageKoalas && averageDolphins >= minScore && averageKoalas >= minScore) {
    console.log('No winner, both teams have the same average score');
} else if (averageDolphins > averageKoalas && averageDolphins >= minScore) {
    console.log(`Team dolphin: ${averageDolphins.toFixed(2)}, Team kaolas: ${averageKoalas.toFixed(2)}. 
                Team dolphin wins!`);
} else if (averageKoalas > averageDolphins && averageKoalas >= minScore ) {
    console.log(`Team dolphin: ${averageDolphins.toFixed(2)}, Team kaolas: ${averageKoalas.toFixed(2)}. 
                Team Koalas wins!`);
} else console.log(`Both teams didn't score above the minimum score`);




//  SWITCH STATEMENT
const day = 'sunday';

switch (day) {
    case 'monday': //day === monday
        console.log('Plan the week');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':  //day === tuesday
        console.log('Prepare theory examples');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
        
}


// STATEMENTS AND EXPRESSIONS
/* 
An expression is a piece of code that produces a value e.g 3 + 4, 
A statement is a bigger piece of code executed that does not produce a value;
statements are like full sentences that produces action.

In a template literal, javascript expects an expression
*/
const me = 'Hello';
console.log(`I'm ${2023 - 1992} years old`); //an expression was passed into the template literal

// NB: An expression always produce a value and we can store that value in a variable
// TERNARY OPERATOR: ideal where js expects an expression
const age = 14;
// the conditional in a ternary operator is an expression, hence can be passed to a variable
const drink = age >= 18 ? 'Wine🥂' : 'Water😂';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "Wine🥂"; 
} else {
   drink2 = "Water😂"; 
}

console.log(`I like to drink ${age >= 18 ? 'Wine🥂' : 'Water😂'}`);



// CODING CHALLENGE #4
const bill = 40;
// the value of the ternary operator is assigned to the tip variable
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// the && comparison is used because we want to strictly meet those conditions
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);







