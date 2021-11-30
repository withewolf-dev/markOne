var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter your name ");

var score = 0;

var highScore = 5;

console.log(userName + ", how well do you know Git?");

function play(question, answer) {
  var userans = readlineSync.question(question);

  if (userans === answer) {
    console.log("right answer");
    score = score + 1;
    console.log("your current score is " + score);
    console.log("___________________________");
  } else {
    console.log("wrong answer");
    console.log("___________________________");
  }
}

var QuesOne = {
  ques: "What is Git's fav color ? ",
  ans: "purple",
};

var QuesTwo = {
  ques: "What is Git's fav car ? ",
  ans: "maruti 800",
};
var QuesThree = {
  ques: "What is Git's fav dish ? ",
  ans: "maggie",
};
var QuesFour = {
  ques: "Where he want to travel ? ",
  ans: "world",
};

var QuesFive = {
  ques: "Fav song of all time? ",
  ans: "kabira",
};

var questions = [QuesOne, QuesTwo, QuesThree, QuesFour, QuesFive];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].ques, questions[i].ans);
}

console.log("your total score is " + score);

if (highScore >= score) {
  console.log("you scored a high Score");
}
