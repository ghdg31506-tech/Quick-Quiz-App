const questionEl = document.querySelector("#question");
const choiceAnswerEl = document.querySelectorAll(".choiceAnswer");
const questionCounterEl = document.querySelector("#questionCounter");
const scoreEl = document.querySelector("#score");
const progressItem = document.querySelector("#progressItem");


let currentQuestion = {};
let aceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple")
    .then(res => { return res.json() })
    .then(loaddata => {
        questions = loaddata.results.map(loadData => {
            const formattedQuestion = {
                question: loadData.question
            }

            const answerChoice = [...loadData.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoice.splice(formattedQuestion.answer - 1, 0, loadData.correct_answer);

            answerChoice.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice
            })

            return formattedQuestion;
        })
        startGame();

    })


const Score_Bonus = 10;
const Max_Questions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions === 0 || questionCounter >= Max_Questions) {
        localStorage.setItem("highscore", score);
        // got to the end page
        return window.location.assign("end.html")
    }



    // Update Progress Bar
    progressItem.style.width = `${(questionCounter / Max_Questions) * 100}%`;

    questionCounter++;
    questionCounterEl.innerText = `Questions: ${questionCounter}/${Max_Questions}`;


    const counterIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[counterIndex];
    questionEl.innerText = currentQuestion.question;

    choiceAnswerEl.forEach((choice) => {
        let number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(counterIndex, 1);

    aceptAnswer = true;
}

choiceAnswerEl.forEach((choice) => {
    choice.addEventListener("click", e => {
        if (!aceptAnswer) return;
        aceptAnswer = false;
        const choiceElement = e.target;
        const choiceNumber = choiceElement.dataset["number"];

        const classToApply =
            choiceNumber == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            updateScore(Score_Bonus)
        }

        choiceElement.parentElement.classList.add(classToApply);

        setTimeout(() => {
            choiceElement.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    });
});

updateScore = num => {
    score += num;
    scoreEl.innerText = score;
}

