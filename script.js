var score = 0;
var numChoices = 4;
var userChoice;
var isCorrect;
var buttonPressed = false;
var choiceButtons = [];

// Grab the question element
var questionScreen = document.getElementById("question-display");
console.log(questionScreen);

// Grab the four choice buttons
for(var i = 0; i < numChoices; i++) {
    choiceButtons.push(document.getElementById("choice-" + (i+1)));
}
console.log(choiceButtons);

var allChoiceButtons = document.getElementsByClassName("choice");

var questionSet = [{q: "1. How many megabytes (MB) are in a gigabyte (GB)?", c: ["1024", "0", "2048", "64"], a: "1024"},
                   {q: "2. What characters surround a string in Javascript?", c: ["Single quotation marks", "Triple quotation marks", "Nothing", "Double quotation marks"], a: "Double quotation marks"},
                   {q: "3. What is Kevin's favorite pet?", c: ["dog", "cat", "bird", "fish"], a: "cat"}];

for(var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function() {
        userChoice = this.text;
        compareAnswer(userChoice, )
        buttonPressed = true;
    });
}

function renderQuiz(question) {
    // Render current question
    questionScreen.text = question.q;
    console.log(question.q);
    questionScreen.append(question.q);

    // Render current choices
    for(var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].text = question.c[i];
        console.log(choiceButtons[i].text);
        choiceButtons[i].append(question.c[i]);
    }
}

function clearQuiz() {
    // Clear question screen for the next question
    questionScreen.text = "";
    questionScreen.append("");

    // Clear choices for the next choices
    for(var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].text = "";
        choiceButtons[i].append("");
    }

    // Clear the user's choice for next question
    userChoice;

    buttonPressed = false;
}

function compareAnswer(choice, correctAnswer) {
    if(choice === correctAnswer) {
        isCorrect = true;
    }
    else {
        isCorrect = false;
    }
    console.log(isCorrect);
}

for(var i = 0; i < questionSet.length; i++) {
    renderQuiz(questionSet[i]);
    console.log(questionSet[i].a);
    
    if (buttonPressed === true) {
        clearQuiz();
        compareAnswer(userChoice, questionSet[i].a);
    }
}