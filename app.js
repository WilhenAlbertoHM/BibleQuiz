// A list of questions with possible answers.
let questions = [
    {
        question: "Where was Jesus born?",
        answers: [
            {text: "Egypt", correct: false},
            {text: "Bethlehem", correct: true},
            {text: "Nazareth", correct: false},
            {text: "Athens", correct: false}
        ],
        explanation: "\"Now when Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, \
        there came wise men from the east to Jerusalem.\" - Matthew 2:1-2."
    }, 
    {
        question: "What was the first miracle that Jesus perform during His ministry?",
        answers: [
            {text: "He healed a blind man", correct: false},
            {text: "He resurrected Lazarus", correct: false},
            {text: "He turned water into wine", correct: true},
            {text: "He walked on water", correct: false}
        ],
        explanation: "\"This was Jesus' first miracle, and he did it in the village of Cana in Galilee. There Jesus showed \
        his glory, and his disciples put their faith in him.\" - John 2:11." 
    },
    {
        question: "How many days did it take God to create everything?",
        answers: [
            {text: "7", correct: false},
            {text: "5", correct: false},
            {text: "1", correct: false}, 
            {text: "6", correct: true}
        ],
        explanation: "\"By the seventh day God completed His work which He had done, and He rested on the seventh \
        day from all His work which He had done.\" - Genesis 2:2."
    },
    {
        question: "Why did the people during the days of Noah get caught in the flood?",
        answers: [
            {text: "A giant fish ate and left no crumbs", correct: false},
            {text: "They were short", correct: false},
            {text: "They did not care about God and didn't want to repent of their evil acts", correct: true},
            {text: "They didn't have the tools to build the Ark in time", correct: false}
        ],
        explanation: "God saw the wickedness and unrighteousness the world had become, \
        so he told Noah to build an Ark to save his family and himself, as he said to him, \'I am going \
        to bring floodwaaters on the earth to destroy all life under the heavens, every creature that has the breath \
        of life in it. Everything on earth will perish,\' from Genesis 6:17."
    },
    {
        question: "What is the Jewish sacred text called?",
        answers: [
            {text: "The Tanakh", correct: true},
            {text: "The Corinth", correct: false},
            {text: "The Abrahamic Law", correct: false},
            {text: "The Quran", correct: false}
        ],
        explanation: "The Tanakh is essentially the Hebrew Bible."
    },
    {
        question: "Who wrote most of the New Testament?",
        answers: [
            {text: "Paul", correct: false},
            {text: "Luke", correct: true},
            {text: "David", correct: false}, 
            {text: "John", correct: false}
        ],
        explanation: "This is a tricky question. Luke wrote the Gospel of Luke and Acts, \
        the two of the longest books in the New Testament, with a total of 37,932 words, while Paul contributed to \
        the 12 books in the New Testament, with a total of 32,408 words (OverviewBible, 2014). Note that the question \
        is asking about who wrote the most (by volume), not who wrote the most books."
    },
    {
        question: "Which of Jesus' disciples is known as the \'beloved\'?",
        answers: [
            {text: "Luke", correct: false},
            {text: "Peter", correct: false},
            {text: "John", correct: true},
            {text: "James", correct: false}
        ],
        explanation: "Throughout the Gospel of John, there are various mentions of the \'disciple whom He loved\', \
        referring to John. This name is attributed to John because of the numerous mentions (e.g., \"So she ran and came to \
        Simon Peter and to the other disciple whom Jesus loved, and said to them, \'They have taken away the Lord out of the tomb, \
        and we do not know where they have laid Him.\'\" - John 20:2)."
    },
    {
        question: "Which ONE of these is part of the Ten Commandments?",
        answers: [
            {text: "Collect taxes to build churches", correct: false},
            {text: "You have the right to stone whoever is caught in adultery", correct: false},
            {text: "You shall honor your parents, unless they don't love you", correct: false}, 
            {text: "Keep the Sabbath day to worship, remember creation, and rest", correct: true}
        ],
        explanation: "Read the previous answers carefully and you'll find the faults. \
        \"Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, \
        but the seventh day is a Sabbath to the Lord your God. On it you shall not do any work, you, or \
        your son, or your daughter, your male servant, or your female servant, or your livestock, or the sojourner, \
        who is within your gates.\" - Exodus 20:8-10."
    },
    {
        question: "Who cut Samson's hair?",
        answers: [
            {text: "Samson", correct: false}, 
            {text: "Delilah", correct: false}, 
            {text: "A Philistine", correct: true}, 
            {text: "His donkey", correct: false}
        ],
        explanation: "\"After putting him to sleep on [Delilah\'s] lap, she called for someone to shave off \
        the seven braids of his hair, and so began to subdue him. And his strength left him.\" - Judges 16:18. \
        The person Delilah called was a Philistine, possibly a servant."
    },
    {
        question: "Who persecuted and killed Christians but then became a Christian?",
        answers: [
            {text: "Judas", correct: false},
            {text: "Samson", correct: false},
            {text: "Solomon", correct: false},
            {text: "Saul", correct: true}
        ],
        explanation: "Saul fell to the ground and heard Jesus tell him, \"Saul, Saul, why are you persecuting me?\" \
        Saul was persecuting the body of Christ, consisting of Christians and the church."
    },
    {
        question: "I am the \_\_\_\_, you are the \_\_\_\_.",
        answers: [
            {text: "branches, vine", correct: false},
            {text: "vine, branches", correct: true},
            {text: "vineyard, fruits", correct: false},
            {text: "wine, grapes", correct: false}
        ],
        explanation: "\"I am the vine, you are the branches. If you remain in me and I in you, you will bear much fruit; \
        apart from me you can do nothing.\" - John 15:5."
    },
    {
        question: "Who wrote Proverbs?",
        answers: [
            {text: "David", correct: false},
            {text: "Moses", correct: false},
            {text: "Solomon", correct: true},
            {text: "Unknown", correct: false}
        ],
        explanation: "In the beginning of the book of Proverbs, it already tells you who wrote it, as it says,\"The proverbs of \
        Solomon son of David, king of Israel:\" - Proverbs 1:1."
    },
    {
        question: "In which book of the Bible do we read about Mordecai?",
        answers: [
            {text: "Esther", correct: true},
            {text: "Ruth", correct: false},
            {text: "Mordecai", correct: false},
            {text: "Exodus", correct: false}
        ],
        explanation: "Mordecai is Esther's uncle, and he took good care of Esther until she became \
        a queen and married King Xerxes (or also called King Ahasuerus). Also, if you clicked on Mordecai, \
        there's no book called \"Mordecai\" in the Bible, so I suggest you read it carefully."
    },
    {
        question: "Who was the god/goddess or idol that Ephesians worshipped the most?",
        answers: [
            {text: "Zeus", correct: false},
            {text: "Poseidon", correct: false},
            {text: "Artemis", correct: true},
            {text: "Athena", correct: false}
        ],
        explanation: "\"There is danger not only that our business will fall into disrepute, but also that \
        the temple of the great goddess Artemis will be discredited and her majesty deposed - she who is worshipped by all \
        the province of Asia and the whole world. When the men heard this, they were enraged and began shouting, \'Great is Artemis \
        of the Ephesians!\'\" - Acts 19:27-28."
    },
    {
        question: "Which one of these is NOT a prophet?",
        answers: [
            {text: "Ruth", correct: true},
            {text: "Deborah", correct: false},
            {text: "Moses", correct: false},
            {text: "Elijah", correct: false}
        ],
        explanation: "Ruth was a Moabite woman who married to Boaz, and is the lineage of David, which leads to Jesus Christ at one point. \
        She is known for her loyalty, kindness, and devotion to her mother-in-law, Naomi, after her first husband died. Deborah is considered a prophet in Judaism, \
        and the rest are well known prophets."
    }
];

// Verses
let verses = [
    "\"For God so loved the world that He sent His and only Son, that whoever believes in Him \
    should not perish but have eternal life.\" - John 3:16",
    "\"Share with the Lord's people who are in need. Practice hospitality.\" - Romans 12:13",
    "\"In the same way, let your light shine before others, that they may see your good deeds \
    and glorify your Father in heaven.\" - Matthew 5:16",
    "\"Do not withhold good from those to whom it is due, when it is in your power to act.\" - Proverbs 3:27",
    "\"Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, \
     not looking to your own interests but each of you to the interests of the others.\" - Philippians 2:3-4",
    "\"Therefore encourage one another and build each other up, just as in fact you are doing.\" - 1 Thessalonians 5:11",
    "\"But to you who are listening I say: Love your enemies, do good to those who hate you, bless those who curse \
    you, pray for those who mistreat you.\" - Luke 6:27-28",
    "\"Do to others as you would have them do to you.\" - Luke 6:31",
    "\"In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words \
    the Lord Jesus himself said: \'It is more blessed to give than to receive.\'\" - Acts 20:35",
    "\"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\" - Galatians 6:9",
    "\"Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.\" - Isaiah 1:17",
    "\"We love because he first loved us. Whoever claims to love God yet hates a brother or sister is a liar. \
    For whoever does not love their brother and sister, whom they have seen, cannot love God, whom they have not seen.\" - 1 John 4:19-20",
    "\"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\" - Ephesians 2:10",
    "\"Be devoted to one another in love. Honor one another above yourselves.\" - Romans 12:10",
    "\"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, \
    to give you a future and a hope.\" - Jeremiah 29:11",
    "\"Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. \
    He will not leave you or forsake you.\" - Deuteronomy 31:6",
    "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, \
     and he will make straight your paths.\" - Proverbs 3:5-6",
    "\"Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!\" - Psalm 34:8",
    "\"Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, \
    I will uphold you with my righteous right hand.\" - Isaiah 41:10",
    "\"Be on your guard; stand firm in the faith; be courageous; be strong. Do everything in love.\" - 1 Cor. 16:13-14",
    "\"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me;\
    your rod and your staff comfort me.\ - Psalm 23:4"
];

// Get the elements for each ID of the question box, options, and next button.
const welcomeTextElement = document.getElementById("welcome-text");
const questionElement = document.getElementById("question-text");
const optionsButtons = document.getElementById("options-buttons");
const nextButton = document.getElementById("next");
let explanation = document.getElementById("explanation");

// Keeps track of the question while we can go next and the score.
var currentQuestionIndex = 0;
var score = 0;

// Shuffle the order of the questions.
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayRandomVerse() {
    const index = Math.floor(Math.random() * verses.length);
    const verseElement = document.getElementById("verse");
    verseElement.innerHTML = verses[index];
}

// Starts the quiz.
function startQuiz() {
    welcomeTextElement.style.display = "block";
    displayRandomVerse();
    setInterval(displayRandomVerse, 10000);

    // Shuffle the questions array to randomize the order.
    questions = shuffleQuestions(questions);
    
    // Reset count.
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

    // Hide explanation after moving on to the next question.
    explanation.style.display = "none";

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

    explanation.innerHTML = "Explanation: " + questions[currentQuestionIndex]['explanation'];
    explanation.style.display = "block";

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
    // Hide explanation from last question.
    explanation.style.display = "none";

    // Remove the options to show the score only.
    while (optionsButtons.firstChild) {
        optionsButtons.removeChild(optionsButtons.firstChild);
    }

    // Show score that the user got and update text of the "next" button to 
    // "Play Again" for user to play again.
    questionElement.innerHTML = "You scored " + score + " out of  " + questions.length + "! -> " + (score / questions.length * 100).toFixed(1) + "\%";
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
