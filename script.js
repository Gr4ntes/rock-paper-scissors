function getComputerChoice() {
    // getting a random number
    random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return 'Rock' // 1 is used to represent Rock
    }
    else if (random === 2) {
        return 'Paper' // 2 is used to represent Paper
    }
    else {
        return 'Scissors' // 3 is used for Scissors
    }
}
