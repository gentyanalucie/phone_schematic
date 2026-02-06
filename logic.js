let studentName = "";

const studentNameInput = document.getElementById("studentNameInput");
const startBtn = document.getElementById("startBtn");
const studentNameDisplay = document.getElementById("studentNameDisplay");
const studentSection = document.getElementById("studentSection");

function elementShuffled(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  let score = 0;
  let currentIndex = 0;
  
  const questionListShuffled = elementShuffled(questionList).slice(0, 50);
  
  const questionDisplay = document.getElementById("question");
  const answersDisplay = document.getElementById("answers");
  const resultDisplay = document.getElementById("result");
  const progressDisplay = document.getElementById("progress"); // Progress soal
  const scoreDisplay = document.getElementById("score"); // Progress jawaban benar
  
  function updateProgress() {
    progressDisplay.textContent = `Soal ke ${currentIndex + 1} dari ${questionListShuffled.length}`;
    scoreDisplay.textContent = `✅ Skor: ${score} benar dari ${questionListShuffled.length} soal`;
  }
  
  function loadQuestion(index) {
    if (index >= questionListShuffled.length) {
      questionDisplay.textContent = "✅ Selesai!";
      answersDisplay.innerHTML = "";
      progressDisplay.textContent = "";
      scoreDisplay.textContent = `Skor akhir: ${score} benar dari ${questionListShuffled.length} pertanyaan.`;
      scoreDisplay.style.color = "blue";
      return;
    }
  
    const current = questionListShuffled[index];
  
    updateProgress();
  
    questionDisplay.textContent = current.question;
    resultDisplay.textContent = "";
    answersDisplay.innerHTML = "";
  
    const answersShuffled = elementShuffled(current.answer);
  
    answersShuffled.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.style.display = "block";
      button.style.margin = "5px 0";
      button.onclick = function () {
        if (answer === current.correctAnswer) {
          score++;
          resultDisplay.textContent = "✅ Benar";
          resultDisplay.style.color = "green";
        } else {
          resultDisplay.textContent = "❌ Salah";
          resultDisplay.style.color = "red";
        }
  
        setTimeout(() => {
          currentIndex++;
          loadQuestion(currentIndex);
        }, 1000);
      };
      answersDisplay.appendChild(button);
    });
  }
  
  startBtn.onclick = function () {
  studentName = studentNameInput.value.trim();

  if (studentName === "") {
    alert("Masukkan nama dulu ya 😄");
    return;
  }

  studentSection.style.display = "none";
  studentNameDisplay.textContent = `👨‍🎓 Nama Siswa: ${studentName}`;
  studentNameDisplay.style.fontWeight = "bold";

  loadQuestion(currentIndex);
};

  
