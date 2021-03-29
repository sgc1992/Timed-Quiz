document.querySelector('#start').addEventListener('click', function(){
  setTime();
  presentQuestion();
});

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "Time Finished";
 

}
setTime();


//call function
function presentQuestion(){
  
}



const questions =
[{
  question: "Which type of JavaScript language is",
  choices: "A.Object - Oriented, B.Object - Based, C.Assembly - language, D.High - level",
  answer: "B.Object - Based"
},

{
  question: "Which one of the following also known as Conditional Expression:",
  choices: "A.Alternative to if else, B.Switch statement, C.If - then -else statement, D.immediate if",
  answer: "D.immediate if"
},
{
  question: "In JavaScript, what is a block of statement?",
    choices : "A.Conditional block, B.block that combines a number of statements into a single compound statement, C.both conditional block and a single statement, D.block that contains a single statement",
      answer: "B.block that combines a number of statements into a single compound statement"
},
{
  question: "Which of the following variables takes precedence over the others if the names are the same?",
    choices : "A.Global variable, B.The local element, C.The two of the above, D.None of the above",
      answer: "B.block that combines a number of statements into a single compound statement"
},
{
  question: "Which one of the following is the correct way for calling the JavaScript code?",
    choices : "A.Preprocessor, B.Triggering Event, C.RMI, D.Function / Method",
      answer: "D.Function / Method"
}]







