document.addEventListener("DOMContentLoaded", function() {
    updateCountdown();
    generateQuiz();
    changeBannerImage();
});

// Countdown to Exam
function updateCountdown() {
    const examDate = new Date("2025-06-01").getTime();
    const now = new Date().getTime();
    const timeLeft = examDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " days left";
}

// Quiz Section
const quizData = [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "Who wrote the Indian National Anthem?", options: ["Tagore", "Premchand", "Gandhi", "Nehru"], answer: "Tagore" }
];

function generateQuiz() {
    const randomQuiz = quizData[Math.floor(Math.random() * quizData.length)];
    document.getElementById("quiz-question").innerText = randomQuiz.question;
    let optionsHTML = "";
    randomQuiz.options.forEach(option => {
        optionsHTML += `<button onclick="checkAnswer('${option}', '${randomQuiz.answer}')">${option}</button>`;
    });
    document.getElementById("quiz-options").innerHTML = optionsHTML;
}

function checkAnswer(selected, correct) {
    const result = document.getElementById("quiz-result");
    if (selected === correct) {
        result.innerText = "Correct! 🎉";
    } else {
        result.innerText = "Wrong answer. Try again!";
    }
}

// Dynamic Banner Images
const bannerImages = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.jpg"
];

function changeBannerImage() {
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
    document.getElementById("dynamic-banner").src = randomImage;
}

// Payment Simulation
function processPayment() {
    alert("Redirecting to secure payment...");
}
