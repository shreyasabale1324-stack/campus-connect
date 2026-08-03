// ===============================
// SIGNUP FORM
// ===============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Empty Validation
        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {

            alert("Enter a valid email.");

            return;

        }

        // Password Validation
        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;

        }

        // Create User Object
        const user = {

            name: name,
            email: email,
            password: password

        };

        // Save User in Local Storage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Signup Successful!");

        signupForm.reset();

    });

}