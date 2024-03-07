document.addEventListener ("DOMContentLoaded", function ()  {

    const startButton = document.getElementById("start");
    const questionsDiv = document.getElementById("questions");
    const endScreenDiv = document.getElementById("end-screen");
    const timeDisplay = document.getElementById("time");
    const finalScoreDisplay = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");

let currentQuestionIndex = 0;
let timeLeft = 120;

const questions = [
    {
        question: "What is the capital of Zimbabwe?",
        options: ["Cape Town", "Harare", "Accra", "Luanda"],
        answer: "Harare"
    },
       {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Venus", "Saturn"],
        answer: "Mars"
    },
       {
        question: "Who wrote 'Things Fall Apart'?",
        options: ["Chimamanda Ngozi", "Tsitsi Dambarembga", "Chinua Achebe", "Aaron Chiundura Moyo"],
        answer: "Chinua Achebe"
    },
    {
        question: "What is JavaScript?",
        choices: ["A programming language", "A food item", "A type of car"],
        correctAnswer: "A programming language"
      },
      {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
      },
]

function startQuiz()  {
    startButton.classList.add("hide");
    questionsDiv.classList.add("hide");
    showQuestion();
    startTimer();
}

function showQuestion()  {
    const currentQuestion = question[currentQuestionIndex];
    document.getElementById("question-title").textContent = currentQuestion.question;
    choicesDiv.innerHTML = "";
    currentQuestion.choices.forEach(choice =>  {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function ()  {
            checkAnswer(choice === currentQuestion.correctAnswer);
        });
    });
}};

)