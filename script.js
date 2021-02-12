let playerScore = 0;
let computerScore = 0;
let gameScore = String(playerScore) + " to " + String(computerScore);

const playerScoreBox = document.getElementById("your-score-box");
const computerScoreBox = document.getElementById("computer-score-box");
const resultsOutputBox = document.querySelector(".results-output-box");
const optionButtons = document.querySelectorAll(".option-button");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const resultsContainer = document.querySelector('.results-container')

const newGame = document.createElement('button');
newGame.textContent = `Play again`;

// Function that plays a game of RPS
function playGame(playerSelection, computerSelection) {
  playerSelection = this.id;
  computerSelection = computerPlay();


    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" &&
        computerSelection === "paper" &&
        (computerScore <= 5 || playerScore <= 5))
    ) {
      playerScore++;
      playerScoreBox.textContent = `${playerScore}`;
      resultsOutputBox.textContent =
        "You Won! " +
        capitalize(`${playerSelection}`) +
        " beats " +
        capitalize(`${computerSelection}`);
        if (playerScore >= 5) {
            optionButtons.forEach((btn) => btn.removeEventListener("click", playGame));
            optionButtons.forEach((btn) => btn.classList.remove('option-button'));
            optionButtons.forEach((btn) => btn.classList.add('option-button-end-game'));
            resultsOutputBox.textContent = 'You Won! WOOHOOO'
            playNewGame();
        }
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" &&
        computerSelection === "rock" &&
        (computerScore <= 5 || playerScore <= 5))
    ) {
      computerScore++;
      computerScoreBox.textContent = `${computerScore}`;
      resultsOutputBox.textContent =
        "You Lost! " +
        capitalize(`${computerSelection}`) +
        " beats " +
        capitalize(`${playerSelection}`);
        if (computerScore >= 5) {
            optionButtons.forEach((btn) => btn.removeEventListener("click", playGame));
            optionButtons.forEach((btn) => btn.classList.remove('option-button'));
            optionButtons.forEach((btn) => btn.classList.add('option-button-end-game'));
            resultsOutputBox.textContent = 'You Lost! Try Again'
            playNewGame();
        }
    } else {
      resultsOutputBox.textContent = "You Tied!";
    }
}

// Function that randomly returns one of Rock, Paper or Scissors
function computerPlay() {
  let gameOptions = ["rock", "paper", "scissors"];
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// Function that will play a new game (pop up button, resets game)
function playNewGame() {
    resultsContainer.appendChild(newGame);

}

// Function that refreshes page
function refreshPage() {
    window.location.reload();
}


// Determines ifthe game is over
function isGameOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    return true;
  } else {
    return false;
  }
}

// Capitalizes a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// Event Listeners
optionButtons.forEach((btn) => btn.addEventListener("click", playGame));
newGame.addEventListener('click', refreshPage)