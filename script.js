var myQuestions =
  [{
    question: "Which type of JavaScript language is",
    answers: ["A.Object - Oriented", "B.Object - Based", "C.Assembly - language", "D.High - level"],
    correctAnswer: "B.Object - Based"
  },

  {
    question: "Which one of the following also known as Conditional Expression:",
    answers: "A.Alternative to if else, B.Switch statement, C.If - then -else statement, D.immediate if",
    correctAnswer: "D.immediate if"
  },
  {
    question: "In JavaScript, what is a block of statement?",
    answers: "A.Conditional block, B.block that combines a number of statements into a single compound statement, C.both conditional block and a single statement, D.block that contains a single statement",
    correctAnswer: "B.block that combines a number of statements into a single compound statement"
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answers: "A.Global variable, B.The local element, C.The two of the above, D.None of the above",
    correctAnswer: "B.block that combines a number of statements into a single compound statement"
  },
  {
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answers: "A.Preprocessor, B.Triggering Event, C.RMI, D.Function / Method",
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
  timeEl.textContent = "Time Finished";
}


function showQuestions(){
  welcomeScreenSec.hide();
  questionsSections.text(myQuestions[0].question);
  var answerOptions = $("#answerOptions")
  for(var i = 0; i<myQuestions[0].answers.length; i++){
    var listItem = $("<li>")
    var answerButton = $("<button>")
    answerButton.text(myQuestions[0].answers[i])
    listItem.append(answerButton)
    answerOptions.append(listItem)
  }
  // list answers
  // allow users to choose an answer
}

// function showQuestions(questions, quizContainer) {
//   // we'll need a place to store the output and the answer choices
//   var output = [];
//   var answers;

//   // for each question...
//   for (var i = 0; i < questions.length; i++) {

//     // first reset the list of answers
//     answers = [];

//     // for each available answer to this question...
//     for (letter in questions[i].answers) {

//       // ...add an html radio button
//       answers.push(
//         '<label>'
//         + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//         + letter + ': '
//         + questions[i].answers[letter]
//         + '</label>'
//       );
//     }

//     // add this question and its answers to the output
//     output.push(
//       '<div class="question">' + questions[i].question + '</div>'
//       + '<div class="answers">' + answers.join('') + '</div>'
//     );
//   }

//   // finally combine our output list into one string of html and put it on the page
//   quizContainer.innerHTML = output.join('');
// }





