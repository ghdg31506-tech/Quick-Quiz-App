const username = document.querySelector("#input");
const saveButton = document.querySelector("#savehighScore");
const Score = localStorage.getItem("highscore");
const finalScore = document.querySelector("#highSaveScore");

finalScore.innerText = Score;

const highScore = JSON.parse(localStorage.getItem("saveHighScore")) || [];
console.log(highScore)

const MAX_HIGH_SCORE = 5;


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

    highScore.push(score);
    highScore.sort((a,b) => b.score - a.score);
    highScore.splice(5);
   
    localStorage.setItem("saveHighScore" , JSON.stringify(highScore));

    window.location.assign("index.html")
}