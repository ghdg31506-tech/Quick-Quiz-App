const questionEl = document.querySelector("#question");
const choiceAnswerEl = document.querySelectorAll(".choiceAnswer");
const questionCounterEl = document.querySelector("#questionCounter");
const scoreEl = document.querySelector("#score");


let currentQuestion = {};
let aceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which CSS property is used to make text bold?",
        choice1: "font-style",
        choice2: "font-weight",
        choice3: "text-transform",
        choice4: "text-decoration",
        answer: 2
    },

    {
        question: "Which CSS property is used to make an element stay fixed at the top of the screen while scrolling?",
        choice1: "position: relative",
        choice2: "position: absolute",
        choice3: "position: sticky",
        choice4: "position: fixed",
        answer: 4
    },

    {
        question: "Which Javascript method is used to select an element by its ID?",
        choice1: "querySelectorAll()",
        choice2: "getElementById()",
        choice3: "getElementByClassName()",
        choice4: "selectElement",
        answer: 2
    }
];

const Score_Bonus = 10;
const Max_Questions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions === 0 || questionCounter >= Max_Questions) {
        // got to the end page
        return window.location.assign("end.html")
    }

    questionCounter++;
    questionCounterEl.innerText = `${questionCounter}/${Max_Questions}`;
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
        console.log(choiceNumber)

          const classToApply =
            choiceNumber == currentQuestion.answer ? "correct" : "incorrect";

            if(classToApply === "correct") {
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

startGame();