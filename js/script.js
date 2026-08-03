// ===============================
// SIGNUP FORM VALIDATION
// ===============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        // Prevent page from refreshing
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Check empty fields
        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields.");

            return;
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {

            alert("Enter a valid email.");

            return;
        }

        // Password length
        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;
        }

        // Success
        alert("Signup Successful!");

    });

}