"use strict";

// const initGame = confirm("Shall we play rock, paper and scissors");
// if (initGame) {
//   const playGame = prompt("Enter rock, paper or scissors");
//   if (playGame) {
//     console.log("play");
//   } else {
//     console.log("dont");
//   }
// } else {
//   console.log("next time");
// }

const initGame = () => {
  const startGame = confirm("Shall we play rock, paper and scissors");
  startGame ? playGame() : console.log("next time");
};

function playGame() {
    
  console.log("dd");
}

initGame();
