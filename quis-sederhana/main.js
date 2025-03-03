const questions = [
    {
        question: "Apa ibukota Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: "Jakarta"
    },
    {
        question: "Berapa hasil dari 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Siapa presiden pertama Indonesia?",
        options: ["Soekarno", "Soeharto", "Jokowi", "Megawati"],
        answer: "Soekarno"
    }
];


let currentQuesttionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question')
const optionEl = document.getElementById('options')
const nextBtn = document.getElementById('nex-button')
const scoreEl = document.getElementById('score')

const showQuestion = () => {
    const currentQuesttion = questions[currentQuesttionIndex];
    questionEl.textContent = currentQuesttion.question;
    optionEl.innerHTML = '';

    currentQuesttion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option));
        optionEl.appendChild(button)
    })
}

const selectAnswer = (val) => {
    const curentQuest = questions[currentQuesttionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    console.log(`Jawaban yang dipilih: ${val}`); // Debugging
    console.log(`Jawaban benar: ${curentQuest.answer}`); // Debugging

    buttons.forEach(butt => {
        if (butt.textContent === curentQuest.answer) {
            butt.classList.add('correct');
        } else if (butt.textContent === val) {
            butt.classList.add('wrong');
        }
        butt.disabled = true;
    });

    if (val === curentQuest.answer) {
        score++;
        console.log(`Skor saat ini: ${score}`); // Debugging
    }

    setTimeout(() => {
        currentQuesttionIndex++;

        if (currentQuesttionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 3000);
}

const endQuiz = () => {
    optionEl.textContent = "Quiz Selesai!";
    questionEl.innerHTML ="";
    nextBtn.style.display = "none";
    scoreEl.textContent = `score akhir : ${score} dari ${questions.length}`
}

nextBtn.addEventListener('click', () => {
    if(currentQuesttionIndex < questions.length) {
        showQuestion()
    }
})



showQuestion()