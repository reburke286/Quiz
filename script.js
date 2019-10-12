var main = document.getElementById("main")
var bgModal = document.querySelector(".bg-modal")
var modalScores = document.querySelector(".modalScores")
var modalHighScores = document.querySelector(".modal-highscores")
var viewHighScores = document.querySelector(".view-highscores")
var buttonGoBack = document.querySelector(".button-go-back")
var buttonStartQuiz = document.querySelector(".button-start-quiz")
var closeButton = document.querySelector(".close")
var modalQuiz = document.querySelector(".modal-quiz")
var secondsLeft = 75
var timeRemaining = document.querySelector(".time-remaining")

//View Highscores

viewHighScores.addEventListener("click", function() {
    modalHighScores.style.display = "block";
    bgModal.style.display = "none";
    console.log("are you working?")
})

buttonGoBack.addEventListener("click", function() {
    bgModal.style.display = "block"; 
    modalHighScores.style.display = "none";   
})

// Quiz functions
buttonStartQuiz.addEventListener("click", function() {
    modalQuiz.style.display = "block";
    bgModal.style.display = "none";
    quizTimer();
})

// Timer
function quizTimer() {
var secondsRemaining = setInterval(function() {
    secondsLeft--;
    timeRemaining.textContent = "Time remaining: " + secondsLeft;
if(secondsLeft === 0) {
    clearInterval(secondsRemaining);
    modalHighScores.style.display = "block";
    modalQuiz.style.display = "none";
};
}, 1000);
}

// Close functions

closeButton.addEventListener("click", function() {
    modalQuiz.style.display = "none";
    bgModal.style.display = "block"; 
})





// var questions = [
//     {
//       title: "Commonly used data types DO NOT include:",
//       choices: ["strings", "booleans", "alerts", "numbers"],
//       answer: "alerts"
//     },
//     {
//       title: "The condition in an if / else statement is enclosed within ____.",
//       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//       answer: "parentheses"
//     },
//     ///etc.
//   ];
  