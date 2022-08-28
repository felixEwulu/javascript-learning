'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value = 25);
const checkInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scores = document.querySelector('.score');
const again = document.querySelector('.again');
const highscoreInput = document.querySelector('.highscore');

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
// console.log(number);

let score = 20;
let highscore = 0;
const displayMessage = (msg) => {
    message.textContent = msg;  
 }


checkBtn.addEventListener('click', function () {
  const guess = Number(checkInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    // message.textContent = '⛔ No number!';
      displayMessage('⛔ No number!');
  }else if (guess < 1 || guess > 20) {
    //   message.textContent = '⛔ Enter a number between 1 and 10';
      displayMessage('⛔ Enter a number between 1 and 10');

    //   when player wins
  } else if (guess === secretNumber) {
    //   message.textContent = '🎉 Correct Number';
      displayMessage('🎉 Correct Number');
      number.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347'; 
      number.style.width = '30rem';
     
      if (score > highscore) {
          highscore = score;
        highscoreInput.textContent = highscore
      }
      
    //   when guess is wrong
  } else if (guess !== secretNumber) {
        if (score > 1) {
            // message.textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
          score--;
          scores.textContent = score;
        } else {
        //   message.textContent = '💥 You lost the game';
            displayMessage('💥 You lost the game');
          scores.textContent = 0;
        }
  }
      
//   else if (guess > secretNumber) {
//       if (score > 1) {
//          message.textContent = '📈 Too high';
//          score--;
//          scores.textContent = score; 
//       } else {
//           message.textContent = '💥 You lost the game';
//           scores.textContent = 0;
//       }
      
//     //   when guess is too low
//   } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     message.textContent = '📉 Too low';
    //     score--;
    //     scores.textContent = score;
    //   } else {
    //     message.textContent = '💥 You lost the game';
    //     scores.textContent = 0;
    //   }
      
  

   
});
// The function would not be called immediately, but JS engine calls it when the event happens(a click)

again.addEventListener('click', function () {
    // we want to preserve the highscore without reloading the browser
//   window.location.reload();
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log(secretNumber);
    // message.textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    checkInput.value = '';
    number.textContent = '?';
    scores.textContent = score;
     document.querySelector('body').style.backgroundColor = '#222';
     number.style.width = '15rem';

})

