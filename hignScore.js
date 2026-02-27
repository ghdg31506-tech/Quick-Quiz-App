const highscoreShow = document.querySelector(".highscoreShow");

const highscore = JSON.parse(localStorage.getItem("saveHighScore")) || [];

highscoreShow.innerHTML =
    highscore.map(score => {
        return `<li class="liScore"> ${score.name} - ${score.score}</li>`
    }).join("");