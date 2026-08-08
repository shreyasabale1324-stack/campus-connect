// ===============================
// SIGNUP FORM
// ===============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

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

        // Check email
        if (!email.includes("@") || !email.includes(".")) {

            alert("Enter a valid email.");

            return;
        }

        // Check password
        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;
        }

        // Create user object
        const user = {

            name: name,
            email: email,
            password: password

        };

        // Save user
        localStorage.setItem("user", JSON.stringify(user));

        alert("Signup Successful!");

        signupForm.reset();

    });

}


// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get login values
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        // Get saved user
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Check if user exists
        if (storedUser === null) {

            alert("No account found. Please sign up first.");

            return;
        }

        // Compare credentials
        if (
            email === storedUser.email &&
            password === storedUser.password
        ) {

            // Save login status
            localStorage.setItem("isLoggedIn", "true");

            alert("Login Successful!");

            // Redirect to dashboard
            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password!");

        }

    });

}


// ===============================
// DASHBOARD PROTECTION
// ===============================

const dashboard = document.querySelector(".dashboard");

if (dashboard) {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Check login status
    if (isLoggedIn !== "true") {

        alert("Please login to access the dashboard.");

        window.location.href = "login.html";

    }

}


// ===============================
// DISPLAY STUDENT NAME
// ===============================

const studentName = document.getElementById("studentName");

if (studentName) {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {

        studentName.textContent = storedUser.name;

    }

}


// ===============================
// LOGOUT
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        // Remove login status
        localStorage.removeItem("isLoggedIn");

        alert("You have been logged out.");

        // Redirect to login
        window.location.href = "login.html";

    });

}
// ===============================
// COURSES
// ===============================

const coursesBtn = document.getElementById("coursesBtn");

const coursesSection = document.getElementById("coursesSection");


if (coursesBtn && coursesSection) {

    coursesBtn.addEventListener("click", function () {

        coursesSection.style.display = "block";

        coursesSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}