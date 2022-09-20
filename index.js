import {
  getComputerChoice,
  playRound,
  playerScorce,
  computerScorce,
  resultBoard,
  board,
} from "./function.js";

const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");

let count = 1;

myButton.addEventListener("click", function () {
  count++;
  const playerSelection = myInput.value;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
  if (count > 5) {
    myButton.disabled = true;
    resultBoard.textContent = "";
    if (playerScorce > computerScorce) {
      board.textContent = "You Win!!";
    } else if (computerScorce > playerScorce) {
      board.textContent = "You Lose!!";
    } else {
      board.textContent = "Tie Game!!";
    }
  }
});
