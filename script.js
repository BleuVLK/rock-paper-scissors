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



function user() {
    const VALID_CHOICES = ["Rock", "Paper", "Scissors"];
    let userChoice = prompt(`Write "Rock", "Paper" or "Scissors": `).toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    return VALID_CHOICES.includes(userChoice) ? userChoice : user();
}



function compareChoices(ownChoice, compChoice) {
    congratulations = `You win! ${ownChoice} beats ${compChoice}`;
    let winner = true;
    switch (true) {
        case ownChoice === compChoice:
            winner = false;
            console.log(`Both have drawn ${ownChoice}. Let's draw again!`);
            let newCompChoice = computer();
            let newOwnChoice = user();
            compareChoices(newOwnChoice, newCompChoice);
            break;
        case ownChoice === "Rock" && compChoice === "Scissors":
            console.log(congratulations);
            break;
        case ownChoice === "Paper" && compChoice === "Rock":
            console.log(congratulations);
            break;
        case ownChoice === "Scissors" && compChoice === "Paper":
            console.log(congratulations);
            break;
        default:
            console.log(`You lose! ${compChoice} beats ${ownChoice}`)
            winner = false;
            break;          
    }
    return winner;
}


function game() {
    let matchNumber = 1
    let ownScore = 0;
    let compScore = 0;
    index = 0
    while (index < 5 && ownScore !== 3 && compScore !== 3) {
        console.log(`Rock-Paper-Scissors Competition (Game ${matchNumber}/5);
        Current Scores: Player 1:  ${ownScore} - Computer: ${compScore}`);
        let compChoice = computer();
        let ownChoice = user();
        let winner = compareChoices(ownChoice, compChoice);
        winner ? ownScore++ : compScore++;
        matchNumber++;
        index++;
    }
    victory = `Congratulations! You've won ${ownScore} - ${compScore}`;
    defeat = `I'm sorry! You've lost ${compScore} - ${ownScore}`;
    console.log(ownScore > compScore ? victory : defeat);

}


game();