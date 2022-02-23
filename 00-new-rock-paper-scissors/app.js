const gameQuestion = document.querySelector('#gameQuestion');
const gameLength = document.querySelector('#gameLength');
const selectedGames = document.querySelector('#selectedGames');
const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorsButton = document.querySelector('#scissorsBtn');
const announcement = document.querySelector('#announcement');
const playerTotal = document.querySelector('#playerTotal');
const computerTotal = document.querySelector('#computerTotal');
const again = document.querySelector('#again');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const game = document.querySelector('#game');
const thanks = document.querySelector('#thanks');


let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let numOfGames = null;

gameLength.addEventListener('change', () => {
  gameLength.hidden = true;
  numOfGames = parseInt(gameLength.value);
  selectedGames.innerText = numOfGames;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
})

rockBtn.addEventListener('click', () => {
  gameQuestion.hidden = true;
  playerChoice = rockBtn.value;
  computerChoice = getComputerChoice();
  matchResult(playerChoice, computerChoice);
  playerTotal.innerText = playerScore;
  computerTotal.innerText = computerScore;
  announcement.hidden = false;
  keepScore(playerScore, computerScore);
});

paperBtn.addEventListener('click', () => {
  gameQuestion.hidden = true;
  playerChoice = paperBtn.value;
  computerChoice = getComputerChoice();
  matchResult(playerChoice, computerChoice);
  playerTotal.innerText = playerScore;
  computerTotal.innerText = computerScore;
  announcement.hidden = false;
  keepScore(playerScore, computerScore);
});

scissorsBtn.addEventListener('click', () => {
  gameQuestion.hidden = true;
  playerChoice = scissorsBtn.value;
  computerChoice = getComputerChoice();
  matchResult(playerChoice, computerChoice);
  playerTotal.innerText = playerScore;
  computerTotal.innerText = computerScore;
  announcement.hidden = false;
  keepScore(playerScore, computerScore);
});

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
    announcement.innerText = `${playerChoice} beats ${computerChoice} - Player +1`;
  } else {
    computerScore++;
    announcement.innerText = `${computerChoice} beats ${playerChoice} - Computer +1`;
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
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  yesBtn.addEventListener('click', () => {
    again.hidden = true;
    announcement.hidden = true;
    selectedGames.innerText = '';
    gameQuestion.hidden = false;
    gameLength.selectedIndex = 0;
    gameLength.hidden = false;
    playerScore = 0;
    computerScore = 0;
    numOfGames = null;
    playerTotal.innerText = playerScore;
    computerTotal.innerText = computerScore;
  });
  noBtn.addEventListener('click', () => {
    game.hidden = true;
    thanks.hidden = false;
  })
}