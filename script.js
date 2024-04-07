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
    
    // checking for outcome
    playerSelection = playerSelection.slice(0, playerSelection.length-1).toLowerCase();
    if (outcomes[playerSelection][computerSelection] === "win")
        return "You win! " + playerSelection + " beats " + computerSelection;
    else if (outcomes[playerSelection][computerSelection] === "lose")
        return "You lose! " + computerSelection + " beats " + playerSelection;
    else
        return "It's a draw";
}

const buttons = document.querySelectorAll(".selection-btn");
const result = document.querySelector("#result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice();
        playerSelection = button.innerText;
        result.textContent = playRound(playerSelection, computerSelection);
    });
});