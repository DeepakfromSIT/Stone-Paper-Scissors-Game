let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randInd = Math.floor(Math.random() * 3);
  return option[randInd];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "black";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You loss");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // USed to generate the user Choice.
  console.log("userChoice =", userChoice);

  // USed to generate the computer Choice.
  const compChoice = genCompChoice();
  console.log("compChoice: ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //This is a computer choice = Sessiors,Paper.
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //This is a computer choice = Sessiors,Rock.
      userwin = compChoice === "sessiors" ? false : true;
    } else {
      //This is a computer choice = Rock, Paper.
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
