var timerEl = document.querySelector(".timerEl");
var startDiv = document.getElementById("start");
var firstQuest = document.getElementById("listOne");
var x = document.getElementById("answerOne");
var y = document.getElementById("answerTwo");
var z = document.getElementById("answerThree");
var secondsLeft = 100;

startDiv.addEventListener("click", setTime);
var index = 0;
//Click on answer = index+1 //

var quizQuestions = [
  {
    title: "Commonly used data types do not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if/else statement is enclosed within____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store _____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
];

//QUESTION 1
function setTime() {
  startDiv.innerHTML = "";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left!";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  question = document.createElement("h1");
  question.innerText = quizQuestions[index].title;
  document.getElementById("listOne").appendChild(question);

  quizQuestions[index].choices.forEach(function (choice) {
    var li = document.createElement("button");
    li.classList.add("choice");
    li.textContent = choice;
    document.getElementById("listOne").appendChild(li);
  });
 
}


//TODO Change this listener to listen to the whole DIV
document.querySelector("#listOne").addEventListener("click", function (event) {
  //Event delegation, IF its a class of choice

  answerOne = event.target.textContent;
  console.log(answerOne);

  if (answerOne !== quizQuestions[0].answer) {
    alert("Wrong! Minus 10 seconds");
    secondsLeft -= 10;
  } else {
    alert("Nice Job Kid!");

    //QUESTION 2
    question.innerText = quizQuestions[1].title;
    document.getElementById("listOne").appendChild(question);

    quizQuestions[1].choices.forEach(function (choice) {
      var li = document.querySelector(".choice");
      li.classList.remove("choice");
      li.classList.add("choice2");
      li.textContent = choice;
      document.getElementById("listOne").appendChild(li);
    });
  }
  questionTwo();
});

function questionTwo() {
  index = index + 1;
  document
    .querySelector("#listOne")
    .addEventListener("click", function (eventTwo) {
      //Event delegation, IF its a class of choice
      if(eventTwo.target){
        answerTwo = eventTwo.target.textContent;
      }

      if (answerTwo !== quizQuestions[1].answer) {
        alert("Wrong! Minus 10 seconds");
        secondsLeft -= 10;
      } else {
        alert("Nice Job Kid!");
      
      //QUESTION 3
      question.innerText = quizQuestions[2].title;
      document.getElementById("listOne").appendChild(question);
      quizQuestions[2].choices.forEach(function (choice) {
        var li = document.querySelector(".choice2");

        // li.classList.add("choice3");
        li.textContent = choice;
        document.getElementById("listOne").appendChild(li);
        
      });
    }});
    questionThree();
}
function questionThree() {
  index = index + 1;
  document
    .querySelector("#listOne")
    .addEventListener("click", function (eventThree) {
      

      answerThree = eventThree.target.textContent;

      if (answerThree === !quizQuestions[2].answer) {
        alert("You got it!");
      }
    })}
