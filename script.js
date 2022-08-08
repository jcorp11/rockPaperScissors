//console.log('first line');

function getComputerChoice(){
    let myArray = ['rock', 'paper', 'scissors'];
    return myArray[Math.floor(Math.random()*myArray.length)];
}
//console.log(getComputerChoice());


function playRound(playerSelection, computerSelection){
    let playerMove = playerSelection.toLowerCase().trim();
    const matchStr = `Player : ${playerMove}; CPU : ${computerSelection}`
    console.log('computer: '+computerSelection+'\n jugador: '+playerMove)
    if(computerSelection == playerMove){
        return [0 , matchStr + ' Empate']
    } else if (playerMove == 'rock'){
        if(computerSelection == 'paper'){
            return [-1 , matchStr + ' Derrota Jugador'];
        }else {
            return [1 , matchStr + ' Victoria Jugador'];
        }
    }else if (playerMove == 'paper'){
        if(computerSelection == 'rock'){
            return [1 , matchStr + ' Victoria Jugador'];
        }else{
            return [-1 , matchStr + ' Derrota Jugador'];
        }
    }else if(playerMove == 'scissors'){
        if(computerSelection == 'rock'){
            return [-1 , matchStr + ' Derrota Jugador'];
        }else{
            return [1 , matchStr + ' Victoria Jugador'];
        }
    } else {
        return console.error();
    }
}



var scorePlayer = 0;
var scorecpu = 0 ;
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(btn => btn.addEventListener('click', function(){
    console.log(this.innerText.toLowerCase().trim());
    const playerMove =this.innerText.toLowerCase().trim();
    const computerMove = getComputerChoice();
    //console.log(playRound(playerMove, computerMove));
    const result = playRound(playerMove, computerMove);
    const newDiv = document.createElement('div');
    newDiv.classList.add('resultItem');
    newDiv.innerText = result[1];
    if(result[0] == 1 ){
        scorePlayer++;
    }else if(result[0] == -1){
        scorecpu++;
    };
    document.querySelector('div.results').appendChild(newDiv);   
    document.querySelector('.scores').innerText = `Score Player: ${scorePlayer} ; Score CPU: ${scorecpu}`
    if( scorePlayer == 5||scorecpu ==5 ){

        let scoredivs = document.querySelectorAll('div.resultItem');
        console.log(scoredivs);
        scoredivs.forEach(item => item.remove());

        let finalResult =scorePlayer == 5 ? 'Ganador Jugador' : 'Ganador : CPU';
        alert(finalResult); 
        scorePlayer = 0, scorecpu = 0;
        document.querySelector('.scores').innerText = `Score Player: ${scorePlayer} ; Score CPU: ${scorecpu}`
    }
    
}));

