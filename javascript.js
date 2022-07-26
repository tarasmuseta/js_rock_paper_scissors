const possibleResult = ['Rock', 'Paper', 'Scissors'];
let opponentResult

function roundOpponent() {
    opponentResult = possibleResult[Math.floor(Math.random()*possibleResult.length)];
}

let userResult;

const opponent = document.querySelector('#opponent');
const outcome = document.querySelector('#game');
const userScore = document.querySelector('#userscore');
const opponentScore = document.querySelector('#opponentscore');
const announcement = document.querySelector('#announcement');
let countUser = 0;
let countOpponent = 0;

function round() {

    let outcome1 = (userResult == 'Rock' && opponentResult == 'Scissors') ||
                    (userResult == 'Paper' && opponentResult == 'Rock') ||
                    (userResult == 'Scissors' && opponentResult == 'Paper');
    let outcome2 = (userResult == 'Scissors' && opponentResult == 'Rock') ||
                    (userResult == 'Rock' && opponentResult == 'Paper') ||
                    (userResult == 'Paper' && opponentResult == 'Scissors');

    if (outcome1) {
        opponent.textContent = `Your opponent chose ${opponentResult}!`;
        outcome.textContent = `You won! ${userResult} beats ${opponentResult}`;
        countUser++;
        userScore.textContent = `${countUser}`;
    } else if (outcome2) {
        opponent.textContent = `Your opponent chose ${opponentResult}!`;
        outcome.textContent = `You lost! ${opponentResult} beats ${userResult}`;
        countOpponent++;
        opponentScore.textContent = `${countOpponent}`;
    } else {
        opponent.textContent = `Your opponent chose ${opponentResult}!`;
        outcome.textContent = "It's a tie!";
    } 

    if (countUser == 5) {
        announcement.textContent = 'Congratulations! You are the winner!';
    } else if (countOpponent == 5) {
        announcement.textContent = 'Too bad! Your opponent is the winner!';
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userResult = button.className;
        roundOpponent();
        round();
    });

});

/*const outcome = document.querySelector('#game');
const userScore = document.querySelector('#userscore');
const opponentScore = document.querySelector('#opponentscore');

if (outcome.textContent == `You won! ${userResult} beats ${opponentResult}`) {
    userScore.textContent += '1';
    console.log(userScore.textContent);
    } else if (outcome.textContent = `You lost! ${opponentResult} beats ${userResult}`) {
    opponentScore.textContent += '1';
    console.log(opponentScore.textContent);
}  

/*function game () { 

}

for (let i = 0; i < 1; i++) {
    
    game();

}*/