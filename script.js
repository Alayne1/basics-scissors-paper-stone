// Define P = Payer, C = Computer
// Input Scissors, Paper, or Stone
// Output is the result of Win, Lose, Draw or input validation of "invalid"

// Generate a random integer from 1 to 3

var generateRandomNumber = function () {
  // return 2;
  var choicesInSps = 3;
  var randomDecimal = Math.random() * choicesInSps;
  var randomInteger = Math.floor(randomDecimal);
  var randomGuess = randomInteger + 1;
  return randomGuess;
};

var generateGuess = function () {
  var randomComputerGuess = generateRandomNumber();
  if (randomComputerGuess == 1) {
    return "scissors";
  }
  if (randomComputerGuess == 2) {
    return "paper";
  }
  if (randomComputerGuess == 3) {
    return "stone";
  }
  // This is the ELse statement
  return "Oops! There was a mistake!";
};

var main = function (playerGuess) {
  var computerGuess = generateGuess();
  console.log("This is what the computer played: ", computerGuess);
  var outcomeOutput = `Your guess: ${playerGuess}. Computer's guess: ${computerGuess}.`;
  console.log("this is players guess", playerGuess);
  if (computerGuess == playerGuess) {
    return `${outcomeOutput} <b>It's a draw!</b>`;
  }
  // user chooses Scissors AND computer chooses Paper
  // OR  Paper AND Stone OR Stone and Scissors = WIN
  if (
    (playerGuess == "scissors" && computerGuess == "paper") ||
    (playerGuess == "paper" && computerGuess == "stone") ||
    (playerGuess == "stone" && computerGuess == "scissors")
  ) {
    return `${outcomeOutput} <br><br> <b>You win!</b>`;
  }
  // user chooses Scissors AND computer chooses Stone
  // OR  Paper AND Scissors OR Stone AND Paper
  if (
    (playerGuess == "scissors" && computerGuess == "stone") ||
    (playerGuess == "paper" && computerGuess == "scissors") ||
    (playerGuess == "stone" && computerGuess == "paper")
  ) {
    return `${outcomeOutput} <br><br> <b>You lose</b>!`;
  }
  return `Please input a valid guess of scissors, paper or stone!`;
};
