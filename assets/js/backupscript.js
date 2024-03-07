document.addEventListener("DOMContentLoaded", function ()  {
    var startButton = document.getElementById('start');
    var mainDisplay = document.getElementById('main');
    var questionContainer = document.getElementById('home');
    var timerDisplay = document.getElementById('countdown');
    //IS THE CODE BELOW CORRECT
    var scoreDisplay = document.getElementsByClassName('scores')[0];

    let questionIndex = 0;
    let score = 0;
    let timeLeft = 120;


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

// Function to check answer
function checkAnswer(answer)  {
    const correctAnswer = questions[questionIndex].answer;
    if (answer === correctAnswer)  {
        score++; //increasing score if answer is correct
    } else  {
        timeLeft -= 10; //Deduct 5 seconds if the answer is correct
    }
    questionIndex++; //moving to next question
    renderQuestion(); //render next question
}

//F to render the question
function renderQuestion()  {
    var questionData = questions[questionIndex];
    if (questionData)  {
        let questionHTML = '<h2>' + questionData.question + '</h2><div class="choices">';
        questionData.options.forEach(function(option) {
            questionHTML += '<button class="option-btn">' + option + '</button>';
        });
        questionHTML += '</div>';
        mainDisplay.innerHTML = questionHTML;


// Event listeners for the answer buttons
var answerButtons = document.querySelectorAll('.option-btn');
console.log(answerButtons);
answerButtons.forEach(function(button)  {
button.addEventListener('click', function() {
//checkAnswer(button.text)
console.log(button.textContent);
  })
})

    } else  {
        endQuiz();  //No more questions, emd of quiz
    }
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

    //Event listener  for the save score button
    // HAVE WE ADDED THE SAVE BUTTON YET? OR ADDED LOCAL STORAGE?
// var saveScoreButton = document.getElementById('save-score-btn');
// saveScoreButton.addEventListener('click', saveScore);
}

function saveScore()  {
    const initialsInput = document.getElementById('initials');
    const initials = initialsInput.value.trim();
}

// startButton.addEventListener('click', startQuiz);
});