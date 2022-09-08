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

// const goalScorers = game.scored;
// console.log(goalScorers);
// let count = 1;

// for (const player of goalScorers) {
//   console.log(`Goal ${count}: ${player}`);
//   count++
// }


// const entries = Object.values(odds)
// console.log(entries);
// Correction



// const entries = Object.entries(game.scored);
// console.log(entries);

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}



// 2
const odds = Object.values(game.odds)
console.log(odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}

average /= odds.length

console.log(average);


// 3.
const entries = Object.entries(game.odds);
console.log(entries);
for (const [team, odd] of entries) {
  console.log(team, odd);
}









