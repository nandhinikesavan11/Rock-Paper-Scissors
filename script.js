
//converting the string back to json
let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins : 0,
    losses : 0,
    ties : 0
};
//if the left is truthy then score is parsed or it is set to default

updateScore();

function playerMove(playerChoice){
    const num = Math.random();
    let compMove = '';

    if (num < 0.33){
        compMove = 'Rock';   
    }
    else if(num <0.66){
        compMove = 'Paper';
    }
    else{
        compMove = 'Scissors';
    }

    let result ='';

    if (playerChoice === compMove){
        result = "Tie.";
        score.ties++;
    }
    else if (
        (playerChoice === 'Rock'&& compMove ==='Scissors') ||
        (playerChoice === 'Paper' && compMove === 'Rock') ||
        (playerChoice === 'Scissors' && compMove === 'Paper')
        ){
        result = 'You won.';
        score.wins++;
    }
    else{
        result = 'You lose.'; 
        score.losses++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    //since localStorage supports only strings we used json stringify
    updateScore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerChoice.toLowerCase()}-emoji.png" class="move-icon"> <img src="images/${compMove.toLowerCase()}-emoji.png" class="move-icon">  Computer`;
}

function updateScore(){
    document.querySelector('.js-scores').innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


document.querySelector('.js-reset-button').addEventListener('click', () => {
    console.log('Reset button clicked');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
});

let isAutoplaying = false;
let intervalId;


function autoplay(){
    if (!isAutoplaying){
        intervalId  = setInterval(function(){
            const moves = ['Rock', 'Paper', 'Scissors'];
            const randomMove = moves[Math.floor(Math.random() * 3)];
            playerMove(randomMove);
        }, 1000);
        isAutoplaying =true;
        document.querySelector('.js-autoplay-button').innerText = 'Stop Autoplay';
    }
    else{
        clearInterval(intervalId);
        isAutoplaying = false;
        document.querySelector('.js-autoplay-button').innerText = 'Autoplay';

    }
}



