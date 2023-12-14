const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const optionsLeft = document.querySelector("#optionsLeft");
const yourOptions = document.querySelector("#yourOptions");

let randomLetter;
let wins = 0;
let loses = 0;
let guessesLeft = 10;
let guessedLetters = [];

function getRandomElement() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}

function resetGame() {
  guessesLeft = 10;
  guessedLetters = [];
  randomLetter = getRandomElement();
  updateDisplay();
}

function handleKeyPress(event) {
  const userGuess = event.key.toLowerCase();

  if (guessedLetters.includes(userGuess)) {
    return;
  }

  guessedLetters.push(userGuess);

  if (randomLetter === userGuess) {
    wins++;
    alert("Congratulations! You guessed the correct letter!");
    resetGame();
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      loses++;
      alert(
        "Oops! You can not guess letter. The correct letter was '" +
          randomLetter +
          "'."
      );
      resetGame();
    }
  }
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keypress", handleKeyPress);
  resetGame();
});

function updateDisplay() {
  win.textContent = "Wins: " + wins;
  lose.textContent = "Loses: " + loses;
  optionsLeft.textContent = "Guesses Left: " + guessesLeft;
  yourOptions.textContent = "Your Guesses: " + guessedLetters.join(", ");
}
