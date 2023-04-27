pPoints = 0
cPoints = 0
const buttons = document.querySelectorAll('.choice')
const game = document.getElementById('game')
const winner_lab = document.createElement('h1')

buttons.forEach(button => button.addEventListener('click', () => {
    if (cPoints < 5 && pPoints < 5){
    const playerSelection = button.getAttribute('id')
    let result = playRound(playerSelection)
    console.log(result)
    updateScore(result, pPoints, cPoints)
    }
}))

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
    return choice
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice()
    console.log('Player selection: ' + playerSelection)
    console.log("Computer selection: " + computerSelection)
    if (playerSelection === computerSelection) {
        return 'Tie'
        //console.log(`Tie! You both selected ${playerSelection}!`)
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"){
        cPoints += 1
        return 'Player'
        //console.log(`You win this round! ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock"){
        pPoints += 1
        return 'Computer'
        //console.log(`You lose this round! ${computerSelection} beats ${playerSelection}!`)
    }
}

function updateScore(winner, cPoints, pPoints) {
    const roundWin = document.getElementById('roundWinner')
    const pPoints_lab = document.getElementById('playerPoints')
    const cPoints_lab = document.getElementById('computerPoints')
    if (cPoints == 5 || pPoints == 5){
        winner_lab.innerText = `${winner} wins!`
        game.appendChild(winner_lab)
    }
    roundWin.innerHTML = `Round Winner: ${winner}`
    cPoints_lab.innerHTML = `Computer Points: ${cPoints}`
    pPoints_lab.innerHTML = `Player Points: ${pPoints}`

}

function reset() {
    cPoints = 0
    pPoints = 0
    const roundWin = document.getElementById('roundWinner')
    const pPoints_lab = document.getElementById('playerPoints')
    const cPoints_lab = document.getElementById('computerPoints')
    roundWin.innerHTML = `Round Winner:`
    cPoints_lab.innerHTML = `Computer Points:`
    pPoints_lab.innerHTML = `Player Points:`
    winner_lab.remove()
}

// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life. 





// function runGame() {
//     let p_score = 0
//     let c_score = 0
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("What do you select: Rock, Paper, or Scissors?").toLowerCase()
//         console.log(playerSelection)
//         const computerSelection = getComputerChoice()
//         let round = playRound(playerSelection, computerSelection)
//         console.log(round[0])
//         if (round[1] === 0){
//             c_score += 1
//         }
//         else if (round[1] === 1){
//             p_score += 1
//         }
//         else{
//             // do nothing
//         }
//     }
//     if (p_score > c_score){
//         console.log("You won the game!")
//     }
//     else if (c_score > p_score){
//         console.log("You lost the game!")
//     }
//     else {
//         console.log("Tie game!")
//     }
// }
