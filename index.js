readlinesync = require("readline-sync")
var score = 0

var username =
  readlinesync.question("What's your name? ");

console.log("Welcome " + username + " in our game.");

function play(question, answer) {

  var userAnswer = readlinesync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right")
    score = score + 1
  } else {
    console.log("you are wrong")
    score = score - 1
  }
  console.log("current score: " + score)
  console.log("----------------")

}

var Questions = [{
  question: " 1- Which sports I like the most? ",
  answer: "Cricket"
},

{
  question: " 2- My favorite movie is? ",
  answer: "MSDhoni TUTS"
},

{
  question: " 3- My favorite Foothball player? ",
  answer: "Cristiano Ronaldo"
},

{
  question: " 4- My favorite subject in school? ",
  answer: "Mathematics"
},

{
  question: " 5- Do you know my nickname that I like? ",
  answer: "Ash"
},]


for (var i = 0; i < Questions.length; i++) {

  var currentquestion = Questions[i]

  play(currentquestion.question, currentquestion.answer)
}
console.log("Correctanswers:")

console.log("1-Cricket", "2-MSDhoni TUTS", "3-Cristiano", "4-Mathematics", "5-Ash")


console.log("check out the high scores")

var highScores = [
  {
    name: "Ayush",
    score: "5"
  },
  {
    name: "Asmit",
    score: "3"
  }
]
highScores.map(score =>
  console.log(score.name, ":", score.score))

console.log("Thanks " + username + " hope you enjoy")









