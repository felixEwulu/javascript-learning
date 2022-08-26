"use strict";
/* 
Given an array of temperatures of one day, calculate the temperature amplitude. keep in mind
 that sometimes there might be a sensor error.
*/

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// what is temp amplitude? the diff btw the highest and lowest temp.
// How to compute max and min temp?
// whats a sensor error? and what to do?

// 2) Breaking up into sub-problems
// How to ignore errors
// find max value in temp array
// find min value in temp array
// subtract min from max and return it

// const calcTempAmplitude = (temps) => {
//   // we initialize the value of the max to be the first value in the array
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     // max  = 3(before the loop starts)
//     // max = 7
//     // max = 35
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// FUNCTION SHOULD NOW RECEIVE TWO ARRAYS

// const calcTempAmplitudeNew = (t1, t2) => {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     // max  = 3(before the loop starts)
//     // max = 7
//     // max = 35
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([2, 4, 8], [-2, 5, 7]);
// console.log(amplitudeNew);

// DEBUGGING

// const measureKelvin = () => {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree celsius:")),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());
// CODING CHALLENGE

const temperatures_1 = [17, 21, 23];
const temperatures_2 = [12, 5, -5, 0, 4];

// const printForecast = (arr) => {
//   //   let days = 1;
//   let print;

//   for (let i = 0; i < arr.length; i++) {
//     print = `...${arr[i]}oC in ${i + 1}days`;

//     console.log(print);
//   }
// };

//  CORRECTIONS
const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}oC in ${i + 1} days ...`;
  }
  console.log("..." + str);
};
printForecast(temperatures_1);

// const forecast = printForecast(temperatures_2);
// console.log(forecast);
