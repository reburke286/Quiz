var main = document.getElementById("main")
var bgModal = document.querySelector(".bg-modal")
var secondsLeft = 5
var timeRemaining = document.querySelector(".time-remaining")

// Highscores //
var modalScores = document.querySelector(".modal-scores")
var modalHighScores = document.querySelector(".modal-highscores")
var viewHighScores = document.querySelector(".view-highscores")
var buttonGoBack = document.querySelector(".button-go-back")
var scoreIsEl = document.querySelector(".h5-score")
var score = 0
var submitScoreButton = document.querySelector(".submit-score")
var inputInitials = document.querySelector(".input-initials")
var olHighscores = document.querySelector(".ol-highscores")

// Quiz //
var buttonStartQuiz = document.querySelector(".button-start-quiz")
var closeButton = document.querySelector(".close")
var modalQuiz = document.querySelector(".modal-quiz")
var questionTitle = document.querySelector(".question-title")
var quizOl = document.querySelector(".quiz-ol")
var quizLi = document.querySelector("#quiz-li")
var correct = document.querySelector(".correct")
var wrong = document.querySelector(".wrong")
var answerClick = document.querySelector(".quiz-ol")


// //View Highscores

viewHighScores.addEventListener("click", function() {
    modalHighScores.style.display = "block";
    bgModal.style.display = "none";
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
    showNewQuestions();
    setInterval(showNewQuestions, 15000);
    
});

var i = -1
var showNewQuestions = function() {
    i++;
    if (i === questions.length) {
        clearInterval(showNewQuestions)
    };     
    var choices = questions[i].choices;
    for (var j = 1; j < choices.length + 1; j++) {
        document.getElementById("choice" + j).innerHTML = choices[j - 1];
        questionTitle.innerHTML = questions[i].title;
    }
    answerClick.addEventListener("click", function(event) {
        var answer = questions[i].answer;
        if (event.target.innerHTML === answer) {
            correct.style.display = "block";
            wrong.style.display = "none";
            score++;
            console.log(score);
            //setInterval(showNewQuestions, 15000);   
        }
        else {
            wrong.style.display = "block";
            correct.style.display = "none";
            
        }
    });

};


// Timer
function quizTimer() {
var secondsRemaining = setInterval(function() {
    secondsLeft--;
    timeRemaining.textContent = "Time remaining: " + secondsLeft;
if(secondsLeft === 0) {
    clearInterval(secondsRemaining);
    clearInterval(showNewQuestions);
    modalScores.style.display = "block";
    modalQuiz.style.display = "none";
};
}, 1000);
}

// Score
// function quizScore() {
//     when you click the choice of the last array the time remaining is added to your score
//     score += secondsLeft;
//     scoreIsEl.append(score);
//      
// }


//Close functions

closeButton.addEventListener("click", function() {
    modalQuiz.style.display = "none";
    bgModal.style.display = "block"; 
})

// Adding Highscore 
submitScoreButton.addEventListener("click", function(event) {
    event.preventDefault;

    if (inputInitials.value !== null) {
        modalHighScores.style.display = "block";
        var playerName = inputInitials.value;
        playerName.innerHTML = playerName + score;
        olHighscores.appendChild(playerName);

    }
    else {
        alert("Please enter your initials")
    }
    localStorage.setItem("player", playerName);
})
  
