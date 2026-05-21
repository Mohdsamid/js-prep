const questions = [
    {
      question: "HTML ka full form kya hai?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tabular Markup Language",
        "Home Tool Markup Language"
      ],
      answer: 0   
    },
    {
      question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
      options: ["font-color", "text-color", "color", "background"],
      answer: 2
    },
    {
      question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
      options: ["var", "int", "string", "declare"],
      answer: 0
    },
    {
      question: "Kaunsa HTML tag sabse bada heading banata hai?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: 2
    },
    {
      question: "JavaScript me array ki length kaise pata karte hain?",
      options: ["array.size()", "array.length", "array.count", "length(array)"],
      answer: 1
    }
  ];


  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 15;
  let timerInterval;
  let answered = false;


  window.onload = function() {
    loadQuestion();
  };

  // function loadQuestion(){
  //   answered=false
  //   timeLeft=15
  
  // }
  // loadQuestion()


  function loadQuestion() {
    answered = false;
    timeLeft = 15;
    // document.getElementById('timer').textContent = timeLeft;
      document.querySelector("#time").textContent=timeLeft
        document.getElementById('submit').disabled = true;
            const q = questions[currentQuestion];
    document.getElementById('questionNum').textContent =
      `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('ques').textContent = q.question;


const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index, btn);
      optionsDiv.appendChild(btn);
    });

    startTimer();
  }