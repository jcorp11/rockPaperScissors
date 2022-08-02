console.log('first line');

function getComputerChoice(){
    let myArray = ['rock', 'paper', 'scissors'];
    return myArray[Math.floor(Math.random()*myArray.length)];
}
console.log(getComputerChoice());


function playRound(playerSelection, computerSelection){
    let playerMove = playerSelection.toLowerCase().trim();
    console.log('computer: '+computerSelection+'\n jugador: '+playerMove)
    if(computerSelection == playerMove){
        return 'Empate'
    } else if (playerMove == 'rock'){
        if(computerSelection == 'paper'){
            return 'Derrota jugador';
        }else {
            return 'Victoria jugador';
        }
    }else if (playerMove == 'paper'){
        if(computerSelection == 'rock'){
            return 'Victoria jugador';
        }else{
            return 'Victoria jugador';
        }
    }else if(playerMove == 'scissors'){
        if(computerSelection == 'rock'){
            return 'Derrota jugador';
        }else{
            return 'Victoria jugador';
        }
    } else {
        return console.error();
    }
}


//const computerSelection = getComputerChoice();
//const userSelection = 'scissors';
//console.log(playRound(userSelection,computerSelection));

function game(){
    let score = 0
    for(let i = 0; i < 5; i++){
        let userMove = prompt();
        let computerSelection = getComputerChoice();
        let result = playRound(userMove, computerSelection);
        if(result == 'Victoria jugador'){
            score += 1;
        }else if (result == 'Derrota jugador'){
            score -= 1;
        }
        
        console.log('El resultado de la partida es : '+result+'\n El Score acumulado es: '+score);
    }

    console.log('\n');
    if(score > 0){
        console.log('Jugador ha ganado');
    }else if(score < 0){
        console.log('Maquina ha ganado');
    }else if(score == 0){
        console.log('Empate para todos');
    }
}
game();