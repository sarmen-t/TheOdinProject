function getComputerChoice () {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock"
            break
        case 1:
            choice = "paper"
            break
        case 2:
            choice = "scissors"
            break
    }
    console.log(choice)
    return choice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return [`Tie! You both selected ${playerSelection}!`, 2] //returning 2 means it was a tie
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"){
        return [`You win this round! ${playerSelection} beats ${computerSelection}!`, 1] // returning 1 means it was player gets a point
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock"){
        return [`You lose this round! ${computerSelection} beats ${playerSelection}!`, 0] // returning 0 means computer gets a point
    }
    else {
        return ["Invalid player input", 3] // returning 3 means no change in point totals
    }
}

function runGame() {
    let p_score = 0
    let c_score = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What do you select: Rock, Paper, or Scissors?").toLowerCase()
        console.log(playerSelection)
        const computerSelection = getComputerChoice()
        let round = playRound(playerSelection, computerSelection)
        console.log(round[0])
        if (round[1] === 0){
            c_score += 1
        }
        else if (round[1] === 1){
            p_score += 1
        }
        else{
            // do nothing
        }
    }
    if (p_score > c_score){
        console.log("You won the game!")
    }
    else if (c_score > p_score){
        console.log("You lost the game!")
    }
    else {
        console.log("Tie game!")
    }
}