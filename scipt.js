
var questions = [
  {
    question: "តើកុំព្យូទ័រចែកចេញជាប៉ុន្មានផ្នែកសំខាន់ៗ ?",
    options: ["២ ផ្នែកសំខាន់","៣ ផ្នែកសំខាន់","៥​ ផ្នែកសំខាន់","៦ ផ្នែកសំខាន់"],
    answer: 0,
    explanation: "​កុំព្យូទ័រចែកចេញជាពីរផ្អែកសំខាន់ៗគឹ Hardware និង Software ។<br>Hardware ជាឧបករណ៍រូបសាស្រ្ត ឬជាឧបករណ៍ផ្នែករឹងនៃកុំព្យូទ័រ ដែលអ្នកអាចមើលឃើញ និងប៉ះពាល់បាន ។ Hardwareមិនអាចដំណើរការបានឡើយបើគ្មាន Software ។<br>Software ជាកម្មវិធីរបស់កុំព្យូទ័រ ហើយជា Instructions ហើយយើងអាចមើលឃើញតែប៉ះមិនបានដែលធ្វើឲ្យ Hardware ដំណើរការ ។"
  },
  {
    question: "តើកុំព្យូទ័រចែកចេញជាប៉ុន្មានផ្នែកសំខាន់ៗ ?",
    options: ["២ ផ្នែកសំខាន់","៣ ផ្នែកសំខាន់","៥​ ផ្នែកសំខាន់","៦ ផ្នែកសំខាន់"],
    answer: 0,
    explanation: "​កុំព្យូទ័រចែកចេញជាពីរផ្អែកសំខាន់ៗគឹ Hardware និង Software ។<br>Hardware ជាឧបករណ៍រូបសាស្រ្ត ឬជាឧបករណ៍ផ្នែករឹងនៃកុំព្យូទ័រ ដែលអ្នកអាចមើលឃើញ និងប៉ះពាល់បាន ។ Hardwareមិនអាចដំណើរការបានឡើយបើគ្មាន Software ។<br>Software ជាកម្មវិធីរបស់កុំព្យូទ័រ ហើយជា Instructions ហើយយើងអាចមើលឃើញតែប៉ះមិនបានដែលធ្វើឲ្យ Hardware ដំណើរការ ។"
  },
  
  {
    question: "តើsoftware ចែកចេញជាប៉ុន្មានប្រភេទ?",
    options: ["១ ប្រភេទ","២ ប្រភេទ","៤ ប្រភេទ","៥ ប្រភេទ"],
    answer: 1,
    explanation: "Software ចែកចេញជា២ប្រភេទធំៗគឺ Operating System Software និងApplication Software។"
  },
  {
    question: "តើធាតុផ្សំសំខាន់ៗរបស់កុំព្យូទ័រមានប៉ុន្មានផ្នែក?",
    options: ["៣ផ្នែក","៤ផ្នែក","៥ផ្នែក","៨ផ្នែក"],
    answer: 1,
    explanation: "ផ្នែកសំខាន់ៗទាំងបួនរបស់កុំព្យូទ័រ ( Monitor, Keyboard ,  Sytem Unit , Mouse)១.Monitor ជាឧបករណ៍សម្រាប់បង្ហាញព័ត៌មានដល់អ្នកប្រើប្រាស់ ឲ្យបានឃើញពីលទ្ធផល ដែលពួកគេបានធ្វើការងារតាមរយៈឧបករណ៍បញ្ចូលព័ត៌មានដើម្បីអាចឲ្យគេពិនិត្យទៅលើទិន្នន័យនោះ។២.Keyboard ជាឧបករណ៍សម្រាប់បញ្ចូលព័ត៌មាន ដែលគេតែងតែប្រើប្រាស់ជាញឹកញាប់ សម្រាប់ផ្តល់ឲ្យអ្នកប្រើប្រាស់វាយបញ្ចូលព័ត៌មានឬពាក្យបញ្ជាដើម្បីឲ្យកុំព្យូទ័រអនុវត្តតាម។៣.Sytem Unit មានសមាសធាតុដែលអាចទទួលយកទិន្នន័យទុក និងដំណើរការទិន្នន័យ។៤.Mouse ជាឧបករណ៍បន្ថែមមួយដែលអាចឲ្យអ្នកប្រើប្រាស់បញ្ចូលព័ត៌មានឬជ្រើសរើស ltem ណាមួយរបស់កម្មវិធី ហើយអាចឲ្យយើងមើលឃើញនៅលើ Screen"
  },
  // {
  //   question: "",
  //   options: ["","","",""],
  //   answer: 0,
  //   explanation: ""
  // },
  // {
  //   question: "",
  //   options: ["","","",""],
  //   answer: 0,
  //   explanation: ""
  // },
  // {
  //   question: "",
  //   options: ["","","",""],
  //   answer: 0,
  //   explanation: ""
  // },
   // {
  //   question: "",
  //   options: ["","","",""],
  //   answer: 0,
  //   explanation: ""
  // },
];

// ...

var totalQuestions = 1; // Set the number of total questions the player will play
var shuffledQuestions = shuffleArray(questions.slice(0, totalQuestions)); // Shuffle the questions array and select the first 20 questions

var currentQuestion = 0;
var timeLeft = 60;
var timer;
var correctAnswers = 0;
var incorrectAnswers = 0;

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function startTimer() {
  timer = setInterval(function() {
    timeLeft--;
    updateProgressBar();
    if (timeLeft === 0) {
      clearInterval(timer);
      showResult(false);
    }
  }, 1000);
}

function updateProgressBar() {
  var progressWidth = (1 - timeLeft / 60) * 100;
  document.getElementById("progress").style.width = progressWidth + "%";
  document.getElementById("progress").style.backgroundColor = getColor(progressWidth);
  document.getElementById("progress").textContent = timeLeft + "s left";
}

function getColor(progressWidth) {
  var hue = ((1 - progressWidth / 100) * 120).toString(10);
  return "hsl(" + hue + ", 100%, 50%)";
}


function showQuestion() {
  document.getElementById("question").textContent = shuffledQuestions[currentQuestion].question;
  var options = document.getElementById("options").getElementsByTagName("button");
  for (var i = 0; i < options.length; i++) {
    options[i].textContent = shuffledQuestions[currentQuestion].options[i];
  }
}

function checkAnswer(option) {
  clearInterval(timer);
  var isCorrect = option === shuffledQuestions[currentQuestion].answer;
  showResult(isCorrect);
}

function showResult(isCorrect) {
  var result = document.getElementById("result");
  var popup = document.getElementById("popup");
  if (isCorrect) {
    result.textContent = "ពូកែមែនទែន!";
    popup.style.backgroundColor = "lightgreen";
    popup.style.display = "block";
    document.getElementById("popup-title").textContent = "ពន្យល់បន្ថែម";
    document.getElementById("popup-text").textContent = shuffledQuestions[currentQuestion].explanation;
    correctAnswers++;
  } else {
    result.textContent = "មិនត្រឹមត្រូវទេ";
    popup.style.backgroundColor = "pink";
    popup.style.display = "block";
    document.getElementById("popup-title").textContent = "ពន្យល់បន្ថែម";
    document.getElementById("popup-text").textContent = shuffledQuestions[currentQuestion].explanation;
    incorrectAnswers++;
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    timeLeft = 60;
    startTimer();
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("question").textContent = "Quiz completed!";
  document.getElementById("options").style.display = "none";
  document.getElementById("result").textContent = "ប្រវត្តិលេង:` ឆ្លើយបានត្រឹមត្រូវ: " + correctAnswers + ", ឆ្លើយមិនត្រឹមត្រូវ: " + incorrectAnswers + ", នៃសំណួរសរុប: " + totalQuestions;
  document.getElementById("result").style.display = "block";
  document.getElementById("progress-bar").style.display = "none";
  document.getElementById("play-again").style.display = "block";
}

function playAgain() {
  currentQuestion = 0;
  timeLeft = 60;
  correctAnswers = 0;
  incorrectAnswers = 0;
  shuffledQuestions = shuffleArray(questions.slice(0, totalQuestions));
  startTimer();
  showQuestion();
  document.getElementById("play-again").style.display = "none";
  document.getElementById("options").style.display = "block";
  document.getElementById("result").style.display = "block";
  document.getElementById("progress-bar").style.display = "block";
  document.getElementById("question").textContent = shuffledQuestions[currentQuestion].question;
}

startTimer();
showQuestion();