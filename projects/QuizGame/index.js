const quizData = [
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2,
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Syntax",
    ],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Mark Twain",
      "Charles Dickens",
      "William Shakespeare",
      "Leo Tolstoy",
    ],
    correct: 2,
  },
  {
    question: "Which is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correct: 2,
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correct: 2,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["India", "Japan", "China", "Thailand"],
    correct: 1,
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Flute", "Piano", "Violin"],
    correct: 2,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "95°C", "100°C", "110°C"],
    correct: 2,
  },
  // {
  //   question: "Which animal is known as the King of the Jungle?",
  //   options: ["Elephant", "Tiger", "Lion", "Bear"],
  //   correct: 2,
  // },
];

// const question = document.getElementById("question");
// const options = document.getElementById("options");
// const selectedQuestion = Math.random().toPrecision(1) * 10;

// function createQuiz(selectedNumber) {
//   //   quizData.forEach((item) => {
//   //     question.innerText = item.question;
//   //     item.options.forEach((item) => {
//   //       const optionsElement = document.createElement("div");
//   //       optionsElement.innerText = item;
//   //       options.appendChild(optionsElement);
//   //     });
//   //   });
//   question.innerText = quizData[selectedNumber].question;
//   quizData[selectedNumber].options.forEach((item) => {
//     const optionsElement = document.createElement("div");
//     optionsElement.innerText = item;
//     options.appendChild(optionsElement);
//   });
// }

// function executeQuiz() {
//   const interval = setInterval(() => {
//     const selectedQuestion = Math.random().toPrecision(1) * 10;
//     createQuiz(selectedQuestion);
//   }, 3000);

//   //   clearInterval(interval);
// }

// executeQuiz();

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

function updateTimer() {
  timerEl.textContent = `${timeLeft}`;
}
function loadQuestion() {
  timeLeft = 15;
  timer = setInterval(countdown, 1000);
  updateTimer();

  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1} . ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index), true);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectAnswer(index, shouldScore) {
  const q = questions[currentQuestion];
  const btns = document.getElementsByClassName("option-btn");
  //   index === q.correct ? (btns[index].style.backgroundColor = "green") : "";
  [...btns].forEach((button) => (button.disabled = "true"));
  if (index === q.correct) {
    btns[index].style.backgroundColor = "green";
    shouldScore && score++;
  } else {
    btns[index].style.backgroundColor = "red";
    btns[q.correct].style.backgroundColor = "green";
    score--;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  nextBtn.style.display = "none";
  const highScore = localStorage.getItem("quizHighScore") || 0;
  const isNew = score > highScore;
  if (isNew) {
    localStorage.setItem("quizHighScore", score);
  }

  resultEl.innerHTML = `<h2> You have completed the quiz with ${score} marks </h2>
  <button class = "next-btn" onclick = location.reload()>Restart Quiz</button>  `;
}

function countdown() {
  timeLeft--;
  updateTimer();
  if (timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct, false);
  }
}

loadQuestion();
