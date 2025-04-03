function downloadFree() {
    alert("Your free study guide is downloading!");
}

function purchasePremium() {
    alert("Premium content is locked. Please pay ₹199 to unlock.");
}

function login() {
    let username = document.getElementById("username").value;
    if (username) {
        alert("Welcome, " + username + "!");
    } else {
        alert("Please enter a valid username.");
    }
}

function checkAnswer(answer) {
    if (answer === 'Delhi') {
        document.getElementById("quiz-result").innerText = "Correct! 🎉";
    } else {
        document.getElementById("quiz-result").innerText = "Wrong answer. Try again!";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function updateCountdown() {
    const examDate = new Date("2025-06-01").getTime();
    const now = new Date().getTime();
    const timeLeft = examDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " days left";
}

setInterval(updateCountdown, 1000);
