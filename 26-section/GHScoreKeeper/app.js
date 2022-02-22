const scoreboard = document.querySelector('#scoreboard');
const maxPoints = document.querySelector('#maxPoints');
const playerOneBtn = document.querySelector('#playerOne');
const playerTwoBtn = document.querySelector('#playerTwo');
const reset = document.querySelector('#reset');
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = null;

maxPoints.addEventListener('change', (e) => {
  e.preventDefault();
  winningScore = parseInt(maxPoints.value);
  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
})

playerOneBtn.addEventListener('click', () => {
  playerOneScore += 1;
  scoreboard.innerText = `${playerOneScore} to ${playerTwoScore}`;
  if(playerOneScore === winningScore){
    alert("GAME OVER - PLAYER ONE WINS!!!");
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
    maxPoints.setAttribute('disabled', '');
  }
});

playerTwoBtn.addEventListener('click', () => {
  playerTwoScore += 1;
  scoreboard.innerText = `${playerOneScore} to ${playerTwoScore}`;
  if(playerTwoScore === winningScore){
    alert("GAME OVER - PLAYER TWO WINS!!!");
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
    maxPoints.setAttribute('disabled', '');
  }
});

reset.addEventListener('click', () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  maxPoints.selectedIndex = 0;
  maxPoints.removeAttribute('disabled');
  winningScore = null;
  scoreboard.innerText = `${playerOneScore} to ${playerTwoScore}`;
})