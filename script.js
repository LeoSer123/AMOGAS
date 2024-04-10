// Tic Tac Toe Game
const ticTacToeCells = document.querySelectorAll(".tic-tac-toe-cell");

let currentPlayer = "X";

ticTacToeCells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

// Rolling Dice Game
const rollDiceBtn = document.getElementById("rollDiceBtn");
const diceResult = document.getElementById("diceResult");

rollDiceBtn.addEventListener("click", () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `You rolled a ${diceValue}`;
});

// Number Guessing Game
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const guessResult = document.getElementById("guessResult");

const targetNumber = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) {
        guessResult.textContent = "Please enter a valid number";
    } else if (guess === targetNumber) {
        guessResult.textContent = "Congratulations! You guessed the correct number!";
    } else if (guess < targetNumber) {
        guessResult.textContent = "Try a higher number";
    } else {
        guessResult.textContent = "Try a lower number";
    }
});
