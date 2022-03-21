let computerScore = 0;
let playerScore = 0;
let round = 1;

const rps = ["Rock", "Paper", "Scissors"];

document.getElementById("final-result").textContent = 'Can you beat the computer?';
document.getElementById("player-score").textContent = playerScore;
document.getElementById("computer-score").textContent = computerScore;
document.getElementById("round").textContent = round;

// computer makes random choice from rps array - random no. times by array length (i.e. 3) then rounded down, picks array item 0, 1 or 2
function computerPlay() {
    const computerMove = rps[Math.floor(Math.random() * rps.length)];
    return computerMove;
}

// single round of rock paper scissors - adds 1 to score, returns string of result
function playRound(playerSelection, computerSelection) {
    round += 1;
    //Rock < paper
    if (playerSelection === "rock" && computerSelection === rps[1]) {
        computerScore += 1;        
        return `Round lost! ${computerSelection} beats ${playerSelection}.`;
    }
    // Rock > Scissors
    else if (playerSelection === "rock" && computerSelection === rps[2]) {
        playerScore += 1;
        return `Round won! ${playerSelection} beats ${computerSelection}.`;
    }
    // Paper < Scissors 
    else if (playerSelection === "paper" && computerSelection === rps[2]) {
        computerScore += 1;
        return `Round lost! ${computerSelection} beats ${playerSelection}.`;
    }
    // Paper > Rock
    else if (playerSelection === "paper" && computerSelection === rps[0]) {
        playerScore += 1;
        return `Round won! ${playerSelection} beats ${computerSelection}.`;
    }
    // Scissors < Rock
    else if (playerSelection === "scissors" && computerSelection === rps[0]) {
        computerScore += 1;
        return `Round lost! ${computerSelection} beats ${playerSelection}.`;
    }
    // Scissors > Paper
    else if (playerSelection === "scissors" && computerSelection === rps[1]) {
        playerScore += 1;
        return `Round won! ${playerSelection} beats ${computerSelection}.`;
    }

    // Validation - no longer required with buttons
    // else if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    //     return 'Wrong input. No points awarded. Please choose rock, paper or scissors.'
    // }

    // Draw condition
    else {
        return `Draw! You made the same choice. `;
    }
}

function game(playerMove) {
    // first to 3 points wins
    if (playerScore < 3 && computerScore < 3) {

        let playerSelection = playerMove;
        const computerSelection = computerPlay();

        // store playRound result string in variable
        let roundResult = playRound(playerSelection, computerSelection);

        // print round results to h3 tag
        document.getElementById("round-result").textContent = roundResult;

        // print round moves to p tag
        document.getElementById("moves").textContent = `You picked ${playerSelection}, computer picked ${computerSelection}`;

        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;

        // added a round indicator to give indication game is still progressing when there's a draw between repeated choices
        document.getElementById("round").textContent = round;
    }

    // print new message once either side gets 3 points
    if (playerScore === 3) {
        document.getElementById("final-result").textContent = "Congratulations! You win the game.";
        document.body.setAttribute('style','background-color: #42b400;');
        document.getElementById("replay").setAttribute('style','display: block;');
    } else if (computerScore === 3) {
        document.getElementById("final-result").textContent = "Defeat! Better luck next time.";
        document.body.setAttribute('style','background-color: red;');
        document.getElementById("replay").setAttribute('style','display: block;');
    }
}

// Call game function in event of clicking button

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const replayBtn = document.querySelector('#replay');


rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

scissorsBtn.addEventListener('click', () => {
    game('scissors');
});


// restart the game when you click the replay btn
replayBtn.addEventListener('click', ()=>  {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    document.getElementById('final-result').setAttribute('style','color: white;');
    document.getElementById("round").textContent = round;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("moves").textContent = '';
    document.getElementById("round-result").textContent = '';
    document.getElementById("final-result").textContent = 'Can you beat the Computer?';
    document.getElementById('replay').setAttribute('style','display: none;');
    document.body.setAttribute('style','background-color: #23d2d8;');
});