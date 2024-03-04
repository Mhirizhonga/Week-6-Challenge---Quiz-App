document.addEventListener("DOMContentLoaded", function ()  {
    var startButton = document.querySelector('.btn');
    var mainDisplay = document.getElementById('main');
    var questionContainer = document.getElementById('home');
    var timerDisplay = document.getElementById('countdown');

    let questionIndex = 0;
    let score = 0;
    let timeLeft = 60;


var questions = [
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
];

//F to start the quiz
function startQuiz(event) {
    event.preventDefault();
    startButton.style.display = 'none'; //Hide the start button
    renderQuestion(); //Display the first question
    startTimer(); //Start the timer
}

//F to render the question
function renderQuestion()  {
    var questionData = questions[questionIndex];
    if (questionData)  {
        let questionHTML = '<h2>' + questionData.question + '</h2><div class="choices">';
        questionData.options.forEach(function(option) {
            questionHTML += '<button onclick="checkAnswer(\'' + option + '\')">' + option + '</button>';
        });
        questionHTML += '</div>';
        mainDisplay.innerHTML = questionHTML;
    } else  {
        endQuiz();  //No more questions, emd of quiz
    }
}

// Function to check answer
function checkAnswer(answer)  {
    const correctAnswer = questions[questionIndex].answer;
    if (answer === correctAnswer)  {
        score++; //increasing score if answer is correct
    } else  {
        timeLeft -= 5; //Deduct 10 seconds if the answer is correct
    }
    questionIndex++; //moving to next question
    renderQuestion(); //render next question
}

// Function to start timer
function startTimer()  {
    const timer = setInterval(function ()  {
          timeLeft--;
          timerDisplay.textContent = 'Time: ' + timeLeft;

          if (timeLeft <= 0)  {
            clearInterval(timer);  //Stop the timer when time runs out
            endQuiz();
          }
    }, 1000 );  //Update every second
}

//Function to end the quiz
function endQuiz()  {
    let endHTML = '<h2>Quiz Ended!</h2><p>Your score is: ' + score + '</p><label for="initials">Enter your initials:</label><input type="text" id="initials"><button onclick="saveScore()">Save Score</button>';
    mainDisplay.innerHTML = endHTML;
    questionContainer.style.display = 'none'; //hide question counter
}

function saveScore()  {
    const initialsInput = document.getElementById('initials');
    const initials = initialsInput.value.trim();
}

startButton.addEventListener('click', startQuiz);
});