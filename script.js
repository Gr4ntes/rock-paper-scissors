// converting number to string 
function choiceToString(choice) {
    if (choice === 1)
        return 'rock'; // 1 is used to represent Rock
    else if (choice === 2)
        return 'paper'; // 2 is used to represent Paper
    else
        return 'scissors'; // 3 is used for Scissors
}


function getComputerChoice() {
    // getting a random number
    const random = Math.floor(Math.random() * 3) + 1;
    // converting it to string
    return choiceToString(random);
}

// listing all the outcomes in a table
const outcomes = {
    "rock": {
        "rock": "draw",
        "paper": "lose",
        "scissors": "win"
      },
      "paper": {
        "rock": "win",
        "paper": "draw",
        "scissors": "lose"
      },
      "scissors": {
        "rock": "lose",
        "paper": "win",
        "scissors": "draw"
      }
};

function playRound(playerSelection, computerSelection) {
    // making playerSelection case-insensitive 
    playerSelection = playerSelection.toLowerCase();
    
    // checking for outcome
    if (outcomes[playerSelection][computerSelection] === "win")
        return "You win! " + playerSelection + " beats " + computerSelection;
    else if (outcomes[playerSelection][computerSelection] === "lose")
        return "You lose! " + computerSelection + " beats " + playerSelection;
    else
        return "It's a draw.";
}


// come temporary tests
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));