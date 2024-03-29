document.addEventListener ("DOMContentLoaded", function ()  {

    const startButton = document.getElementById("start");
    const questionsDiv = document.getElementById("questions");
    const endScreenDiv = document.getElementById("end-screen");
    const timeDisplay = document.getElementById("time");
    const finalScoreDisplay = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const feedbackDiv = document.getElementById("feedback");
    const choicesDiv = document.getElementById("choices");

let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval = null;

const questions = [
    {
        question: "What is the capital of Zimbabwe?",
        choices: ["Cape Town", "Harare", "Accra", "Luanda"],
        correctAnswer: "Harare"
    },
       {
        question: "Which planet is known as the Red Planet?",
        choices: ["Jupiter", "Mars", "Venus", "Saturn"],
        correctAnswer: "Mars"
    },
       {
        question: "Who wrote 'Things Fall Apart'?",
        choices: ["Chimamanda Ngozi", "Tsitsi Dambarembga", "Chinua Achebe", "Aaron Chiundura Moyo"],
        correctAnswer: "Chinua Achebe"
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
    questionsDiv.removeAttribute("class");
    showQuestion();
    startTimer();
}

function showQuestion()  {
    //console.log(showQuestion);
    const currentQuestion = questions[currentQuestionIndex];
   // console.log(currentQuestion);
    const titleValue = document.getElementById("question-title")
    titleValue.textContent = currentQuestion.question;
    choicesDiv.innerHTML = "";
    currentQuestion.choices.forEach( function (choice) {
       // console.log(choice);
        const button = document.createElement("button");
        button.setAttribute("class", "choice")
        button.setAttribute("value", choice)
        button.textContent = choice;
        // button.addEventListener("click", function ()  {
        //     checkAnswer(choice === currentQuestion.correctAnswer);
        // });
        //button.onclick = checkAnswer(currentQuestion.answer);
        choicesDiv.appendChild(button);
    });
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice) => {
     choice.addEventListener("click", () =>  {
        checkAnswer(choice.value === currentQuestion.correctAnswer)
     })  
    })
}

function checkAnswer(isCorrect)  {
    if (!isCorrect) {
        timeLeft -= 10;
        //console.log("10 seconds penalised!");
        if (timeLeft < 0) {
            timeLeft = 0;
        }    
    }
    updateTimerDisplay();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length)  {
        showQuestion()
    } else  {
        endQuiz()
    }
}

function startTimer()  {
     timerInterval = setInterval(function ()  {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft === 0)  {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

clearInterval(timerInterval)
function updateTimerDisplay()  {
    timeDisplay.textContent = timeLeft;
}

function endQuiz()  {
    clearInterval(timerInterval);
    questionsDiv.classList.add("hide");
    endScreenDiv.classList.remove("hide");
    finalScoreDisplay.textContent = timeLeft;

    submitButton.addEventListener("click", function ()  {

        const initials = initialsInput.value.trim();
        if (initials !== "") {
            saveHighScore(timeLeft)
            feedbackDiv.textContent = "Score saved!";
        } else  {
            feedbackDiv.textContent = "Please enter your initials!"
        }
    });
}

startButton.addEventListener("click", startQuiz);

function getHighScores()  {
    //Retrieve high scored from local storage
    const highScores = JSON.parse(localStorage.getItem("highScores"))  || [];
    console.log(highScores);
    return highScores;
}

//Function to update high scores in local storage
function updateHighScores(score)  {

    //Retrieve existing high scores or initialise to emplty array
    let highScores = getHighScores();

    //Add new score to the high scores array
    highScores.push(score);

    //Sort the high scores array in descending order
    highScores.sort((a,b) => b.score - a.score);

    //Store updated high scores in local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function saveHighScore(score)  {

    //Creare an object representing the score
    const highScore =  {
        initials: initialsInput.value.trim(),
        score: score
    };
    console.log(highScore);

    updateHighScores(highScore);
}

renderHighScores();

function renderHighScores()  {
    const highScores = getHighScores();
    const highScoresList = document.getElementById("highscores");
    highScoresList.innerHTML = "Hello";

//     highScores.forEach((score, index)  =>  {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
//         highScoresList.appendChild(listItem);
//    });
 }
});