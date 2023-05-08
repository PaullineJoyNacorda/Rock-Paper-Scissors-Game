const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");

options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerChoice = option.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice, winner);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Player 2 wins!";
  }
}

function showResult(playerChoice, computerChoice, winner) {
  result.innerHTML = `
    <p>You chose ${playerChoice}.</p>
    <p>The computer chose ${computerChoice}.</p>
    <p>${winner}</p>
  `;
}