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
