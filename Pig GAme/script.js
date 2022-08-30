'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const scoreReset = document.querySelectorAll('.score');
const currentScoreReset = document.querySelector('.current-score');
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

let currentScore, activePlayer, scores, playing;


const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  
     diceEl.classList.add('hidden');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
}
init();

const switchPlayer = () => {
     document.getElementById(`current--${activePlayer}`).textContent = 0;
     // we check and return a new active player everytime the score is 1
     activePlayer = activePlayer === 0 ? 1 : 0;
     currentScore = 0;
     player0El.classList.toggle('player--active');
     player1El.classList.toggle('player--active');
}

const displayImage = () => {
  if (playing) {
    // generate a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // dice.src = imagesArray[diceNumber];
    // console.log(diceNumber);

    // check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      // swithUser();
    }
  }
}



// rolling dice
btnRoll.addEventListener('click', displayImage);

btnHold.addEventListener('click', function () {
  if (playing) {
    
    //  1. Add current score to active player's score;
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    // document.getElementById
    //  2. check if score is at least 100
    if (scores[activePlayer] >= 10) {
      //  finish the game
      playing = false
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
       diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
  

  // switch to next player
  
 })

// const resetGame = (e) => {
//   playing = true
//   e.textContent = 0;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--winner');
  

//  }

// reset game
btnNew.addEventListener('click', init);












