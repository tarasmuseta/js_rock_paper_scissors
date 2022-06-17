function capitalize (string) {
    let string1 = string.charAt(0).toUpperCase();
    let string2 = string.slice(1).toLowerCase();
    alert(`You chose ${(string1 + string2)}`);

}

const rock = 'Rock';

const paper = 'Paper';

const scissors = 'Scissors';

rock < paper;

paper < scissors;

scissors < rock;

const possibleResult = [
    rock,
    paper,
    scissors
];

let opponentResult = possibleResult[Math.floor(Math.random()*possibleResult.length)];

let userResult = prompt("Let's play Rock, Paper, Scissors! Make you choice!");

if (userResult === rock | paper | scissors) {

    capitalize(userResult);

} else {

    alert('Try again! Please only type words "Rock", "Paper" or "Scissors"!');

    userResult = prompt("Make you choice!");

}

alert(`Your opponent chose ${opponentResult}!`);