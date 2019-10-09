# Quiz
Pseudo Code:

1. Static HTML for the highscores and the Time
2. Button in the center with an eventListener to start the quiz
3. quiz :
    get the text on the screen:
    1. create a div element with an OL and LI
        a. the LI's will need their own eventListeners
        b. the eventListeners will need to call the conditional statement to determine whether or not it's correct
            i. the eventListeners will need to affect time remaining if wrong answer, and will need to see red text that says "incorrect"
            ii. if right answer, will need to light green and we should see text that says "correct"
            iii. all eventListeners will need an interval so we can absorb the response, probably 1 second, so 1000 mil. and then go to the next question
    2. append the div to the main, and append the ol and li to the div
    3. the questions array will need to cycle through a for loop on 15 second intervals or 15000 mil
    4. create a score function: 10 points for each right answer, plus an extra point per remaining second
    .... how do you do that? can you store the score in the function and then just append it at the end? 
        a. create a function where the time remaining gets appeneded to the score (fuck)
    5. add styling elements to the list
4. score page has a submit form to take your initials and reveal your score with 2 buttons to log score and go back to homepage
5. score submission must be saved to localStorage on the highscores modal
6. fuuuuuuuck meeeeee

use modals on bootcamp
and uhhhh die soon after omg jesus christ