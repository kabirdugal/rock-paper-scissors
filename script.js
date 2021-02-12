// Function that randomly returns one of Rock, Paper or Scissors  
function computerPlay() {
    let gameOptions = ['rock', 'paper', 'scissors']
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// Function that plays a single round of RPS
function playRound(playerSelection, computerSelection) {
    // case-insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection == 'paper') {
            return "You Lose! Paper beats Rock";
        } else {
            return 'You Tied!';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection == 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'You Tied!';
        }
    } else { // player selects scissors
        if (computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Tied!';
        }
    }
}



// Function that plays a 5-round RPS game that keeps score and reports the winner and loser of the game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter Rock, Paper, or Scissors:');
        let computerSelection = computerPlay();
        let roundResult = 'Round ' + (i + 1) + ' Results: ' + playRound(playerSelection, computerSelection);

        //console.log(roundResult);

        if (roundResult.indexOf('You Win') > 0 && roundResult.indexOf('You Lose') < 0) {
            playerScore++;
        } else if (roundResult.indexOf('You Win') < 0 && roundResult.indexOf('You Lose') > 0) {
            computerScore++;
        } else {
            // pass
        }
    }

    if (playerScore > computerScore) {
        //console.log('Congrats! You Win. Final Score - You: ' + playerScore + ', Computer: ' + computerScore);
    } else if (computerScore > playerScore) {
        //console.log('You Lose! Final Score - You: ' + playerScore + ', Computer: ' + computerScore);
    } else {
        //console.log('You Tied! Final Score - You: ' + playerScore + ', Computer: ' + computerScore)
    }
}

let computerSelection = computerPlay();
const resultsOutput = document.querySelector('.results-output-box')

let youScore = document.getElementById('your-score-box');
let compScore = document.getElementById('computer-score-box');

const optionButtons = Array.from(document.querySelectorAll('.option-button'));

optionButtons.forEach(btn => btn.addEventListener('click', function() {
    
    let computerSelection = computerPlay()
    let output = playRound(btn.id, computerSelection);
    

    if (Number(youScore.textContent === 5 || Number(compScore.textContent) === 5)) {
        if (Number(youScore.textContent) > Number(compScore.textContent)) {
            youScore.textContent = 0;
            compScore.textContent = 0;
            alert('you win!');     
        } else if (Number(compScore.textContent) > (Number(youScore.textContent))) {
            youScore.textContent = 0;
            compScore.textContent = 0;
            alert('you lost!')
        } 
    } else { 
        if (output.indexOf('You Win') === 0) {
            resultsOutput.textContent = output;
            youScore.textContent = Number(youScore.textContent) + 1; 
        } else if (output.indexOf('You Lose') === 0) {
            resultsOutput.textContent = output;
            compScore.textContent = Number(compScore.textContent) + 1; 
        } else {
            resultsOutput.textContent = output;
            
        }
    }
    
}))


