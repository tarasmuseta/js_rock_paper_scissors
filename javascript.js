function game () { 

    function capitalize (string) {

        let string1 = string.charAt(0).toUpperCase();

        let string2 = string.slice(1).toLowerCase();

        userResult = string1 + string2;
        
    }

    const possibleResult = [
 
        'Rock',

        'Paper',

        'Scissors'

    ];

    let opponentResult = possibleResult[Math.floor(Math.random()*possibleResult.length)];

    let userResult = prompt("Let's play Rock, Paper, Scissors! Make you choice!");

    capitalize(userResult);

    if (userResult !== ('Rock' || 'Paper' || 'Scissors')) {
        
        alert('Try again! Please, only type words "Rock", "Paper" or "Scissors"!');

        userResult = prompt("Make you choice!");
        
        capitalize(userResult);

    }
 
    alert(`Your opponent chose ${opponentResult}!`);

    let Outcome1 = (userResult === 'Rock' && opponentResult === 'Scissors') || (userResult === 'Paper' && opponentResult === 'Rock') || (userResult === 'Scissors' && opponentResult === 'Paper');

    let Outcome2 = (userResult === 'Scissors' && opponentResult === 'Rock') || (userResult === 'Rock' && opponentResult === 'Paper') || (userResult === 'Paper' && opponentResult === 'Scissors');

    let Outcome3 = (userResult === 'Scissors' && opponentResult === 'Scissors') || (userResult === 'Rock' && opponentResult === 'Rock') || (userResult === 'Paper' && opponentResult === 'Paper');

    if (Outcome1) {

        alert(`You won! ${userResult} beats ${opponentResult}`);
        console.log(`You won! ${userResult} beats ${opponentResult}`);

    } else if (Outcome2) {

        alert(`You lost! ${opponentResult} beats ${userResult}`);
        console.log(`You lost! ${opponentResult} beats ${userResult}`);

    } else if (Outcome3){

        alert("It's a tie!");
        console.log("It's a tie!");

    }

}

for (let i = 0; i < 5; i++) {
    
    game();

}