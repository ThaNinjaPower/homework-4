var score = 0;
var highScore = 0;
var questionNum = 0;
var numChoices = 4;
var userChoice, correctChoice, isCorrect;
var buttonPressed = false;

// Grab the question element
var questionScreen = document.getElementById("question-display");
console.log(questionScreen);

// Grab the four choice buttons
var allChoiceButtons = document.getElementsByClassName("choice");

// Grab high score
var highScoreId = parseInt(document.getElementById("high-score"));

// Grab user score
var userScore = document.getElementById("current-score");

// Right or wrong
var isCorrectId = document.getElementById("is-correct");

var questionSet = [{q: "How many megabytes (MB) are in a gigabyte (GB)?", c: ["1024", "0", "2048", "64"], a: "1024"},
                   {q: "What characters surround a string in Javascript?", c: ["Hashtags", "Triple quotation marks", "No quotation marks", "Double quotation marks"], a: "Double quotation marks"},
                   {q: "When does Coding Boot Camp end?", c: ["Never", "Tomorrow", "June 8", "May 31"], a: "June 8"},
                   {q: "What is Kevin's favorite pet?", c: ["dog", "cat", "bird", "fish"], a: "cat"}];

for(var i = 0; i < allChoiceButtons.length; i++) {
    allChoiceButtons[i].addEventListener("click", function() {
        userChoice = this.innerHTML;
        compareAnswer(userChoice, correctAnswer);
        buttonPressed = true;

        clearQuiz();
        questionNum++;
        console.log("Question counter: " + questionNum);
        if(questionNum === questionSet.length - 1) {
            if(score > highScore) {
                highScore = score;
            }
            window.location.replace("./score-sheet.html");
            userScore.innerHTML(score);
            console.log("Final score: " + userScore.innerHTML);
            highScoreId.innerHTML(highScore);
            console.log("New high score: " + highScoreId.innerHTML);
        }
        else {
            renderQuiz();
        }
    });
}

function renderQuiz() {
    // Render score
    userScore.innerHTML = score;
    console.log("Score: " + userScore.innerHTML);

    // Render current question
    questionScreen.innerHTML = (questionNum + 1) + ". " + questionSet[questionNum].q;
    console.log("Q" + (questionNum + 1) + ": " + questionSet[questionNum].q);

    correctAnswer = questionSet[questionNum].a;

    // Render current choices
    for(var i = 0; i < questionSet[0].c.length; i++) {
        allChoiceButtons[i].innerHTML = questionSet[questionNum].c[i];
        console.log("Choice " + 1 + ": " + allChoiceButtons[i].innerHTML);
    }

    if(isCorrectId.innerHTML !== "") {
        setTimeout(function(){isCorrectId.innerHTML = "";}, 1500);
    }
}

function clearQuiz() {
    // Clear question screen for the next question
    questionScreen.innerHTML = "";

    // Clear choices for the next choices
    for(var i = 0; i < questionSet[0].c.length; i++) {
        allChoiceButtons[i].innerHTML = "";
    }

    userChoice;

    buttonPressed = false;
}

function compareAnswer(choice, correctAnswer) {
    console.log("User: " + choice + ", Correct: " + correctAnswer);
    if(choice === correctAnswer) {
        isCorrect = true;
        score++;
        isCorrectId.innerHTML = "Correct!";
    }
    else {
        isCorrect = false;
        isCorrectId.innerHTML = "Incorrect!";
    }
    console.log(isCorrect);
}

function viewScore() {
    print(score);
}

renderQuiz();