"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

  /* 
  Destructuring is a way of unpacking values from an array/object into variables
  
  */
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};


const arr = [2, 3, 4];
const a = arr[0]
const b = arr[1]
console.log(b)

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp

// console.log(main, secondary);

// switching variables 
[main, secondary] = [secondary, main]
console.log(main, secondary);

// returns order from object
console.log(restaurant.order(1, 1));

// store order in a variable, receives two values from a function
const [starterCourse, mainCourse] = restaurant.order(1, 1);
console.log(mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);



//  DESTRUCTURING OBJECTS
// In destructuring objects, we have to specify the property name

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// specifying a new name
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables

let m = 102;
let n = 909;
const obj = { m: 23, n: 10, c: 7 };
({ m, n } = obj)
console.log(m, n);

// Nested Objects
const { fri:{open, close} } = openingHours;
console.log(open, close);
















