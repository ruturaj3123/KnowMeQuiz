var readlineSync = require("readline-sync");


function knowMeQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are correct!")
    score = score + 1;
  }
  else {
    console.log("You are wrong!")
  }
  console.log("current Score : ", score)

}

// questions 
questionOne = {
  question: "Who is my favorite Marvel superhero? ",
  answer: "thor"
}

questionTwo = {
  question: "What is my favourite color? ",
  answer: "black"
}

questionThree = {
  question: "What is my favourite programming language? ",
  answer: "Javascript"
}

questionFour = {
  question: "What is my favourite sports? ",
  answer: "football"
}

questionFive = {
  question: "What is my favourite dish? ",
  answer: "kheer"
}


// main

console.log("Welcome to How Good You Know Ruturaj! \n")
console.log("This is a simple quiz. You have to answer five questions about me to check how  well do you know me.\n")

var userName = readlineSync.question(" Enter your name: ")
var score = 0;
var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var n = questionList.length;

for (var i = 0; i < n; i++) {
  var currentQuestion = questionList[i];
  knowMeQuiz(currentQuestion.question, currentQuestion.answer);
}
console.log("---------------------------------");
console.log("Yayy" + userName + "!" + " you scored " + score + " out of 5");

console.log("---------------------------------");
console.log("High Scores: ")
console.log("Omkar : 4")
console.log("Pratik : 3")
