document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    {
      question: "1តើប្រទេសកម្ពុជាមានផ្ទៃដីប៉ុន្មានគីឡូម៉ែត្រ?",
      image: "img/background.jpg",
      options: ["១៨១,០៣៥ គីឡូម៉ែត្រការ៉េ", "១៩១,២៣៤ គីឡូម៉ែតការ៉េ", "៧៨៩,១២៣ គីឡូម៉ែតការ៉េ", "២៣៤,៩០០ គីឡូម៉ែតការ៉េ"],
      answer: 0,
      additionalInfo: "ប្រទេសកម្ពុជាមានផ្ទៃក្រឡា១៨១០៣៥ គីឡូម៉ែត្រការ៉េ មានព្រំប្រទល់ជាប់ថៃ ឡាវ វៀត​ណាម និងឈូងសមុទ្រ។មានព្រំប្រទល់ជាប់ថៃ ឡាវ វៀត​ណាម និងឈូងសមុទ្រ។មានព្រំប្រទល់ជាប់ថៃ ឡាវ វៀត​ណាម និងឈូងសមុទ្រ។មានព្រំប្រទល់ជាប់ថៃ ឡាវ វៀត​ណាម និងឈូងសមុទ្រ។មានព្រំប្រទល់ជាប់ថៃ ឡាវ វៀត​ណាម និងឈូងសមុទ្រ។មានព្រំប្រទល់ជាប់ថៃ ឡាវ វៀត​ណាម និងឈូងសមុទ្រ។"
    },
    // Add more questions here...
  ];

  let currentQuestionIndex = 0;
  let currentQuestion;
  let timer;
  let selectedQuestions = [];
  let scoreCorrect = 0;
  let scoreIncorrect = 0;

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
    scoreCorrect = 0;
    scoreIncorrect = 0;
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
      scoreCorrect++;
    } else {
      const correctOption = optionsElement.children[currentQuestion.answer];
      resultElement.textContent = "មិនត្រឹមត្រូវទេ! ចម្លើយត្រឹមត្រូវគឺ: " + correctOption.textContent;
      resultElement.classList.add("incorrect");
      incorrectSound.play();
      showAdditionalInfo();
      scoreIncorrect++;
    }

    optionsElement.classList.add("disabled");
  }

  function showAdditionalInfo() {
    additionalInfoElement.style.display = "block";
    additionalInfoElement.innerHTML = `
      <h2>ពន្យល់បន្ថែម</h2>
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
    additionalInfoElement.style.display = "none";
    timerElement.textContent = "";
  
    const numOfQuestions = selectedQuestions.length;
    const numOfCorrectAnswers = document.querySelectorAll(".correct").length;
    const numOfIncorrectAnswers = numOfQuestions - numOfCorrectAnswers;
  
    document.getElementById("quiz-container").style.display = "none";
    document.querySelector(".game-history").style.display="block";
    gameHistoryElement.innerHTML = `
      <h2>Game History</h2>
      <p>ចម្លើយត្រឹមត្រូវ: ${scoreCorrect}</p>
      <p>ចម្លើយមិនត្រឹមត្រូវ: ${scoreIncorrect}</p>
      <p>ចំនួនសំណួរទាំងអស់: ${numOfQuestions}</p>
    `;
  
    playAgainBtn.style.display = "block";
  }

  playAgainBtn.addEventListener("click", function() {
    startGame();
    gameHistoryElement.innerHTML = "";
    playAgainBtn.style.display = "none";
    document.querySelector(".game-history").style.display="none";
    document.getElementById("quiz-container").style.display = "block";
  });
});