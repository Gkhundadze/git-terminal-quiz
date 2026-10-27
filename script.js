const questions = [
  {
    category: "რეპოზიტორია",
    question: "რომელი ბრძანება ქმნის ახალ Git რეპოზიტორიას მიმდინარე საქაღალდეში?",
    answers: ["git start", "git init", "git create", "git new"],
    correct: 1,
    explanation: "git init მიმდინარე საქაღალდეში ინიციალიზაციას უკეთებს ახალ Git რეპოზიტორიას."
  },
  {
    category: "რეპოზიტორია",
    question: "რომელი ბრძანება ქმნის დისტანციური რეპოზიტორიის ლოკალურ ასლს?",
    answers: ["git clone", "git pull", "git copy", "git download"],
    correct: 0,
    explanation: "git clone რეპოზიტორიას, მის ისტორიასა და შესაბამის საწყის კონფიგურაციას ლოკალურად აკოპირებს."
  },
  {
    category: "მდგომარეობა",
    question: "რომელი ბრძანება აჩვენებს ფაილების მიმდინარე მდგომარეობას — შეცვლილს, ახალს ან staging area-ში დამატებულს?",
    answers: ["git log", "git diff", "git status", "git show"],
    correct: 2,
    explanation: "git status აჩვენებს სამუშაო საქაღალდისა და staging area-ს მდგომარეობას."
  },
  {
    category: "ცვლილებების მომზადება",
    question: "რომელი ბრძანება ამზადებს შეცვლილ ფაილებს შემდეგი commit-ისთვის?",
    answers: ["git commit", "git add", "git push", "git save"],
    correct: 1,
    explanation: "git add ამატებს მითითებულ ცვლილებებს staging area-ში."
  },
  {
    category: "ცვლილებების შენახვა",
    question: "რომელი ბრძანება აფიქსირებს staging area-ში მომზადებულ ცვლილებებს Git-ის ისტორიაში?",
    answers: ["git save", "git push", "git commit", "git record"],
    correct: 2,
    explanation: "git commit ქმნის ახალ commit-ს staging area-ში მომზადებული ცვლილებებით."
  },
  {
    category: "დისტანციური რეპოზიტორია",
    question: "რომელი ბრძანება აგზავნის ლოკალურ commit-ებს დისტანციურ რეპოზიტორიაში?",
    answers: ["git push", "git pull", "git fetch", "git upload"],
    correct: 0,
    explanation: "git push აგზავნის ლოკალურ ბრენჩის commit-ებს შესაბამის დისტანციურ ბრენჩში."
  },
  {
    category: "დისტანციური რეპოზიტორია",
    question: "რომელი ბრძანება იღებს დისტანციურ ცვლილებებს და აერთიანებს მათ მიმდინარე ლოკალურ ბრენჩში?",
    answers: ["git clone", "git fetch", "git pull", "git merge"],
    correct: 2,
    explanation: "git pull იღებს ცვლილებებს დისტანციური რეპოზიტორიიდან და აერთიანებს მიმდინარე ბრენჩში."
  },
  {
    category: "ისტორია",
    question: "რომელი ბრძანება აჩვენებს commit-ების ისტორიას?",
    answers: ["git status", "git log", "git history", "git commits"],
    correct: 1,
    explanation: "git log აჩვენებს commit-ების ისტორიას."
  },
  {
    category: "ბრენჩები",
    question: "რომელი ბრძანებით ქმნი ახალ ბრენჩს სახელად feature/profile ისე, რომ მასზე ავტომატურად არ გადახვიდე?",
    answers: ["git branch feature/profile", "git init feature/profile", "git new feature/profile", "git commit feature/profile"],
    correct: 0,
    explanation: "git branch feature/profile ქმნის ბრენჩს, მაგრამ მიმდინარე ბრენჩზე გტოვებს."
  },
  {
    category: "ბრენჩები",
    question: "რომელი ბრძანება გადაგიყვანს უკვე არსებულ ბრენჩზე feature/profile?",
    answers: ["git branch feature/profile", "git switch feature/profile", "git merge feature/profile", "git checkout -b feature/profile"],
    correct: 1,
    explanation: "git switch feature/profile გადაგიყვანს არსებულ ბრენჩზე. checkout -b კი ახალ ბრენჩს შექმნიდა და მასზე გადავიდოდა."
  },
  {
    category: "ბრენჩები",
    question: "რას აკეთებს git switch -c feature/login?",
    answers: ["შლის login ბრენჩს", "ქმნის ახალ ბრენჩს და მასზე გადადის", "აერთიანებს ბრენჩებს", "აგზავნის ბრენჩს GitHub-ზე"],
    correct: 1,
    explanation: "git switch -c ქმნის ახალ ბრენჩს და მაშინვე გადადის მასზე."
  },
  {
    category: "ბრენჩების გაერთიანება",
    question: "რომელი ბრძანება აერთიანებს main ბრენჩის ცვლილებებს იმ ბრენჩში, რომელზეც ამჟამად იმყოფები?",
    answers: ["git merge main", "git push main", "git pull main", "git branch main"],
    correct: 0,
    explanation: "git merge main ცდილობს main ბრენჩის ცვლილებების მიმდინარე ბრენჩში გაერთიანებას."
  },
  {
    category: "დისტანციური რეპოზიტორია",
    question: "რა დანიშნულება აქვს git fetch-ს?",
    answers: [
      "იღებს დისტანციურ ცვლილებებს ისე, რომ მიმდინარე ბრენჩში ავტომატურად არ აერთიანებს",
      "ყველა ფაილს GitHub-ზე ტვირთავს",
      "ახალ commit-ს ქმნის",
      "ლოკალურ ცვლილებებს აუქმებს"
    ],
    correct: 0,
    explanation: "git fetch იღებს დისტანციურ ინფორმაციასა და commit-ებს; მიმდინარე ბრენჩში მათი გაერთიანება ცალკე მოქმედებაა."
  },
  {
    category: "ცვლილებების შედარება",
    question: "რომელი ბრძანება გაჩვენებს სამუშაო საქაღალდეში არსებულ, ჯერ staging area-ში არ დამატებულ ცვლილებებს ხაზობრივად?",
    answers: ["git status", "git diff", "git log", "git init"],
    correct: 1,
    explanation: "git diff ნაგულისხმევად აჩვენებს სამუშაო საქაღალდის ცვლილებებს staging area-სთან შედარებით."
  },
  {
    category: "სამუშაო პროცესი",
    question: "შექმენი ახალი ბრენჩი, გააკეთე commit-ები და გაუშვი git push. რატომ არ ნიშნავს ეს იმას, რომ ცვლილებები უკვე main ბრენჩშია გაერთიანებული?",
    answers: [
      "git push მხოლოდ ლოკალურ ფაილებს ინახავს",
      "ცვლილებების გასაერთიანებლად შეიძლება საჭირო იყოს Pull Request და მისი დამერჯვა",
      "git push ავტომატურად შლის commit-ებს",
      "main ბრენჩში ცვლილებების გაერთიანება შეუძლებელია"
    ],
    correct: 1,
    explanation: "git push ბრენჩს დისტანციურ რეპოზიტორიაში აგზავნის. Pull Request არის ცვლილებების განხილვისა და გაერთიანების ცალკე პროცესი."
  }
];

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const studentNameInput = document.querySelector("#studentName");
const startBtn = document.querySelector("#startBtn");
const currentNumber = document.querySelector("#currentNumber");
const progressFill = document.querySelector("#progressFill");
const questionCategory = document.querySelector("#questionCategory");
const questionText = document.querySelector("#questionText");
const answersContainer = document.querySelector("#answers");
const answeredCount = document.querySelector("#answeredCount");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");
const resultName = document.querySelector("#resultName");
const scoreRing = document.querySelector("#scoreRing");
const scoreValue = document.querySelector("#scoreValue");
const scorePercent = document.querySelector("#scorePercent");
const scoreMessage = document.querySelector("#scoreMessage");
const scoreDetail = document.querySelector("#scoreDetail");
const reviewBtn = document.querySelector("#reviewBtn");
const review = document.querySelector("#review");
const reviewList = document.querySelector("#reviewList");
const restartBtn = document.querySelector("#restartBtn");

let currentIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);
let studentName = "";

function showSection(section) {
  [intro, quiz, results].forEach((item) => item.classList.add("hidden"));
  section.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentIndex];
  currentNumber.textContent = String(currentIndex + 1);
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  questionCategory.textContent = question.category;
  questionText.textContent = question.question;
  answeredCount.textContent = `პასუხგაცემულია: ${selectedAnswers.filter((answer) => answer !== null).length}/${questions.length}`;
  answersContainer.replaceChildren();

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    if (selectedAnswers[currentIndex] === answerIndex) button.classList.add("selected");
    button.setAttribute("aria-pressed", String(selectedAnswers[currentIndex] === answerIndex));

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + answerIndex);

    const answerText = document.createElement("span");
    answerText.textContent = answer;

    button.append(letter, answerText);
    button.addEventListener("click", () => {
      selectedAnswers[currentIndex] = answerIndex;
      renderQuestion();
    });
    answersContainer.append(button);
  });

  backBtn.disabled = currentIndex === 0;
  backBtn.style.opacity = currentIndex === 0 ? ".45" : "1";
  nextBtn.textContent = currentIndex === questions.length - 1 ? "ტესტის დასრულება" : "შემდეგი →";
}

function startQuiz() {
  studentName = studentNameInput.value.trim();
  if (!studentName) {
    studentNameInput.setCustomValidity("გთხოვ, შეიყვანე სახელი და გვარი.");
    studentNameInput.reportValidity();
    studentNameInput.addEventListener("input", () => studentNameInput.setCustomValidity(""), { once: true });
    return;
  }
  currentIndex = 0;
  selectedAnswers = Array(questions.length).fill(null);
  renderQuestion();
  showSection(quiz);
}

function calculateScore() {
  return selectedAnswers.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0);
}

function finishQuiz() {
  const unanswered = selectedAnswers.filter((answer) => answer === null).length;
  if (unanswered > 0) {
    const shouldFinish = window.confirm(`უპასუხოდ დატოვებულია ${unanswered} შეკითხვა. გსურს ტესტის დასრულება? უპასუხო კითხვები 0 ქულად შეფასდება.`);
    if (!shouldFinish) return;
  }

  const score = calculateScore();
  const percent = Math.round((score / questions.length) * 100);
  resultName.textContent = studentName;
  scoreValue.textContent = `${score}/${questions.length}`;
  scorePercent.textContent = `${percent}%`;
  scoreRing.style.setProperty("--score-angle", `${percent * 3.6}deg`);
  scoreDetail.textContent = `სწორი პასუხი: ${score} · არასწორი ან უპასუხო: ${questions.length - score}`;

  if (percent >= 90) {
    scoreMessage.textContent = "შესანიშნავი შედეგია.";
  } else if (percent >= 70) {
    scoreMessage.textContent = "კარგი შედეგია. რამდენიმე საკითხის გადახედვა ღირს.";
  } else if (percent >= 50) {
    scoreMessage.textContent = "საფუძვლები ნაწილობრივ იცი. გაიმეორე ბრძანებები და მათი დანიშნულება.";
  } else {
    scoreMessage.textContent = "გირჩევ, Git-ის ძირითადი ბრძანებები კიდევ ერთხელ გაიარო.";
  }

  renderReview();
  review.classList.add("hidden");
  reviewBtn.textContent = "პასუხების ნახვა";
  showSection(results);
}

function renderReview() {
  reviewList.replaceChildren();

  questions.forEach((question, index) => {
    const selected = selectedAnswers[index];
    const isCorrect = selected === question.correct;
    const item = document.createElement("article");
    item.className = `review-item ${isCorrect ? "correct" : "incorrect"}`;

    const questionLabel = document.createElement("p");
    questionLabel.className = "review-question";
    questionLabel.textContent = `${index + 1}. ${question.question}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.className = "review-answer";
    const yourLabel = document.createElement("strong");
    yourLabel.textContent = "შენი პასუხი: ";
    const yourValue = document.createElement("span");
    yourValue.textContent = selected === null ? "პასუხი არ აგირჩევია" : question.answers[selected];
    yourValue.className = isCorrect ? "correct-text" : "wrong-text";
    yourAnswer.append(yourLabel, yourValue);

    const correctAnswer = document.createElement("p");
    correctAnswer.className = "review-answer";
    const correctLabel = document.createElement("strong");
    correctLabel.textContent = "სწორი პასუხი: ";
    const correctValue = document.createElement("span");
    correctValue.className = "correct-text";
    correctValue.textContent = question.answers[question.correct];
    correctAnswer.append(correctLabel, correctValue);

    const explanation = document.createElement("p");
    explanation.className = "review-answer";
    explanation.textContent = question.explanation;

    item.append(questionLabel, yourAnswer, correctAnswer, explanation);
    reviewList.append(item);
  });
}

startBtn.addEventListener("click", startQuiz);
studentNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") startQuiz();
});

backBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  if (selectedAnswers[currentIndex] === null) {
    const proceed = window.confirm("ამ კითხვაზე პასუხი არ აგირჩევია. გსურს შემდეგზე გადასვლა?");
    if (!proceed) return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    finishQuiz();
  }
});

reviewBtn.addEventListener("click", () => {
  const isHidden = review.classList.toggle("hidden");
  reviewBtn.textContent = isHidden ? "პასუხების ნახვა" : "პასუხების დამალვა";
  if (!isHidden) review.scrollIntoView({ behavior: "smooth", block: "start" });
});

restartBtn.addEventListener("click", () => {
  studentNameInput.value = studentName;
  showSection(intro);
});
