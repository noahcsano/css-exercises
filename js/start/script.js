
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

const container = document.querySelector('.container');
const paragraph = document.createElement('p');
paragraph.textContent = 'shit';
paragraph.classList.add('paragraph');
container.appendChild(paragraph);


const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.style.background = 'pink';
newDiv.setAttribute("style", "background-color: pink; border: 2px solid black;");

const h1 = document.createElement('h1');
h1.textContent = 'Im in a div';
newDiv.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'Im also in a div';
newDiv.appendChild(p);

container.appendChild(newDiv);

const btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = "blue";
});