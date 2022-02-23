const gameQuestion = document.querySelector('#gameQuestion');
const gameLength = document.querySelector('#gameLength');
const gameList = document.querySelector('#gameList');
const selectedGames = document.querySelector('#selectedGames');
const rpsBtn = document.querySelectorAll('.rpsBtn');
const announcement = document.querySelector('#announcement');
const playerTotal = document.querySelector('#playerTotal');
const computerTotal = document.querySelector('#computerTotal');
const again = document.querySelector('#again');
const continueBtns = document.querySelectorAll('.continueBtns');
const activeGame = document.querySelector('#activeGame');
const thanks = document.querySelector('#thanks');


let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let numOfGames = null;

gameLength.addEventListener('change', (e) => {
  gameLength.hidden = true;
  announcement.innerText = 'Select your option below!';
  announcement.hidden = false;
  numOfGames = parseInt(e.target.value);
  selectedGames.innerText = numOfGames;
  for (const option of rpsBtn) {
    option.disabled = false;
  }
})

for (const btn of rpsBtn) {
  btn.addEventListener('click', (e) => {
    playerChoice = e.currentTarget.value;
    gameQuestion.hidden = true;
    computerChoice = getComputerChoice();
    matchResult(playerChoice, computerChoice);
    playerTotal.innerText = playerScore;
    computerTotal.innerText = computerScore;
    keepScore(playerScore, computerScore);
  });
}

function getComputerChoice() {
  const computerOptions = ['Rock', 'Paper', 'Scissors'];
  return computerOptions[Math.floor(Math.random() * 3)];
}

function matchResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    announcement.innerText = `${playerChoice} and ${computerChoice} - it's a tie!`;
    return;
  } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
    playerScore++;
    announcement.innerText = `${playerChoice} beats ${computerChoice}!!! 1 point for you!`;
  } else {
    computerScore++;
    announcement.innerText = `${computerChoice} beats ${playerChoice} :( Computer earns 1 point.`;
  }
}

function keepScore(playerScore, computerScore) {
  if (playerScore === numOfGames) {
    announcement.innerText = 'Congragulations - You Win!!!!!';
    playAgain();
  } else if (computerScore === numOfGames) {
    announcement.innerText = 'Game Over - Computer Wins';
    playAgain();
  }
}

function playAgain() {
  again.hidden = false;
  for (const option of rpsBtn) {
    option.disabled = true;
  }
  for (const selection of continueBtns) {
    selection.disabled = false;
    selection.addEventListener('click', (e) => {
      if (e.currentTarget.value === 'yes') {
        reset();
      } else {
        gameOver();
      }
    });
  }
}

function reset() {
  again.hidden = true;
  announcement.hidden = true;
  selectedGames.innerText = '';
  gameQuestion.hidden = false;
  gameList.selectedIndex = 0;
  gameLength.hidden = false;
  playerScore = 0;
  computerScore = 0;
  numOfGames = null;
  playerTotal.innerText = playerScore;
  computerTotal.innerText = computerScore;
}

function gameOver() {
  thanks.hidden = false;
  activeGame.hidden = true;
}