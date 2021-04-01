var currentQuestion = 0

var myQuestions =
  [{
    question: "Which type of JavaScript language is",
    answers: ["A.Object - Oriented", "B.Object - Based", "C.Assembly - language", "D.High - level"],
    correctAnswer: "B.Object - Based"
  },

  {
    question: "Which one of the following also known as Conditional Expression:",
    answers: ["A.Alternative to if else", "B.Switch statement", "C.If - then -else statement", "D.immediate if"],
    correctAnswer: "D.immediate if"
  },
  {
    question: "In JavaScript, what is a block of statement?",
    answers: ["A.Conditional block", "B.block that combines a number of statements into a single compound statement", "C.both conditional block and a single statement", "D.block that contains a single statement"],
    correctAnswer: "B.block that combines a number of statements into a single compound statement"
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answers: ["A.Global variable", "B.The local element", "C.The two of the above", "D.None of the above"],
    correctAnswer: "B.block that combines a number of statements into a single compound statement"
  },
  {
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answers: ["A.Preprocessor", "B.Triggering Event", "C.RMI", "D.Function / Method"],
    correctAnswer: "D.Function / Method"
  }]

document.querySelector('#submit').addEventListener('click', function () {
  setTime();
  showQuestions();
});

var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var welcomeScreenSec = $(".welcome-screen");
var questionsSections = $(".questions")

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// Function to send message
function sendMessage() {
  timeEl.textContent = "Game is over";
}


function showQuestions(){
  welcomeScreenSec.hide();
  questionsSections.text(myQuestions[currentQuestion].question);
  var answerOptions = $("#answerOptions")
  answerOptions.html("")
  for(var i = 0; i<myQuestions[currentQuestion].answers.length; i++){
    var listItem = $("<li>")
    var answerButton = $("<button>")
    answerButton.text(myQuestions[currentQuestion].answers[i])
    answerButton.on("click", handleButton)
    listItem.append(answerButton)
    answerOptions.append(listItem)
  }
  
}

function handleButton(){
  //TODO handle right or wrong
  console.log("click")
  currentQuestion++
  showQuestions()
}









