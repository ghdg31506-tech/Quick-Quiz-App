const username = document.querySelector("#input");
const saveButton = document.querySelector("#savehighScore");
const Score = localStorage.getItem("highscore");

highScore.innerText = Score;

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
    console.log(username.value);
})

saveHighxcore = (e) => {
    console.log("click here to save button");
    e.preventDefault();
}