const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Tell the dashboard that the user is logged in
        localStorage.setItem("isLoggedIn", "true");

        // Go to dashboard
        window.location.href = "dashboard.html";

    });

}