const username = document.querySelector("#input");
const saveButton = document.querySelector("#savehighScore");
const Score = localStorage.getItem("highscore");
const finalScore = document.querySelector("#highSaveScore");

finalScore.innerText = Score;

const highScoree = JSON.parse(localStorage.getItem("saveHighScore")) || [];


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

    highScoree.push(score);
    highScoree.sort((a,b) => b.score - a.score);
    highScoree.splice(5);
   
    localStorage.setItem("saveHighScore" , JSON.stringify(highScoree));
    console.log(highScoree)

    window.location.assign("index.html")
}