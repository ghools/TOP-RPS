let playerScore = 0;
let computerScore = 0;


let playerSelection;
let computerSelection;

function rockButtonPress() {
    rockSelect();
    playRound();
}

function rockSelect () {
    playerSelection = "Rock";
    return playerSelection;
}

function paperButtonPress() {
    paperSelect();
    playRound();
}

function paperSelect () {
    playerSelection = "Paper";
    return playerSelection;
}


function scissorsButtonPress() {
    scissorsSelect();
    playRound();
}

function scissorsSelect () {
    playerSelection = "Scissors";
    return playerSelection;
}


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

function playRound() {
let winner = "0";
computerSelection = computerPlay();
console.log(playerSelection);
if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    const roundTie = document.createElement("h3");
    playerScore++;
    computerScore++;
    roundTie.textContent = `This rouns is a tie. The current score is; Computer: ${computerScore} and Player: ${playerScore}`; 
    results.appendChild(roundTie);
}

if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" 
|| playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" 
|| playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    computerScore++;
    const roundLose = document.createElement("h3");
    roundLose.textContent = "You lose this round, " + computerSelection + " beats " + playerSelection + `. The current score is; Computer: ${computerScore} and Player: ${playerScore}`;
    results.appendChild(roundLose);
}

if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" 
|| playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" 
|| playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    playerScore++;
    const roundWin = document.createElement("h3");
    roundWin.textContent = "You win this round, " + playerSelection + " beats " + computerSelection + `. The current score is; Computer: ${computerScore} and Player: ${playerScore}`;
    results.appendChild(roundWin);
    
}
else {
    winner = 2;
    return winner;
}
}
const container = document.querySelector(".container");

const rockButton = document.createElement("button");
rockButton.innerHTML = "Rock";
rockButton.addEventListener("click", rockButtonPress);
container.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.innerHTML = "Paper";
paperButton.addEventListener("click", paperButtonPress);
container.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.innerHTML = "Scissors";
scissorsButton.addEventListener("click", scissorsButtonPress);
container.appendChild(scissorsButton)

const scorebox = document.createElement("div");
scorebox.style.border = "solid";
container.appendChild(scorebox);

const playerScoreVis = document.createElement("div");
playerScoreVis.textContent = `Player score: ${playerScore}`;
scorebox.appendChild(playerScoreVis);

const computerScoreVis = document.createElement("div");
computerScoreVis.textContent = `Computer score: ${computerScore}`;
scorebox.appendChild(computerScoreVis);

const results = document.createElement("div");
container.appendChild(results);

/*function game () {
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

//console.log(game(playerSelection, computerSelection));*/