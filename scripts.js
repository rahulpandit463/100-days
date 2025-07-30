document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username && email && password) {
        document.getElementById("message").textContent = `Welcome, ${username}! Registration successful.`;
        this.reset();  // Clear form
    } else {
        document.getElementById("message").textContent = "Please fill all fields.";
        document.getElementById("message").style.color = "red";
    }
});
