'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct number🥳';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  // no input
  if (!guess) {
    displayMessage('🚫no number');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      // document.querySelector('.highscore').textContent=highScore;
      // document.querySelector('.highscore').textContent=highScore;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too high ' : '📉 too low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭You lost the game ');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// implement game reset functionality
/*
1.select again
2.restore intial values of score and number variables
3.also intial conditions of message,number,score and guess input field
4.restore original background #222 and number with width (15rem)
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
