"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

//  Function to display messages
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// Function to display score
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
// Function to change the background color of the body
const displayBodyStyle = function (style) {
  document.querySelector("body").style.backgroundColor = style;
};
// Function to change the width of the number display
const displayNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};
// Event listener for the "Check" button

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input

  if (!guess) {
    displayMessage("⛔ No Number!");
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    // Change the background color and style
    displayBodyStyle("#60b347");
    displayNumberWidth("30rem");
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  displayBodyStyle("#222");
  displayNumberWidth("15rem");
});
