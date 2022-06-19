let playerSelection;
let computerSelection;

function computerPlay() {
let RPSnum = Math.random() * (3 - 1) + 1;
RPSnum = Math.round(RPSnum);
let CompRPS = 0;
if(RPSnum === 1) {
    CompRPS = "Rock";
}
if(RPSnum === 2) {
    CompRPS = "Paper";
}
if(RPSnum === 3) {
    CompRPS = "Scissors";
}
return CompRPS;
}

function playRound(playerSelection, computerSelection) {
let winner = "0";
playerSelection = window.prompt("Rock, Paper or Scissors?: ");
computerSelection = computerPlay();
console.log(computerSelection);
if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    winner = 0;
    alert("This round is a tie.")
    return winner;
}
if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" 
|| playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" 
|| playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    winner = 1;
    alert("You lose this round " + computerSelection + " beats " + playerSelection);
    return winner;
}
if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" 
|| playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" 
|| playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    winner = 2;
    alert("You win this round " + playerSelection + " beats " + computerSelection );
    return winner;
}
else {
    winner = 2;
    return winner;
}
}

function game (playerSelection, computerSelection) {
let playerScore = 0;
let computerScore  = 0;
let winner = "0";
for (let i = 0; i < 5; i++) {
    let winner = playRound(playerSelection, computerSelection);
    if (winner === 0) {
        playerScore++;
        computerScore++;
    }
    if (winner === 1) {
        computerScore++;
    }
    if (winner === 2) {
        playerScore++;
    }
}
console.log(playerScore)
console.log(computerScore)
if (playerScore === computerScore) {
    winner = "It's a tie!";
    alert("The game is a Tie!");
    return winner;
} 
if (computerScore > playerScore) {
    winner = "You lose!";
    alert("You lost the Game, sorry.");
    return winner;
}
if (playerScore > computerScore) {
    winner = "You Win!";
    alert("You win the game!")
    return winner;
}
}

console.log(game(playerSelection, computerSelection));