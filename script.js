function game() {

    const rps = ["Rock", "Paper", "Scissors"];
    let computerScore = 0;
    let playerScore = 0;  

    const computerSelection = computerPlay();
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();  

    // computer makes random choice from rps array
    function computerPlay() {
        const computerMove = rps[Math.floor(Math.random()*rps.length)];
        return computerMove;
    }

    // single round of rock paper scissors - adds 1 to score, returns string of result
    function playRound(playerSelection, computerSelection) {     
        //Rock < paper
        if (playerSelection === "rock" && computerSelection === rps[1]) {
            computerScore++;
            return "Round lost! Paper beats Rock";
        }
        // Rock > Scissors
        else if (playerSelection === "rock" && computerSelection === rps[2]) {
            playerScore++;
            return "Round won! Rock beats Scissors";
        }   
        // Paper < Scissors 
        else if (playerSelection === "paper" && computerSelection === rps[2]) {
            computerScore++;
            return "Round lost! Scissors beats Paper";
        }
        // Paper > Rock
        else if (playerSelection === "paper" && computerSelection === rps[0]) {
            playerScore++;
            return "Round won! Paper beats Rock";
        }
        // Scissors < Rock
        else if (playerSelection === "scissors" && computerSelection === rps[0]) {
            computerScore++;
            return "Round lost! Rock beats Scissors";
        }
        // Scissors > Paper
        else if (playerSelection === "scissors" && computerSelection === rps[1]) {
            playerScore++;
            return "Round won! Scissors beats Rock";
        }
        else {
            return "Draw! You made the same choice."
        }  
    }

    console.log("You picked " + playerSelection + ", PC picked " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    

    //make 5 rounds & keep score AND Report winner/loser at end
    for (let i = 0; i < 5; i++) {   
        let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        let computerSelection = computerPlay();

        // clear console of previous round choices
        console.clear();

        // print moves
        console.log("You picked " + playerSelection + ", PC picked " + computerSelection);
        
        // print round results
        console.log(playRound(playerSelection, computerSelection));
    
        //print scoreboard       
        scoreboard = "Your score is " + playerScore + ", PCs score is " + computerScore;
        console.log(scoreboard);

        // call playRound function
        playRound(playerSelection, computerSelection);

    }

}

game();

// To do:
// - scoreboard only appears after 2nd round
// - print to console overall victor at the end
// - make it Bo5 - first to 3 points wins
// - validate player input so you can only type the 3 options