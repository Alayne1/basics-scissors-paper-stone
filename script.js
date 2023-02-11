// Define P = Payer, C = Computer
// Input Scissors, Paper, or Stone
// Output is the result of Win, Lose, Draw or input validation of "invalid"

// Set states

var countOfWins = 0;
var countOfRounds = 0;
var userName = "";
var currentGameMode = "waiting for user name";

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

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for user name") {
    // if the game mode is user name... set the name as the input
    userName = input;
    // now that we have the name, switch the mode
    currentGameMode = "SPS";
    myOutputValue = "Hello " + userName + ", enter a guess to start the game!";
    return myOutputValue;
  } else if (currentGameMode == "SPS") {
    // if the game mode is SPS game... define playerGuess as the input
    var playerGuess = input;
    // then return to SPS game logic
    var computerGuess = generateGuess();
    //console.log("This is what the computer played: ", computerGuess);
    var outcomeOutput = `Your guess: ${playerGuess}. Computer's guess: ${computerGuess}.`;
    //console.log("this is players guess", playerGuess);
    countOfRounds += 1;
    //console.log("this is the count of rounds", countOfRounds);
    if (computerGuess == playerGuess) {
      return `<b>It's a draw!</b> <br><br> ${outcomeOutput} <br> You have won ${countOfWins}/${countOfRounds} rounds.`;
    }
    // user chooses Scissors AND computer chooses Paper
    // OR  Paper AND Stone OR Stone and Scissors = WIN
    if (
      (playerGuess == "scissors" && computerGuess == "paper") ||
      (playerGuess == "paper" && computerGuess == "stone") ||
      (playerGuess == "stone" && computerGuess == "scissors")
    ) {
      countOfWins += 1;
      console.log("this is the count of wins", countOfWins);
      return `<b>You win!</b>🥳 <br><br> ${outcomeOutput} <br> You have won ${countOfWins}/${countOfRounds} rounds.`;
    }
    // user chooses Scissors AND computer chooses Stone
    // OR  Paper AND Scissors OR Stone AND Paper
    if (
      (playerGuess == "scissors" && computerGuess == "stone") ||
      (playerGuess == "paper" && computerGuess == "scissors") ||
      (playerGuess == "stone" && computerGuess == "paper")
    ) {
      return `<b>You lose</b>🤷 <br><br> ${outcomeOutput} <br> You have won ${countOfWins}/${countOfRounds} rounds.`;
    }
    return `Please input a valid guess of scissors, paper or stone!`;
  }
};
