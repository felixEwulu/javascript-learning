"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//   /*
//   Destructuring is a way of unpacking values from an array/object into variables

//   */
// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({starterIndex, mainIndex, time, address}) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered
//     to ${address} at ${time}`);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   }

// };

// restaurant.orderDelivery({
//   time: '22:00',
//   address: 'Nkelle Onitsha, GRA',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [2, 3, 4];
// const a = arr[0]
// const b = arr[1]
// console.log(b)

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp

// // console.log(main, secondary);

// // switching variables
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// // returns order from object
// console.log(restaurant.order(1, 1));

// // store order in a variable, receives two values from a function
// const [starterCourse, mainCourse] = restaurant.order(1, 1);
// console.log(mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// //  DESTRUCTURING OBJECTS
// // In destructuring objects, we have to specify the property name

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // specifying a new name
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables

// let m = 102;
// let n = 909;
// const obj = { m: 23, n: 10, c: 7 };
// ({ m, n } = obj)
// console.log(m, n);

// // Nested Objects
// const { fri:{open, close} } = openingHours;
// console.log(open, close);

// SPREAD OPERATOR

/* 
It is used to create shallow copies of arrays and also used to merge two arrays
It doesn't work on just arrays but on all iterables
iterables: arrays, strings, maps and sets but not objects
*/
// const arr = [7, 8, 9];
// const newArr = [1, 2, arr[0], arr[1], arr[2]]

// the spread operator
// const newArr = [1, 2, ...arr]
// console.log(newArr);
// console.log(...newArr);

// getting values from the restaurant object

// const newMenu = ['Beans', ...restaurant.mainMenu]
// console.log(newMenu);

//

// copy array
// const mainMenuCopy = [...restaurant.mainMenu]

// join two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// spread operator on strings
// const str = 'Felix';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients)

// Object
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Gusep'
// }
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}

// Rest pattern is used to pack elements into an array

// SPREAD because its on the Right side of =
// const array = [1, 2, ...[3, 4]];

// // REST because its on the left side of =
// // The REST pattern collects the elements that are unused in an array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, otherFood);

// // Objects
// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(fri, weekdays);

// FUNCTIONS

// Rest pattern takes multiple values and packs them into one array
// const add = function (...sumNumbers) {
//   let sum = 0;
//   for (let i = 0; i < sumNumbers.length; i++) {
//     sum += sumNumbers[i];
//   }
//   console.log(sum);
// }

// add(2, 3)
// add(2,3,2,3,4,3,2)

// // calling other Pizza
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// console.log('---- OR ---------');
// // SHORT-CIRCUITING
// restaurant.numGuests = 12;
// const guest1 = restaurant.numGuests || 10;
// console.log(guest1);

// console.log("---- AND ---------");
// console.log(0 && 'felix');

// // it returns false at the first falsy value, and also returns that value
// console.log('hello' && 21 && null && 'felix');

// Nullish Coalescence

// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// CODING CHALLENGE

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neur',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],

//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Gotze'],
//   date: 'Nov 9th, 2022',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 5.4,
//   },
// };

// const { players } = game;
// const [players1, players2] = players;
// console.log(players);

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// const subPlayers1 = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...players1, ...subPlayers1]
// console.log(players1Final);

// // 5.
// const {
//   odds: {team1, x:draw, team2}} = game

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');

// THE FOR-OF loop
// const gameStats = [...players1, ...players2]

// for (const item of gameStats)console.log(item);

// for (const item of gameStats.entries()) console.log(item);
// // using destructuring
// for (const [i, el] of gameStats.entries()) {
//   console.log(`${i + 1}: ${el}`);
// };

// ENHANCED OBJECT LITERALS
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered
//     to ${address} at ${time}`);
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// console.log(restaurant.openingHours);

// Optional Chaining: if a property does not exist, undefined is returned

// returns undefined
// console.log(restaurant.openingHours.mon);

// returns an error : undefined.open
// console.log(restaurant.openingHours.mon.open);

// with Optional chaining
// Only if the propert/properties before the ? exist will the code after the ? sign be read, else it returns undefined/null

// console.log(restaurant.openingHours.tue?.open);
// console.log(restaurant.openingHours.tue?.open);

// EXAMPLE
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   //nullish coalescence is used to restore values
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   const close = restaurant.openingHours[day]?.close;
//   console.log(`On ${day}, we open at ${open}`);
//   console.log(`On ${day}, we close at ${close}`);
//   // console.log(`Restaurant is `);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRice?.(0, 1) ?? "Method does not exist");

// // Arrays
// const users = [
//   {
//     name: "Felix",
//     email: "hello@felix.io",
//   },
// ];
// //  Can be used instead of the traditional if/else
// console.log(users[0]?.name ?? "User array empty");

// /*
// LONGER WAY

// if (users.length > 0) console.log(users[0].name);
//   else console.log('User array empty'); */

// /*
//    LOOPING OBJECTS: OBJECT KEYS. VALUES. AND ENTRIES

//   */

// //  Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `restaurant is open for ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // ENTRIES
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [day, { open, close }] of entries) {
//   console.log(day, open, close);
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

// #CODING CHALLENGE 2😎🙄🤨

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neur",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],

    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Gotze"],
  date: "Nov 9th, 2022",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 5.4,
  },
};

// 1

// let count = 1;

// for (const player of goalScorers) {
//   console.log(`Goal ${count}: ${player}`);
//   count++
// }

// const entries = Object.values(odds)
// console.log(entries);
// Correction

//   const goalScorers = Object.entries(game.scored);
// console.log(goalScorers);

// we make use of an object/ array iterator
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2
// const odds = Object.values(game.odds)
// console.log(odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }

// average /= odds.length

// console.log(average);

// // 3.
// const entries = Object.entries(game.odds);
// // console.log(entries);
// for (const [team, odd] of entries) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   // console.log(team, odd);
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// Sets

/* 
It holds only unique values
There are no key-value pairs
There are no duplicates
Just like an array, they are iterables
*/

// const orderSet = new Set(['Rice', 'Beans', 'egg', 'Beans', 'Rice', 'Yam']);

// // check size
// console.log(orderSet.size);
// // check value
// console.log(orderSet.has('bread'));
// console.log(orderSet.has('egg'));

// // add element
// orderSet.add('Garlic Bread')

// // delete
// orderSet.delete('Rice')
// console.log(orderSet);

// // Example
// const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef'];
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique);

// // checking for unique letters in a string
// console.log(new Set('felixewulu').size);

// // MAPS FUNDAMENTAL
// /*
// A MAP is a data structure that we can use to map values to keys

// */
// const rest = new Map();
// rest.set('name', 'Mr. Biggs');
// rest.set(1, 'Lagos, Nigeria');
// console.log(rest.set(2, 'New York, USA'));

// we can also chain the values
// rest.set('categories', ['Snacks', 'Chinese cuisenes', 'Traditional', 'Alacart'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open🎈🎈')
//   .set(false, 'We are closed💤💤')

// WE USE THE GET METHOD TO READ DATA FROM A MAP
//   console.log(rest.get('categories'));

// const time = 20;
// const checkTime = rest.get(time > rest.get('open') && time < rest.get('close'));
// console.log(checkTime);

// Checking if a map contains a certain key
// console.log(rest.has('categories'));
// rest.delete(2)
// // rest.clear()
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// MAP ITERATION

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try agagin!']

// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(game.odds));

// const oddsMap = new Map(Object.entries(game.odds))
// console.log(oddsMap);

// retrieving values from the new map
// console.log(oddsMap.get('team1'));

// Quiz App
// Looping through mapped items
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'))

// we want to get the value in the key if the answer = 3
// const checkAnswer = question.get(answer === 3);
// const checkAnswer = question.get(question.get('correct') === answer);
// console.log(checkAnswer);

// Convert Map to Array
// console.log(...question);

/* 
Sources from Data:
1) From program itself
2) from the UI(DOM)
3)from external sources

Data strutures is used to store datas

Simple lists -- Arrays or Sets
Key/Value pairs -- Objects or Maps (allow us to describe values)


ARRAYS: Use when you need ordered list of values (might contain duplicate),
        Use when you need to manipulate data due to its numerous array methods

SETS: Use when you need to work with unique values
      Use when high-performance is really important
      Use to remove duplicates from Arrays


OBJECTS: More traditional key/value store
        Easier to write and access value with . and []
        Use when you need to include functions(methods)
        Use when working with JSON


MAPS:   Better performance
        Easy to iterate
        Easy to compute size
        Keys can have any data type
        Use when you simply need to map key to values
        Use when you need keys that are not strings


*/

// Coding Challenge

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())]
// console.log(events);

// // for (const [min, event] of gameEvents.entries()){
// //     console.log(min, event);
// // }

// // 2
// gameEvents.delete(64)
// console.log(gameEvents);

// // 3
// console.log(
//   `An event happened on average, every ${90 / gameEvents.size} minutes`
// );

// // 4
// for (const [min, event] of gameEvents) {
//   let half = 45
//   console.log(`${min <= half ? '[FIRST HALF]' : '[SECOND HALF]'} ${min}: ${event}`);
// }

/* ============== WORKING WITH STRINGS ============ */

const airLine = "Air Peace Nigeria";
const plane = "Boeing-A320";

console.log(plane[0]);
console.log(plane[1]);
console.log("Virgin"[1]);

console.log(airLine.length);
console.log("Virgin".length);

// it gives the first occurence and is case-sensitive
console.log(plane.indexOf("-"));
console.log(plane.indexOf("A320"));

// last index
console.log(airLine.lastIndexOf("a"));

// the slice method returns the position at which the extraction will start

/* 
slice(indexStart, indexEnd)

indexStart: the index of the first character to include in the returned substring
indexEnd: the index of the first character to exclude from the returnded substring

*/
console.log(airLine.slice(4, 9));

// extracting the first word
console.log(airLine.slice(0, airLine.indexOf(" ")));

// extracting the last word
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));
// const airLine = 'Air Peace Nigeria';
console.log(airLine.slice(-2));
console.log(airLine.slice(-7));

// Checking if passenger got the middle seat in an airplane

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s === "B" || s === "E"
    ? console.log("You got the middle seat 😩")
    : console.log("You got lucky😀");
};

checkMiddleSeat("11B");
checkMiddleSeat("33C");
checkMiddleSeat("2E");
checkMiddleSeat("32B");

// Fix capitalization in name
const passenger = "fElIX";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerLower);
console.log(passengerCorrect);

// using a function
const passengerName = (name) => {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

// Comparing emails
const email = "cmekusfelix8@gmail.com";
const loginEmail = "  CmekusFelix8@Gmail.com";

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);

// using a function

const validateMail = (userMail) => {
  const email = "cmekusfelix8@gmail.com";
  const checkUserEmail = userMail.toLowerCase().trim();
  if (checkUserEmail === email) {
    console.log(checkUserEmail);
    console.log("email confirmed");
  } else {
    console.log(checkUserEmail);
    console.log("you entered a wrong email");
  }
};

validateMail("cMEKUSFELIX8@GMAIL.COM");

// replacing
// price of flight in Nigeria(GB)
const priceNGN = "288,97#";

// price in USD
const priceUS = priceNGN.replace("#", "$").replace(",", ".");

console.log(priceUS);

const announcement = `All passengers come to boarding door 15. Boarding door 15 `;

console.log(announcement.replace("door", "gate"));

// using regular expression
console.log(announcement.replace(/door/g, "gate"));

// BOOLEANS
const airPlane = "Airbus A320neo";
console.log(airPlane.includes("A320"));
console.log(airPlane.includes("Boeing"));
console.log(airPlane.startsWith("Air"));

if (airPlane.startsWith("Airbus") && airPlane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Exercise: checking passengers bags
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You anre NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a Pocket KNife");
checkBaggage("A phone and and ear-pod");
checkBaggage("Got some snacks and a GUN for protection");

// SPLIT
console.log("a+very+lovely+language+javascript+is".split("+"));
console.log("Ewulu Emeka Felix".split(" "));

const [firstName, lastName] = "Felix Ewulu".split(" ");
console.log(firstName, lastName);

console.log(`Welcome aboard, Mr ${lastName.toUpperCase()}.`);

// JOIN
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
const capitalizeName = (names) => {
  const arrNames = names.split(" ");
  // console.log(arrNames);
  let newNameArr = [];
  for (const name of arrNames) {
    // console.log(name);
    // const capitalNames = name[0].toUpperCase() + name.slice(1);

    // alternative method
    const capitalNames = name.replace(name[0], name[0].toUpperCase());

    // console.log(capitalNames);
    newNameArr.push(capitalNames);
  }
  console.log(newNameArr.join(" "));
};

capitalizeName(
  "felix joseph ewulu adamma galadima, adamu, james, pishceh, meeha"
);
capitalizeName("felix ewulu");

// Padding a string
const message = "Go to gate 21!";
console.log(message.padEnd(22, "+").padStart(30, "-"));
console.log("Felix".padEnd(22, "+"));

// Masking creditcard details
const maskCreditCard = (number) => {
  const str = number + "";
  const last = str.slice(-4);
  const padStr = last.padStart(str.length, "*");
  return padStr;
};

console.log(maskCreditCard(34859384933));
console.log(maskCreditCard(3495495859484320));
console.log(maskCreditCard(5554045940599449));

// Repeat
const msg = `Bad weather... All Departures Delayed... `;

console.log(msg.repeat(5));

const planesInLine = (n) => {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};

planesInLine(4);
planesInLine(8);
planesInLine(2);

// CODING CHALLENGE

document.body.append(document.createElement("textarea"));
const newElement = document.body.append(document.createElement("button"));

const text = document.querySelector("textarea").value;

/*
underscore_case
 first_name
Some_variable
  calculate_AGE
delayed_departures
 */
// document.addEventListener("click", function () {
//   const txt = text.value.toLowerCase();
//   const listArr = txt.split(" ");
//   const formattedArr = [];
//   for (const list of listArr) {
//     let [first, second] = list.split("_");
//     const upper = second[0].toUpperCase() + second.slice(1);
//     const camelCased = first + upper;
//     formattedArr.push(camelCased)
//     // console.log(camelCased);
//   }

//   console.log(formattedArr);
 
// });

// underscore_case;
// first_name;
// Some_variable;
// calculate_AGE;
// delayed_departures;


// CORRECTIONS
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }

})




