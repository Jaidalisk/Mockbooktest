// Dynamic Banner Images
const bannerImages = ["images/banner1.png", "images/banner2.png"];
let currentImageIndex = Math.floor(Math.random() * bannerImages.length);
document.querySelector(".banner").src = bannerImages[currentImageIndex];

// Random Quiz Question
const quizQuestions = [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Who wrote the Indian National Anthem?", options: ["Rabindranath Tagore", "Sarojini Naidu", "Bankim Chandra", "Mahatma Gandhi"], answer: "Rabindranath Tagore" },
    { question: "What is the national currency of India?", options: ["Rupee", "Dollar", "Pound", "Euro"], answer: "Rupee" }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const selectedQuestion = quizQuestions[randomIndex];

    let quizHTML = `<h2>Test Yourself</h2>
                    <p>${selectedQuestion.question}</p>`;

    selectedQuestion.options.forEach(option => {
        quizHTML += `<button onclick="checkAnswer('${option}', '${selectedQuestion.answer}')">${option}</button>`;
    });

    quizHTML += `<p id="quiz-result"></p>`;
    quizContainer.innerHTML = quizHTML;
}

function checkAnswer(selected, correct) {
    document.getElementById("quiz-result").innerText = selected === correct ? "Correct! 🎉" : "Wrong answer. Try again!";
}

window.onload = loadQuiz;
