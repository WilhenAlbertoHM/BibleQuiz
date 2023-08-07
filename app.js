// A list of questions with possible answers.
const questions = [
    {
        question: "Where was Jesus born?",
        answers: [
            {text: "Egypt", correct: false},
            {text: "Bethlehem", correct: true},
            {text: "Nazareth", correct: false},
            {text: "Athens", correct: false}
        ]
    }, 
    {
        question: "What was the first miracle that Jesus perform during His ministry?",
        answers: [
            {text: "He healed a blind man", correct: false},
            {text: "He resurrected Lazarus", correct: false},
            {text: "He turned water into wine", correct: true},
            {text: "He walked on water", correct: false}
        ]
    },
    {
        question: "How many days did it take God to create everything?",
        answers: [
            {text: "7", correct: false},
            {text: "5", correct: false},
            {text: "1", correct: false}, 
            {text: "6", correct: true}
        ]
    },
    {
        question: "Why did the people mock Noah for building the Ark?",
        answers: [
            {text: "It rained before and nothing happened, why worry?", correct: false},
            {text: "His accent was funny", correct: false},
            {text: "They thought he was irrational and a fool", correct: true},
            {text: "He was known to lie a lot", correct: false}
        ]
    },
    {
        question: "What is the Jewish sacred text called?",
        answers: [
            {text: "The Tanakh", correct: true},
            {text: "The Corinth", correct: false},
            {text: "The Abrahamic Law", correct: false},
            {text: "The Quran", correct: false}
        ]
    },
    {
        question: "Who wrote most of the New Testament?",
        answers: [
            {text: "Paul", correct: false},
            {text: "Luke", correct: true},
            {text: "David", correct: false}, 
            {text: "John", correct: false}
        ]
    },
    {
        question: "Which of Jesus' disciples is known as the \'beloved\'?",
        answers: [
            {text: "Luke", correct: false},
            {text: "Peter", correct: false},
            {text: "John", correct: true},
            {text: "James", correct: false}
        ]
    },
    {
        question: "Which ONE of these is part of the Ten Commandments?",
        answers: [
            {text: "Collect taxes to build churches", correct: false},
            {text: "You have the right to stone whoever is caught in adultery", correct: false},
            {text: "You shall honor your parents, unless they don't love you", correct: false}, 
            {text: "Keep the Sabbath day to worship, remember creation, and rest", correct: true}
        ]
    },
    {
        question: "Who cut Samson's hair?",
        answers: [
            {text: "Samson", correct: false}, 
            {text: "Delilah", correct: false}, 
            {text: "A servant", correct: true}, 
            {text: "His donkey", correct: false}
        ]
    }
];

// Get the elements for each ID of the question box, options, and next button.
const welcomeTextElement = document.getElementById("welcome-text");
const questionElement = document.getElementById("question-text");
const optionsButtons = document.getElementById("options-buttons");
const nextButton = document.getElementById("next");

// Keeps track of the question while we can go next and the score.
var currentQuestionIndex = 0;
var score = 0;

// Starts the quiz.
function startQuiz() {
    welcomeTextElement.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Resets the quiz after answering all questions.
function resetQuiz() {
    nextButton.style.display = "none";
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }
    startQuiz();
}

// Shows question to user.
function showQuestion() {
    // Clear the previous answer buttons.
    optionsButtons.innerHTML = "";
    
    // Make the "next" button disappear.
    nextButton.style.display = "none";

    // Get current question from questions list.
    let currentQuestion = questions[currentQuestionIndex];

    // Get the question number.
    let questionNumber = currentQuestionIndex + 1;

    // Show proper question on display
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    // Show each of the possible answers from the question.
    // For each answer for the current question...
    currentQuestion.answers.forEach(answer => {
        // Create the button for the answer with the corresponding answer text.
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        // Add the button to the options.
        button.classList.add("options-buttons");
        optionsButtons.appendChild(button);

        // Set "data-correct" attribute on the button if the answer 
        // is correct for later use in handling user input.
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // When the button is clicked, we check if the option is right or wrong,
        // displaying green or red.
        button.addEventListener("click", selectAnswer);
    });
}

// Updates the score and shows if the selected answer is correct or incorrect
// by the color of green or red after clicking on an answer.
function selectAnswer(e) {
    // Get the selected button that the user clicked on.
    const selectedButton = e.target;

    // Check if the selected answer is correct by accessing the "data-correct" attribute
    // previously created on showQuestion().
    const isCorrect = selectedButton.dataset.correct === "true";

    // If the selected answer is correct, add it to "correct" to display green, and increase score.
    // If the selected answer is incorrect, add it to "incorrect" to display red.
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable all answer buttons to prevent further selections after the user has chosen an answer.
    // Store every correct answer into "correct" to prevent further selection of options.
    Array.from(optionsButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        // Disable button.
        button.disabled = true;
    });

    // Make the "next" button appear for user to click and move on.
    nextButton.style.display = "block";
}

// After clicking "next", check if there's another question after the current one.
nextButton.addEventListener("click", checkNext);

// Displays the next question.
function nextQuestion() {
    // Go to the next question.
    currentQuestionIndex++;

    // Display question if there are more questions, show score, otherwise.
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Show the score at the end of the quiz.
function showScore() {
    // Remove the options to show the score only.
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }

    // Show score that the user got and update text of the "next" button to 
    // "Play Again" for user to play again.
    questionElement.innerHTML = "You scored " + score + " out of  " + questions.length + "!";
    nextButton.innerHTML = "Play Again";

    // Remove the previous click event listener from nextButton.
    nextButton.removeEventListener("click", checkNext);

    // Add the click event listener to start the quiz again when "Play Again" is clicked.
    nextButton.addEventListener("click", resetQuiz);
}

// Checks if there are more questions to be answered. Reset quiz otherwise.
function checkNext() {
    // Hide the welcome text.
    welcomeTextElement.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        showScore();
    }
}

startQuiz();
