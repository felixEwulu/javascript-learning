'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');



// Starting connditions
score0El.textContent = 0;
score1El.textContent = 0;

// images array
// const imagesArray = [
//   'dice-1.png',
//   'dice-2.png',
//   'dice-3.png',
//   'dice-4.png',
//   'dice-5.png',
//   'dice-6.png',
// ];
let currentScore = 0;
let activePlayer = 0;
 
const displayImage = () => {
  // generate a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;
  
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`
    // dice.src = imagesArray[diceNumber];
    // console.log(diceNumber);

  // check for rolled 1
    if (dice !== 1) {
       currentScore += dice;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
    } else {
       document.getElementById(`current--${activePlayer}`).textContent = 0; 
      // we check and return a new active player everytime the score is 1
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
       // swithUser();
    }
}



// rolling dice
btnRoll.addEventListener('click', displayImage);


