//console.log("I see you Tuan");

function getComputerChoice(){

    choice = Math.random ;
    if (choice <= 0.33){
        return "rock"
    }else if (choice > 0.33 && choice < 0.66){
        return "scissors"
    }else {
        return "paper"
    }
}

function getHumanChoice(){

    //prompt user and log response to console 
    let humanChoice = prompt("Enter in your choice").toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

humanScore = 0;
computerscore = 0;

function playRound(humanChoice, computerChoice){

    let message;
    let computerScore;
    let humanScore;


    if (humanChoice == computerChoice){
        message = "Tie, answers the same";
    } else if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            message = "You lose! Paper beats Rock";
            computerScore += 1;

        }else if (computerChoice == "scissors"){
            message = "You win! rock beats scissors";
            humanScore += 1;

        }
    }else if (humanChoice == "paper"){
        if (computerChoice == "scissors"){
            message = "You lose! Scissors beats paper";
            computerScore += 1;

        }else if (computerChoice == "rock"){
            message = "You win! paper beats rock";
            humanScore += 1;

        }      
    }else if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            message = "Rock beats scissors";
            computerScore += 1;

        }else if (computerChoice == "paper"){
            message = "You win! scissors beats paper";
            humanScore += 1;

        }
    }

    console.log(message);
        
    //make humanchoice paramater case insensitive
    //console.log the result
    //increment the winning party
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
   // calls playRound five times
   for (let i = 0; i < 5; i++){
    playRound(humanSelection, computerSelection);
   }

   if (humanScore > computerScore){
    console.log("human wins");

   }else if (computerScore > humanScore){
    console.log("computer wins");
   }else{
    console.log("tie");
   }
   //declares winner
   //playround function and score variables should be declared here
}
