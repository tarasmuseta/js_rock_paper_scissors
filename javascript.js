const possibleResult = ['Rock', 'Paper', 'Scissors'];
let opponentResult;

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

function playRound() {

    let outcome1 = (userResult == 'Rock' && opponentResult == 'Scissors') ||
                    (userResult == 'Paper' && opponentResult == 'Rock') ||
                    (userResult == 'Scissors' && opponentResult == 'Paper');
    let outcome2 = (userResult == 'Scissors' && opponentResult == 'Rock') ||
                    (userResult == 'Rock' && opponentResult == 'Paper') ||
                    (userResult == 'Paper' && opponentResult == 'Scissors');

    if (outcome1) {
        opponent.textContent = `Your friend chose ${opponentResult}!`;
        outcome.textContent = `You won! ${userResult} beats ${opponentResult}`;
        countUser++;
        userScore.textContent = `${countUser}`;
    } else if (outcome2) {
        opponent.textContent = `Your friend chose ${opponentResult}!`;
        outcome.textContent = `You lost! ${opponentResult} beats ${userResult}`;
        countOpponent++;
        opponentScore.textContent = `${countOpponent}`;
    } else {
        opponent.textContent = `Your friend chose ${opponentResult}!`;
        outcome.textContent = "It's a tie!";
    } 

    if (countUser == 5) {
        opponent.textContent = 'Congratulations! You are the winner!';
        outcome.textContent = "";
    } else if (countOpponent == 5) {
        opponent.textContent = 'Too bad! Your opponent is the winner!';
        outcome.textContent = "";
    } /*else if (countUser == 6 || countOpponent == 6) {
    	announcement.textContent ='';
    	countUser = '0';
	    countOpponent = '0';
    }*/
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userResult = button.className;
        roundOpponent();
        playRound();
    });

});
