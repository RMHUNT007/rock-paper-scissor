const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll ('button')
let userChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
 const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use 3
console.log(randomNumber)

if (randomNumber ===1) {
    computerChoice = 'rock'
}

if (randomNumber ===2) {
    computerChoice = 'scissor'
}


if (randomNumber ===3) {
    computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!'
        }
    if (computerChoice === 'rock' && userChoice === "paper" ) {
        result = ' you win!'
        }    
    
    if (computerChoice === 'paper' && userChoice === "scissor" ) {
            result = ' you lose!'
        }    
    if (computerChoice === 'scissor' && userChoice === "rock" ) {
                result = ' you win!'
        }    
        
    if (computerChoice === 'scissor' && userChoice === "rock" ) {
            result = ' you win!'
            }    
    if (computerChoice === 'rock' && userChoice === "paper" ) {
                result = ' you win!'
                }    
        
    resultDisplay.innerHTML = result
}