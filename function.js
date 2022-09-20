function getComputerChoice() {
  const collection = ["rock", "paper", "scissors"];
  const selected = collection[Math.floor(Math.random() * collection.length)];
  return selected;
}

let playerScorce = 0;
let computerScorce = 0;
const resultBoard = document.getElementById("result");
const finalBoard = document.getElementById("final-result");
const board = document.getElementById("board");

function playRound(playerSelection, computerSelection) {
  resultBoard.textContent = ``;
  console.log(playerSelection + " p + c " + computerSelection);
  if (playerSelection === computerSelection) {
    resultBoard.textContent += `Tie! ${playerSelection}(you) same as ${computerSelection}(commputer)`;
    console.log(playerScorce + " " + computerScorce);
    playerScorce = playerScorce;
    computerScorce = computerScorce;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resultBoard.textContent += `You Win! ${playerSelection}(you) beats ${computerSelection}(computer)`;
    console.log(playerScorce + 1 + " " + computerScorce);
    playerScorce = playerScorce + 1;
    computerScorce = computerScorce;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultBoard.textContent += `You Win! ${playerSelection}(you) beats ${computerSelection}(computer)`;
    console.log(playerScorce + 1 + " " + computerScorce);
    playerScorce = playerScorce + 1;
    computerScorce = computerScorce;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultBoard.textContent += `You Win! ${playerSelection}(you) beats ${computerSelection}(computer)`;
    console.log(playerScorce + 1 + " " + computerScorce);
    playerScorce = playerScorce + 1;
    computerScorce = computerScorce;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resultBoard.textContent += `You Lose! ${computerSelection}(computer) beats ${playerSelection}(you)`;
    console.log(playerScorce + " " + (computerScorce + 1));
    playerScorce = playerScorce;
    computerScorce = computerScorce + 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultBoard.textContent += `You Lose! ${computerSelection}(computer) beats ${playerSelection}(you)`;
    console.log(playerScorce + " " + (computerScorce + 1));
    playerScorce = playerScorce;
    computerScorce = computerScorce + 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultBoard.textContent += `You Lose! ${computerSelection}(computer) beats ${playerSelection}(you)`;
    console.log(playerScorce + " " + (computerScorce + 1));
    playerScorce = playerScorce;
    computerScorce = computerScorce + 1;
  }
  finalBoard.textContent = `player got ${playerScorce} points and computer got ${computerScorce} points`;
  console.log(playerScorce);
  console.log(computerScorce);
}

export {
  getComputerChoice,
  playRound,
  playerScorce,
  computerScorce,
  resultBoard,
  board,
};
