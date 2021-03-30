var readLineSync = require('readline-sync');
var chalk = require("chalk");

var error = chalk.bold.redBright;
var correct = chalk.bold.greenBright;
var info = chalk.bold.bgGrey;
var bold = chalk.bold;

var questions = require('./questions');

var username = readLineSync.question("Enter your name ");
console.log(info("Welcome, " + username + ". Let's see how you know me."));

var score = 0;
//Keep highScores empty
var highScores = [{
  name : "Preethi",
  score : 5
}];

function canClose(length) {
  if(length >= questions.length) {
    return true;
  }
  return false;
}

function play() {
  for(let index = 0; index < questions.length ; index++) {
    let yourAnswer = readLineSync.question(bold(questions[index].question));
    if(questions[index].answer.toUpperCase() == yourAnswer.toUpperCase()) {
      console.log(correct("Noice. Cool."));
      score++;
      let continueOrNot = readLineSync.question(bold(`Enter e if you want to stop.`));
        if(continueOrNot.toUpperCase() == 'E') {
        console.log(`You scored ${score}. See you next time!`);
        break;
      }
    }
    else {
      console.log(error("Again!"));
    }
  }
  console.log(info(`Phew! You scored ${score}. Let's see who did better.`));
  checkHighScores();
}

function checkHighScores() {
  if(!highScores.length) {
    console.log(info(`You're the first!`));
    highScores.push({name : usename, score : score});
  }
  else {
  for (let i = 0 ; i<highScores.length ; i++) {
      if(score >= highScores[i].score) {
        highScores.push({name : username, score : score});
        break;
      }
    }
  }
  print(highScores);
}

function print(highScores) {
    console.table(highScores);
}

//Calling play
play();
