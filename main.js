const prompt = require("prompt-sync")();

const questionBank = [
  { question: "What is the capital of Indiana?", answer: "Indianapolis" },
  { question: "What anime is Son Goku from?", answer: "Dragon Ball" },
  {
    question: "What is the name of the main character in the Legend of Zelda?",
    answer: "Link",
  },
  {
    question: "What is the name of the main character in the Pokemon series?",
    answer: "Ash Ketchum",
  },
  { question: "What continent is also a country?", answer: "Australia" },
];


function getAnswer(question) {
    let userAnswer = prompt(question + " ");
    return userAnswer;
}

function playGame() {
    let score = 0;
    for (let q of questionBank) {
        let userAnswer = getAnswer(q.question);
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Wrong! The correct answer is " + q.answer);
        }
    }
    return score;
}

function printScore() {
    console.log("Your final score is " + playGame() + "/" + questionBank.length);
}
printScore();