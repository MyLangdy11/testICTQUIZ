document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    {
      question: "1What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "2What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "3What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "4What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "5What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "6What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "7What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "8What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "9What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "10What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "11What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "12What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "13What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "14What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "15What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    {
      question: "16What is the capital of France?",
      image: "img/background.jpg",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
      additionalInfo: "Paris is the capital of France and is known for its iconic landmarks such as the Eiffel Tower and Louvre Museum."
    },
    // Add more questions here...
  ];

  let currentQuestionIndex = 0;
  let currentQuestion;
  let timer;
  let selectedQuestions = [];

  const questionElement = document.querySelector(".question");
  const optionsElement = document.querySelector(".options");
  const resultElement = document.getElementById("result");
  const additionalInfoElement = document.querySelector(".additional-info");
  const closeBtn = document.getElementById("close-btn");
  const timerElement = document.querySelector(".timer");
  const gameHistoryElement = document.querySelector(".game-history");
  const playAgainBtn = document.getElementById("play-again-btn");

  // Sound effects
  const correctSound = new Audio("sound/correct.mp3");
  const incorrectSound = new Audio("sound/incorrect.mp3");
  const timeisout=new Audio("sound/timeout.mp3");

  startGame();

  function startGame() {
    selectedQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    showQuestion();
  }

  function getRandomQuestions(num) {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, num);
  }

  function showQuestion() {
    currentQuestion = selectedQuestions[currentQuestionIndex];
  
    questionElement.innerHTML = `
      <img src="${currentQuestion.image}" alt="">
      <p>${currentQuestion.question}</p>
    `;
  
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const liElement = document.createElement("li");
      liElement.textContent = (index + 1) + ". " + option;
      liElement.addEventListener("click", () => {
        checkAnswer(index);
      });
      optionsElement.appendChild(liElement);
    });
  
    resetTimer();
    startTimer();
  }

  function checkAnswer(selectedIndex) {
    clearInterval(timer);

    const selectedOption = optionsElement.children[selectedIndex];

    if (selectedIndex === currentQuestion.answer) {
      selectedOption.classList.add("correct");
      resultElement.textContent = "ត្រឹមត្រូវ! ពូកែមែនទែន";
      resultElement.classList.add("correct");
      correctSound.play();
      showAdditionalInfo();
    } else {
      const correctOption = optionsElement.children[currentQuestion.answer];
      resultElement.textContent = "មិនត្រឹមត្រូវទេ! ចម្លើយត្រឹមត្រូវគឺ: " + correctOption.textContent;
      resultElement.classList.add("incorrect");
      incorrectSound.play();
      showAdditionalInfo();
    }

    optionsElement.classList.add("disabled");
  }

  function showAdditionalInfo() {
    additionalInfoElement.style.display = "block";
    additionalInfoElement.innerHTML = `
      <h2>Additional Information</h2>
      <p>${currentQuestion.additionalInfo}</p>
      <button id="close-info-btn">Close</button>
    `;

    const closeInfoBtn = document.getElementById("close-info-btn");
    closeInfoBtn.addEventListener("click", function() {
      additionalInfoElement.style.display = "none";
      resultElement.innerHTML = "";
      resultElement.classList.remove("correct", "incorrect");
      optionsElement.classList.remove("disabled");

      currentQuestionIndex++;
      if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
      } else {
        endGame();
      }
    });
  }

  function startTimer() {
    let timeLeft = 60; // Change the time limit as needed
  
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = "100%";
  
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
  
      const progressPercentage = (timeLeft / 60) * 100;
      progressBar.style.width = `${progressPercentage}%`;
      if (timeLeft<=10){
        timeisout.play();
      }
      if (timeLeft === 0) {
        clearInterval(timer);
        incorrectSound.play();
        showCorrectAnswer();
      }
    }, 1000);
  }
  
  function resetTimer() {
    timerElement.textContent = "60"; // Change the initial time limit as needed
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = "100%";
  }

  function showCorrectAnswer() {
    const correctOption = optionsElement.children[currentQuestion.answer];
    correctOption.classList.add("correct");
    resultElement.textContent = "Time's up!";
    resultElement.classList.add("incorrect");
    showAdditionalInfo();
  }

  function endGame() {
    clearInterval(timer);
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    resultElement.innerHTML = "";
    additionalInfoElement.style.display ="none";
    timerElement.textContent = "";

    const numOfQuestions = selectedQuestions.length;
    const numOfCorrectAnswers = document.querySelectorAll(".correct").length;
    const numOfIncorrectAnswers = numOfQuestions - numOfCorrectAnswers;

    document.getElementById("quiz-container").style.display = "none";
    gameHistoryElement.innerHTML = `
      <h2>Game History</h2>
      <p>Correct Answers: ${numOfCorrectAnswers}</p>
      <p>Incorrect Answers: ${numOfIncorrectAnswers}</p>
      <p>Total Questions: ${numOfCorrectAnswers + numOfIncorrectAnswers}</p>
    `;

    playAgainBtn.style.display = "block";
  }

  playAgainBtn.addEventListener("click", function() {
    startGame();
    gameHistoryElement.innerHTML = "";
    playAgainBtn.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
  });
});