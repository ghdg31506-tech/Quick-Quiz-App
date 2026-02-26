const username = document.querySelector("#input");
const saveButton = document.querySelector("#savehighScore");
const Score = localStorage.getItem("highscore");
const finalScore = document.querySelector("#highSaveScore");

finalScore.innerText = Score;

const finalHighScore = JSON.parse(localStorage.getItem("SavehighScore")) || [];

const MAX_HIGH_SCORE = 5;
console.log(finalHighScore)

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
})

saveHighxcore = (e) => {
    console.log("click here to save button");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }
    finalHighScore.push(score);
    finalHighScore.sort((a, b) => b.score - a.score)
    finalHighScore.splice(MAX_HIGH_SCORE);

    localStorage.setItem("SaveHighScore", JSON.stringify(finalHighScore));
    window.location.assign("index.html")
    console.log(finalHighScore);
}