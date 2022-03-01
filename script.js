let computerScore = 0;
let playerScore = 0;

const rps = ["Rock", "Paper", "Scissors"];

// computer makes random choice from rps array - random no. times by array length (i.e. 3) then rounded down, picks array item 0, 1 or 2
function computerPlay() {
    const computerMove = rps[Math.floor(Math.random() * rps.length)];
    return computerMove;
}

// single round of rock paper scissors - adds 1 to score, returns string of result
function playRound(playerSelection, computerSelection) {
    //Rock < paper
    if (playerSelection === "rock" && computerSelection === rps[1]) {
        computerScore += 1;        
        return `Round lost! ${computerSelection} beats ${playerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
    // Rock > Scissors
    else if (playerSelection === "rock" && computerSelection === rps[2]) {
        playerScore += 1;
        return `Round won! ${playerSelection} beats ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
    // Paper < Scissors 
    else if (playerSelection === "paper" && computerSelection === rps[2]) {
        computerScore += 1;
        return `Round lost! ${computerSelection} beats ${playerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
    // Paper > Rock
    else if (playerSelection === "paper" && computerSelection === rps[0]) {
        playerScore += 1;
        return `Round won! ${playerSelection} beats ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
    // Scissors < Rock
    else if (playerSelection === "scissors" && computerSelection === rps[0]) {
        computerScore += 1;
        return `Round lost! ${computerSelection} beats ${playerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
    // Scissors > Paper
    else if (playerSelection === "scissors" && computerSelection === rps[1]) {
        playerScore += 1;
        return `Round won! ${playerSelection} beats ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
    }
    // Draw condition
    else {
        return `Draw! You made the same choice. You: ${playerScore} Computer: ${computerScore}`;
    }
}

function game() {
    // while loop - first to 3 points wins
    while (playerScore < 3 && computerScore < 3) {

        //validation attempt
        // let playerSelection = null;
        //   do {
        //     playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
        //   } while (!rps.includes(playerSelection));
        
        let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        let computerSelection = computerPlay();

        // clear console of previous round choices
        // console.clear();

        // print moves
        console.log(`You picked ${playerSelection}, computer picked ${computerSelection}`);

        // print round results
        console.log(playRound(playerSelection, computerSelection));       

    }

    function finalResult() {
        if (playerScore === 3) {
            return "Congratulations! You win the game."
        } else if (computerScore === 3) {
            return "Defeat! Better luck next time."
        }
    }

    console.log(finalResult());

}

// Call game function
game();


// To fix:
// - validate player input so you can only type the 3 options