
function rockPaperScissors() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return "Tie!"
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        return "You win!"
        }
    return "You lose!"
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let choice = undefined;
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('rock, paper, or scissors?');
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice
        }
    }   
}


