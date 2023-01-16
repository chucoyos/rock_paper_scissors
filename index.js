let randomInt = 0;
let computerChoice = ""
let userChoice = ""
let winner = ""
let userScore = 0;
let computerScore = 0;

function getRandomInt(){ // Sets the randomInt
  randomInt = Math.floor(Math.random() * 3);
}

function getComputerChoice(){ // sets the computerChoice variable
  switch (randomInt){
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "scissors";
      break;
    case 2:
      computerChoice = "paper";
      break;
  } 
}

function getUserChoice(){ // prompts the user for a choice
  userChoice = prompt('Paper, Rock, Scissors').toLowerCase();
}
function printUserChoice(){
  document.getElementById("userChoice").innerText = "You said: " + userChoice;
}
function printComputerChoice(){
  document.getElementById("computerChoice").innerText = "Computer said: " + computerChoice;
}

function printWinner(){ // prints the userChoice in a paragraph
  document.getElementById("answer").innerText = winner;
}

function determineWinner(userSelection, computerSelection){
  userSelection = userChoice;
  computerSelection = computerChoice;
  if(userSelection === "paper"){
    if(computerSelection === "rock"){
      winner = "You Win"
    } else if(computerSelection === "scissors"){
      winner = "You loose"
    } else if (computerSelection === "paper"){
      winner = "It's a draw"
    }
  } else if(userSelection === "rock"){
    if(computerSelection === "rock"){
      winner = "It's a draw";
    } else if(computerSelection === "paper"){
      winner = "You loose";
    } else if(computerSelection === "scissors"){
      winner = "You win";
    }
  } else if(userSelection === "scissors") {
    if(computerSelection === "paper"){
      winner = "You win";
    } else if(computerSelection === "rock"){
      winner = "You loose"
    } else if(computerSelection === "scissors"){
      winner = "It's a draw"
    }
  }
}

function startGame(){
  getRandomInt();
  getComputerChoice();
  getUserChoice();
  determineWinner();
  printUserChoice();
  printComputerChoice();
  printWinner();
}