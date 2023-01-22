let randomInt = 0;
let computerChoice = "";
let userChoice = "";
let winner = "";
let userScore = 0;
let computerScore = 0;
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
// Get the modal
 
function closeModal(){
  document.getElementById("myModal").style.display = "none";
}

function getRandomInt(){ // Sets the randomInt
  randomInt = Math.floor(Math.random() * 3);
}

function getComputerChoice(){ // sets the computerChoice variable
  switch (randomInt){
    case 0:
      computerChoice = rock;
      break;
    case 1:
      computerChoice = scissors;
      break;
    case 2:
      computerChoice = paper;
      break;
  } 
}

function printUserChoice(){
  document.getElementById("userChoice").innerText = "You said: " + userChoice;
  document.getElementById("userScore").innerText = "Your score: " + userScore;
}
function printComputerChoice(){
  document.getElementById("computerChoice").innerText = "Computer said: " + computerChoice;
  document.getElementById("computerScore").innerText = "Computer score: " + computerScore;
}

function printWinner(){ // prints the userChoice in a paragraph
  document.getElementById("answer").innerText = winner;
}

function determineWinner(userSelection, computerSelection){
  userSelection = userChoice;
  computerSelection = computerChoice;
  if(userSelection === paper){
    if(computerSelection === rock){
      winner = "You Win " + paper + " beats " + rock;
      userScore++;
    } else if(computerSelection === scissors){
      winner = "You loose " + scissors + " beats " + paper;
      computerScore++;
    } else if (computerSelection === paper){
      winner = "It's a draw " + paper + " is equal to " + paper; 
    }
  } else if(userSelection === rock){
    if(computerSelection === rock){
      winner = "It's a draw " + rock + " is equal to " + rock;
    } else if(computerSelection === paper){
      winner = "You loose " + paper + " beats " + rock;
      computerScore++;
    } else if(computerSelection === scissors){
      winner = "You win " + rock + " beats " + scissors;
      userScore++;
    }
  } else if(userSelection === scissors) {
    if(computerSelection === paper){
      winner = "You win " + scissors + " beats " + paper;
      userScore++;
    } else if(computerSelection === rock){
      winner = "You loose " + rock + " beats " + scissors;
      computerScore++;
    } else if(computerSelection === scissors){
      winner = "It's a draw " + scissors + " is equal to " + scissors;
    }
  }
  if(userScore === 5 || computerScore === 5){
    document.getElementById("myModal").style.display = "block";
    userScore = 0;
    computerScore = 0;
  }
}

function startGame(userSelection){
  userChoice = userSelection;
  getRandomInt();
  getComputerChoice();
  determineWinner();
  printUserChoice();
  printComputerChoice();
  printWinner();
}