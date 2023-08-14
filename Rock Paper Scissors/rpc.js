const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const playerChoice = document.getElementById("player-choice")
const computerChoice = document.getElementById("computer-choice")
const winner = document.getElementById("winner")
const buttons = document.querySelectorAll("button")
const computerOptions = ["Rock", "Paper", "Scissors"]
let pScore = 0
let cScore = 0






    
    buttons.forEach((button) => {
        button.addEventListener("click", function(){
        let playerSelection = this.textContent
     
        let computerSelection = computerOptions[Math.floor(Math.random()*3)]
       
        
         let result = checkChoices(playerSelection, computerSelection)
         if(result === "Player"){
             winner.innerText = "Player Wins"
             pScore+=1
         }else if(result === "Computer"){
             winner.innerText = "Computer Wins"
            cScore+=1
         }else if(result === "Draw"){
             winner.innerText = "Draw"
         }
         
        renderResult(playerSelection, computerSelection)
    
        })
     
        
}) 
   
   


function checkChoices(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}


function renderResult(player, computer){
    playerScore.innerHTML = `Player Score: ${pScore}` 
    computerScore.innerHTML = `Computer Score: ${cScore}`
    computerChoice.innerHTML = computer
    playerChoice.innerHTML = player    
}
