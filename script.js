var score = 0;
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
var highScore = parseInt(document.getElementById("high-score"));

// Grab user score
var userScore = document.getElementById("current-score");

// Right or wrong
var isCorrectId = document.getElementById("is-correct");

var questionSet = [{q: "How many megabytes (MB) are in a gigabyte (GB)?", c: ["1024", "0", "2048", "64"], a: "1024"},
                   {q: "What characters surround a string in Javascript?", c: ["Single quotation marks", "Triple quotation marks", "No quotation marks", "Double quotation marks"], a: "Double quotation marks"},
                   {q: "When does Coding Boot Camp end?", c: ["Never", "Tomorrow", "June 8", "May 31"], a: "June 8"},
                   {q: "What is Kevin's favorite pet?", c: ["dog", "cat", "bird", "fish"], a: "cat"}];

for(var i = 0; i < allChoiceButtons.length; i++) {
    allChoiceButtons[i].addEventListener("click", function() {
        userChoice = this.innerHTML;
        compareAnswer(userChoice, correctAnswer);
        buttonPressed = true;

        clearQuiz();
        questionNum++;
        if(questionNum = questionSet.length) {
            window.location.replace("./score-sheet.html");
        }
        else {
            renderQuiz();
        }
    });
}

function renderQuiz() {
    // Render current question
    questionScreen.innerHTML = (questionNum + 1) + ". " + questionSet[questionNum].q;
    console.log(questionSet[questionNum].q);

    userScore.innerHTML = score;
    console.log(userScore.innerHTML);

    correctAnswer = questionSet[questionNum].a;

    // Render current choices
    for(var i = 0; i < questionSet[0].c.length; i++) {
        allChoiceButtons[i].innerHTML = questionSet[questionNum].c[i];
        console.log(allChoiceButtons[i].text);
    }

    if(isCorrectId.innerHTML !== "") {
        setTimeout(function(){isCorrectId.innerHTML = "";}, 1500);
    }
}

function clearQuiz() {
    // Clear question screen for the next question
    questionScreen.innerHTML = "";
    //questionScreen.append(questionScreen.text);
    questionScreen.append(questionScreen.innerHTML);

    // Clear choices for the next choices
    for(var i = 0; i < questionSet[0].c.length; i++) {
        allChoiceButtons[i].innerHTML = "";
    }

    userChoice;

    buttonPressed = false;
}

function compareAnswer(choice, correctAnswer) {
    console.log(choice + ", " + correctAnswer);
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
//clearQuiz();
//renderQuiz(questionSet[1]);
//clearQuiz();
//renderQuiz(questionSet[2]);