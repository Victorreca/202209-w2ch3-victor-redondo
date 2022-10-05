let numbersBingoBombo = [];
let numbersBingoCard = [];
let lines = [];
let firstLine = [];
let secondLine = [];
let thirdLine = [];
let turn = 0;
let round = 1;
let won = false;
let userWin = 0;
let countLine = 0;
let isPlaying = false;

const users = [
  { user: "Paco", score: 80 },
  { user: "John", score: 50 },
  { user: "Edgar", score: 70 },
];

const newVar = () => {
  numbersBingoBombo = [];
  numbersBingoCard = [];
  lines = [];
  firstLine = [];
  secondLine = [];
  thirdLine = [];
  turn = 0;
  won = false;
  round = 1;
  userWin = 0;
  countLine = 0;
  isPlaying = false;
};

const getUserName = () => {
  const userName = prompt(`Welcome to the Bingo Game. What's your name?`);
  if (userName === null || userName === "") {
    alert("⛔️ Write your name to continue.");
    return getUserName();
  }

  console.log(`Welcome ${userName} to the Bingo Game`);
  if (userName) {
    users.push({ user: userName, score: 0 });
  }

  return userName;
};

const randomNumber = () => {
  const randomNumberBingo = Math.round(Math.random() * 45 + 1);
  if (randomNumberBingo > 45) {
    return randomNumber();
  }

  return randomNumberBingo;
};

const rankingUsers = () => {
  console.log("Rules of the game: ");
  console.log("If you win from 1 to 38 rounds --> 100 points");
  console.log("39 to 41 rounds --> 80 points");
  console.log("42 to 44 rounds --> 70 points");
  console.log("45 rounds or more --> 50 points.");
  showScore();
};

const scoreUsers = (score, userName) => {
  const userPoints = users.find((userScore) => userScore.user === userName);
  userPoints.score = score;
};

const totalPoints = () => {
  switch (true) {
    case round <= 40:
      scoreUsers(100, userName);
      break;
    case round >= 41 && round <= 42:
      scoreUsers(80, userName);
      break;
    case round >= 43 && round <= 44:
      scoreUsers(70, userName);
      break;
    case round >= 45:
      scoreUsers(50, userName);
      break;
    default:
      console.log("You aren't in the ranking");
  }
};

const showScore = () => {
  users.sort((a, b) => b.score - a.score);
  let rankingPosition = 1;
  console.log("***********************");
  console.log("Ranking Bingo Game");
  console.log("***********************");
  users.forEach((player) => {
    console.log(
      `Position: ${rankingPosition} | Player: ${player.user} | Score: ${player.score}`
    );
    rankingPosition++;
  });
  console.log("***********************");
};

const numbersBombo = () => {
  const numberBingoBombo = randomNumber();
  if (numbersBingoBombo.length < 45) {
    if (numbersBingoBombo.includes(numberBingoBombo)) {
      numbersBombo();
    } else {
      numbersBingoBombo.push(numberBingoBombo);
      numbersBombo();
    }
  }
};

const numbersUser = () => {
  const numberCard = randomNumber();
  if (numbersBingoCard.length < 15) {
    if (numbersBingoCard.includes(numberCard)) {
      numbersUser();
    } else {
      numbersBingoCard.push(numberCard);
      numbersUser();
    }
  } else {
    bingoLines();
    showNumbers();
    if (changeCard()) {
      roundUser();
    } else {
      numbersBingoCard = [];
      numbersUser();
    }
  }
};

const bingoLines = () => {
  firstLine = numbersBingoCard.slice(0, 5);
  secondLine = numbersBingoCard.slice(5, 10);
  thirdLine = numbersBingoCard.slice(10, 15);
  lines = [firstLine, secondLine, thirdLine];
};

const showNumbers = () => {
  console.log(`${firstLine}\n${secondLine}\n${thirdLine}`);
};

const changeCard = () => {
  const changeNumbersCard = confirm(
    "Do you like these numbers? If you want other numbers press cancel."
  );
  return changeNumbersCard;
};

const roundUser = () => {
  do {
    console.log(`Round ${round}.`);
    console.log(`Number ${numbersBingoBombo[turn]}!`);
    matchingNumber();
    bingoLines();
    lineOneSuccess();
    lineTwoSuccess();
    lineThreeSuccess();
    userWinGame();
    if (!won) {
      turn++;
      round++;
      showNumbers();
      continuePlaying();
    }
  } while (!won && isPlaying);

  if (won) {
    console.log(`¡¡Bingo!! You won in ${round} rounds.`);
    scoreTable();
    if (playAgain()) {
      bingo();
    }
  } else {
    console.log("See you later!");
  }
};

const matchingNumber = () => {
  numbersBingoCard.forEach((element, index) => {
    if (element === numbersBingoBombo[turn]) {
      console.log("You have this number!!!");
      numbersBingoCard[index] = "X";
    }
  });
};

const continuePlaying = () => {
  if (confirm("Do you want to continue playing?")) {
    isPlaying = true;
  } else {
    isPlaying = false;
  }
};

const playAgain = () => {
  if (confirm("Do you want to play again?")) {
    return true;
  }

  console.log("See you later!");
  return false;
};

const userWinGame = () => {
  userWin = 0;
  numbersBingoCard.forEach((number) => {
    if (number === "X") {
      userWin++;
    }
  });
  if (userWin === 15) {
    won = true;
    isPlaying = false;
  } else {
    won = false;
  }
};

const lineOneSuccess = () => {
  countLine = 0;
  firstLine.forEach((element) => {
    if (element === "X") {
      countLine++;
    }
  });
  if (countLine === 5) {
    line = true;
    isPlaying = false;
    return console.log("Line 1 completed!");
  }

  won = false;
};

const lineTwoSuccess = () => {
  countLine = 0;
  secondLine.forEach((element) => {
    if (element === "X") {
      countLine++;
    }
  });
  if (countLine === 5) {
    line = true;
    isPlaying = false;
    return console.log("Line 2 completed!");
  }

  won = false;
};

const lineThreeSuccess = () => {
  countLine = 0;
  thirdLine.forEach((element) => {
    if (element === "X") {
      countLine++;
    }
  });
  if (countLine === 5) {
    line = true;
    isPlaying = false;
    return console.log("Line 3 completed!");
  }

  won = false;
};

const scoreTable = () => {
  if (won) {
    console.log(`You can see your score in the following table.`);
    totalPoints();
    showScore();
  }
};

const bingo = () => {
  userName = getUserName();
  rankingUsers();
  newVar();
  numbersBombo();
  numbersUser();
};

bingo();
