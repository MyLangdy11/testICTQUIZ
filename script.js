document.addEventListener("DOMContentLoaded", function() {
  const questions = [
    {
          question: "អ្វីទៅជាកុំព្យូទ័រ?",
            image: "null",
          options: ["កុំព្យូទ័រគឺជាម៉ាស៊ីនអេឡិចត្រូនិកដែលអាចបោះពុម្ពបាន និងអាចចាក់វីដេអូ រូបភាពជាដើម។","កុំព្យូទ័រគឺជាម៉ាស៊ីនដែលត្រូវការKeyboard Mouseដើម្បីដំណើរការ។","កុំព្យូទ័រគឺជាម៉ាស៊ីនអេឡិចត្រូនិក ដែលអាចបញ្ចូល គណនា រក្សាទុកទិន្នន័យ(ឯកសារ) និងបញ្ចេញព័ត៌មានមកក្រៅវិញ។","កុំព្យូទ័រគឺជាម៉ាស៊ីនដែលមានសារសំខាន់ជាងគេក្នុងជីវិតរស់នៅ។"],
          answer: 2,
                additionalInfo: "កុំព្យូទ័រគឺជាម៉ាស៊ីនអេឡិចត្រូនិក ដែលអាចបងញ្ចូល គណនា រក្សាទុកទិន្នន័យ(ឯកសារ) និងបញ្ចេញព័ត៌មានមកក្រៅវិញ។ វាជាឧបករណ៍អេឡិចត្រូនិកសម្រាប់ធ្វើការជាមួយព័ត៌មាន។ អ្នកអាចប្រើកុំព្យូទ័រសម្រាប់បង្កើតឯកសារ ដូចជា សរសេរសំបុត្រ គូរគំនូរ គណនា សរសេរកូដកម្មវិធី ឌីហ្សាញផ្សេងៗ។ល។"
        },
      {
          question: "តើសមាសភាគសំខាន់ៗរបស់កុំព្យូទ័រមានប៉ុន្មាន?",
            image: "null",
          options: ["២","៣","៤","៦"],
          answer: 2,
               additionalInfo: "កុំព្យូទ័រផ្សំឡើងដោយសមាសភាគសំខាន់៤គឺ៖ ១.ធុងប្រព័ន្ធ(System Unit), ២.ម៉ូនីទ័រ(Monitor), ៣.ក្ដារចុច(Keyboard), ៤.កណ្ដុរ(Mouse)។"
        },
      {
          question: "ក្នុងចំណោមចម្លើយខាងក្រោម មួយណាដែលជាមុខងាររបស់ធុងប្រព័ន្ធ (System Unit)?",
            image: "null",
          options: ["បង្ហាញព័ត៌មានផ្សេងៗ ដែលកំពុងដំណើរការក្នុងកុំព្យូទ័រ","ជាឧបករណ៍បញ្ចូលទិន្នន័យ","ជាធុងដែលផ្ទុកនូវសមាសភាគសំខាន់ៗសម្រាប់ឱ្យប្រព័ន្ធដំណើរការបាន","ជាឧបករណ៍អនុញ្ញាត្តឱ្យយើងបញ្ជាព្រួញកណ្ដុរបាន"],
          answer: 2,
                additionalInfo: "ធុងប្រព័ន្ធ គឺជាធុងមួយដែលផ្ទុកនូវសមាសភាគសំខាន់ៗសម្រាប់ឱ្យប្រព័ន្ធកុំព្យូទ័រដំណើរការបាន។ សមាសភាគទាំងនោះមានដូចជា បន្ទះមេ(Motherboard) ខួរក្បាល(CPU) ថាសរឹង(Hard Drive) សតិ(RAM) កាតបន្ថែម(Expansion Card) ដ្រាយស៊ីឌីរ៉ូម(CD-ROM Drive)។ល។ សមាសភាគនេះវាដូចជាខួរក្បាលរបស់មនុស្ស ដែលមានតួនាទីយ៉ាងសំខាន់ក្នុងការគិត និងធ្វើឱ្យប្រព័ន្ធទាំងមូលដំណើរការបាន។"
        },
      {
          question: "ក្នុងចំណោមចម្លើយខាងក្រោម មួយណាដែលជាតួរនាទីរបស់កណ្ដុរ(Mouse)?",
            image: "null",
          options: ["បង្ហាញព័ត៌មានផ្សេងៗ ដែលកំពុងដំណើរការក្នុងកុំព្យូទ័រ","ជាឧបករណ៍បញ្ចូលទិន្នន័យ","ជាធុងដែលផ្ទុកនូវសមាសភាគសំខាន់ៗសម្រាប់ឱ្យប្រព័ន្ធដំណើរការបាន","ជាឧបករណ៍កាន់ដោយដៃ ដែលអនុញ្ញាតឱ្យយើងបញ្ជាព្រួញកណ្ដុរ ដែលស្ថិតលើអេក្រង់ ដើម្បីជ្រើសរើសរូបតំណាង ឬជ្រើសម៉ឺនុយណាមួយ។"],
          answer: 3,
                additionalInfo: "កណ្ដុរ(Mouse) ជាឧបករណ៍កាន់ដោយដៃ ដែលអនុញ្ញាតឱ្យយើងបញ្ជាព្រួញកណ្ដុរ ដែលស្ថិតលើអេក្រង់ ដើម្បីជ្រើសរើសរូបតំណាង ឬជ្រើសម៉ឺនុយណាមួយ។ វាត្រូវបានប្រើដោយភ្ជាប់ទៅនឹងធុងប្រព័ន្ធតាមរយៈច្រក(Port) PS/2 ឬUSB។"
        },
      {
          question: "ក្នុងចំណោមចម្លើយខាងក្រោម ចម្លើយមួយណាដែលជាមុខងាររបស់ម៉ូនីទ័រ(Monitor)?",
            image: "null",
          options: ["ជាឧបករណ៍បញ្ចូលទិន្នន័យ","ជាឧបករណ៍បង្ហាញព័ត៌មានដែលកំពុងដំណើរការក្នុងកុំព្យូទ័រ រាងដូចទូរទស្សន៍","ជាឧបករណ៍បញ្ជារព្រួញកណ្ដុរ","ជាឧបការផ្ទុក ដូចនឹងខួរក្បាលមនុស្ស"],
          answer: 1,
          explanation: "ម៉ូនីទ័រ(Monitor) គឺជាឧបករណ៍មានរាងដូចទូរទស្សន៍ដែលមាននាទីសម្រាប់បង្ហាញព័ត៌មានផ្សេងៗ ដែលកំពុងដំណើរការលើកុំព្យូទ័រ។ វាត្រូវបានគេប្រើដោយភ្ជាប់ជាមួយនឹងធុងប្រព័ន្ធតាមរយៈច្រក(Port) VGA។"
        },
      
    // {
    //   question: "",
    //   image: "null",
    //   options: ["", "", "", ""],
    //   answer: 0,
    //   additionalInfo: ""
    // },
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
  const exitButton=document.getElementById("exitButton");

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
      if (timeLeft<=4){
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
    resultElement.textContent = "អស់ពេលហើយ!";
    resultElement.classList.add("incorrect");
    showAdditionalInfo();
    scoreIncorrect++;
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
    
    const percentCorrect = ((scoreCorrect / numOfQuestions) * 100).toFixed(2);
    const percentIncorrect = ((scoreIncorrect/ numOfQuestions) * 100).toFixed(2);
  
    document.getElementById("quiz-container").style.display = "none";
    document.querySelector(".game-history").style.display="block";
    gameHistoryElement.innerHTML = `
      <h2>Game History</h2>
      <p>ចំនួនសំណួរទាំងអស់: ${numOfQuestions}</p>
      <p>ចម្លើយត្រឹមត្រូវ: ${scoreCorrect} ស្មើនឹង ${percentCorrect}%</p>
      <p>ចម្លើយមិនត្រឹមត្រូវ: ${scoreIncorrect} ស្មើនឹង ${percentIncorrect}%</p>
    `;
  
    playAgainBtn.style.display = "block";
    exitButton.style.display="block";
  }


  playAgainBtn.addEventListener("click", function() {
    startGame();
    gameHistoryElement.innerHTML = "";
    playAgainBtn.style.display = "none";
    document.querySelector(".game-history").style.display="none";
    document.getElementById("quiz-container").style.display = "block";
  });
});