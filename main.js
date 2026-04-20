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

let score = 0;

for (let q of questionBank) {
    let userAnswer = prompt(q.question + " ");
    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Wrong! The correct answer is " + q.answer);
    }
    
}
console.log("Your final score is " + score + "/" + questionBank.length);