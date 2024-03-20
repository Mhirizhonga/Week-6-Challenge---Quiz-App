function getHighScores()  {
    //Retrieve high scored from local storage
    const highScores = JSON.parse(localStorage.getItem("highScores"))  || [];
    return highScores;
}

function renderHighScores()  {
    const highScores = getHighScores();
    const highScoresList = document.getElementById("highscores");
    highScoresList.innerHTML = "";

    highScores.forEach((score, index)  =>  {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
        highScoresList.appendChild(listItem);
   });
 }

 renderHighScores();