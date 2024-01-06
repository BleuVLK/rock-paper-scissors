function computer() {
    let automatedChoice = Math.floor(Math.random() * 3); 
    switch (automatedChoice) {
        case 0:
            automatedChoice = 'Rock';
            break;
        case 1:
            automatedChoice = 'Paper';
            break;
        case 2:
            automatedChoice = 'Scissors';
            break;
        default:
            computer();  
            break;
    }
    return automatedChoice
}


let userScore = 0
let compScore = 0


function compareChoices(ownChoice) {
    let compChoice = computer();
    congratulations = `You win! ${ownChoice} beats ${compChoice}`;
    switch (true) {
        case ownChoice === compChoice:
            printResults(`Both have drawn ${ownChoice}. Let's draw again!`);
            break;
        case ownChoice === "Rock" && compChoice === "Scissors":
            userScore++;
            updateScores(userScore, compScore);
            printResults(congratulations);
            break;
        case ownChoice === "Paper" && compChoice === "Rock":
            userScore++;
            updateScores(userScore, compScore);
            printResults(congratulations)
            break;
        case ownChoice === "Scissors" && compChoice === "Paper":
            userScore++;
            updateScores(userScore, compScore);
            printResults(congratulations)
            break;
        default:
            compScore++;
            updateScores(userScore, compScore);
            printResults(`You lose! ${compChoice} beats ${ownChoice}`)
            break;          
    }
    checkForWinner();
}


function updateScores(userScore, compScore) {
    const USER_SCORE = document.querySelector("#user-score");
    USER_SCORE.textContent = userScore;   
    const COMPUTER_SCORE = document.querySelector("#computer-score");
    COMPUTER_SCORE.textContent = compScore;
}


function printResults(message) {
    const RESULTS = document.querySelector('.matches');
    const ENTRY = document.createElement('p');
    ENTRY.classList.toggle('round-result')
    ENTRY.textContent = message;
    RESULTS.prepend(ENTRY);
}


function checkForWinner() {
    const PLAYER_WIN = true;
    const COMP_WIN = false; 
    switch(true) {
        case userScore === 3:
            alert("Congratulions! You're the winner!");
            ifWinner(PLAYER_WIN);
            break;
        case compScore === 3:
            alert("The computer wins");
            ifWinner(COMP_WIN);
            break;
        case userScore === 5:
            alert("Congratulations! You're the winner!");
            ifWinner(PLAYER_WIN);
            break;
        case compScore === 5:
            alert("The computer wins");
            ifWinner(COMP_WIN);
            break;
        default:
            break;        
    }   
}


function ifWinner(winner) {
    if (winner === true) {
        const PLAYER = document.querySelector('#player');
        PLAYER.style.cssText = 'color: #ADDFFF; text-shadow: 0 0 10px #ADDFFF';
        const PLAYER_SCORE = document.querySelector('#user-score');
        PLAYER_SCORE.style.cssText = 'color: #ADDFFF; text-shadow: 0 0 10px #ADDFFF';
    } else {
        const COMP = document.querySelector('#comp');
        COMP.style.cssText = 'color: #DC1F3C; text-shadow: 0 0 10px #DC143C';
        const COMP_SCORE = document.querySelector('#computer-score');
        COMP_SCORE.style.cssText = 'color: #DC1F3C; text-shadow: 0 0 10px #DC143C';
    }
}


function reset() {
    userScore = 0;
    compScore = 0;
}


const ROCK = document.querySelector('#rock');
ROCK.addEventListener('click', () => {
    compareChoices('Rock');
})

const PAPER = document.querySelector('#paper');
PAPER.addEventListener('click', () => {
    compareChoices('Paper');
})

const SCISSORS = document.querySelector("#scissors");
SCISSORS.addEventListener('click', () => {
    compareChoices('Scissors');
})

const RESET = document.querySelector('#reset');
RESET.addEventListener('click', () => {
    reset();
    updateScores();
    document.querySelector('#player').style.cssText = '';
    document.querySelector('#user-score').style.cssText = '';
    document.querySelector('#comp').style.cssText = '';
    document.querySelector('#computer-score').style.cssText = '';
})

