function capitalize (string) {
    let string1 = string.charAt(0).toUpperCase();
    let string2 = string.slice(1).toLowerCase();
    console.log(string1 + string2);

}

const rock = 'Rock';

const paper = 'Paper';

const scissors = 'Scissors';

const possibleResult = [
    rock,
    paper,
    scissors
];

let opponentResult = possibleResult[Math.floor(Math.random()*possibleResult.length)];

let userResult = prompt("Let's play Rock, Paper, Scissors! Make you choice!");



alert(`You opponent chose ${opponentResult}`);