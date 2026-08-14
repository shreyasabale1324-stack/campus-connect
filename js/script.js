// ========================================
// SIGNUP
// ========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();


        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }


        if (!email.includes("@") || !email.includes(".")) {

            alert("Enter a valid email.");

            return;

        }


        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;

        }


        const user = {

            name: name,

            email: email,

            password: password

        };


        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        alert("Signup Successful!");

        signupForm.reset();

    });

}



// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();


        const password =
            document.getElementById("loginPassword").value.trim();


        const storedUser =
            JSON.parse(localStorage.getItem("user"));


        if (storedUser === null) {

            alert("No account found. Please sign up first.");

            return;

        }


        if (
            email === storedUser.email &&
            password === storedUser.password
        ) {

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            alert("Login Successful!");


            window.location.href =
                "dashboard.html";

        }

        else {

            alert("Invalid Email or Password!");

        }

    });

}



// ========================================
// DASHBOARD
// ========================================

const dashboard =
    document.querySelector(".dashboard");


if (dashboard) {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");


    if (isLoggedIn !== "true") {

        alert(
            "Please login to access the dashboard."
        );


        window.location.href =
            "login.html";

    }

}



// ========================================
// DISPLAY USER NAME
// ========================================

const studentName =
    document.getElementById("studentName");


if (studentName) {

    const storedUser =
        JSON.parse(localStorage.getItem("user"));


    if (storedUser) {

        studentName.textContent =
            storedUser.name;

    }

}



// ========================================
// LOGOUT
// ========================================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "isLoggedIn"
            );


            window.location.href =
                "login.html";

        }
    );

}



// ========================================
// COURSES DATA
// ========================================

const courses = [

    {
        title: "C++ Programming",
        description: "Programming, OOP and problem solving.",
        info: "Progress: 75%"
    },

    {
        title: "Java Programming",
        description: "Java fundamentals and application development.",
        info: "Progress: 60%"
    },

    {
        title: "Web Development",
        description: "HTML, CSS and JavaScript.",
        info: "Progress: 80%"
    },

    {
        title: "Database Management",
        description: "SQL and database fundamentals.",
        info: "Progress: 65%"
    },

    {
        title: "Mathematics",
        description: "Engineering mathematics and problem solving.",
        info: "Progress: 70%"
    },

    {
        title: "Computer Networks",
        description: "Networking concepts and protocols.",
        info: "Progress: 55%"
    }

];



// ========================================
// ASSIGNMENTS DATA
// ========================================

const assignments = [

    {
        title: "DSA Assignment",
        subject: "Data Structures",
        info: "Due: 15 August 2026",
        status: "Pending"
    },

    {
        title: "Java OOP Assignment",
        subject: "Java Programming",
        info: "Due: 18 August 2026",
        status: "Pending"
    },

    {
        title: "Web Development Project",
        subject: "Web Development",
        info: "Due: 20 August 2026",
        status: "Submitted"
    },

    {
        title: "Database Assignment",
        subject: "DBMS",
        info: "Due: 22 August 2026",
        status: "Pending"
    },

    {
        title: "Mathematics Assignment",
        subject: "Mathematics",
        info: "Due: 25 August 2026",
        status: "Submitted"
    },

    {
        title: "Computer Networks Task",
        subject: "Computer Networks",
        info: "Due: 28 August 2026",
        status: "Pending"
    }

];



// ========================================
// GRADES DATA
// ========================================

const grades = [

    {
        subject: "Data Structures",
        marks: 92,
        grade: "A+"
    },

    {
        subject: "Java Programming",
        marks: 88,
        grade: "A"
    },

    {
        subject: "Web Development",
        marks: 95,
        grade: "A+"
    },

    {
        subject: "Database Management",
        marks: 84,
        grade: "A"
    },

    {
        subject: "Mathematics",
        marks: 90,
        grade: "A+"
    },

    {
        subject: "Computer Networks",
        marks: 81,
        grade: "A"
    }

];



// ========================================
// ATTENDANCE DATA
// ========================================

const attendance = [

    {
        subject: "Data Structures",
        percentage: 88
    },

    {
        subject: "Java Programming",
        percentage: 82
    },

    {
        subject: "Web Development",
        percentage: 91
    },

    {
        subject: "Database Management",
        percentage: 85
    },

    {
        subject: "Mathematics",
        percentage: 79
    },

    {
        subject: "Computer Networks",
        percentage: 87
    }

];



// ========================================
// GET DASHBOARD ELEMENTS
// ========================================

const coursesBtn =
    document.getElementById("coursesBtn");

const assignmentsBtn =
    document.getElementById("assignmentsBtn");

const gradesBtn =
    document.getElementById("gradesBtn");

const attendanceBtn =
    document.getElementById("attendanceBtn");


const coursesSection =
    document.getElementById("coursesSection");

const assignmentsSection =
    document.getElementById("assignmentsSection");

const gradesSection =
    document.getElementById("gradesSection");

const attendanceSection =
    document.getElementById("attendanceSection");


const coursesContainer =
    document.getElementById("coursesContainer");

const assignmentsContainer =
    document.getElementById("assignmentsContainer");

const gradesContainer =
    document.getElementById("gradesContainer");

const attendanceContainer =
    document.getElementById("attendanceContainer");



// ========================================
// HIDE ALL SECTIONS
// ========================================

function hideAllSections() {

    if (coursesSection) {
        coursesSection.style.display = "none";
    }

    if (assignmentsSection) {
        assignmentsSection.style.display = "none";
    }

    if (gradesSection) {
        gradesSection.style.display = "none";
    }

    if (attendanceSection) {
        attendanceSection.style.display = "none";
    }

}



// ========================================
// SHOW SECTION
// ========================================

function showSection(section) {

    hideAllSections();


    section.style.display = "block";


    section.scrollIntoView({
        behavior: "smooth"
    });

}



// ========================================
// DISPLAY COURSES
// ========================================

function displayCourses() {

    coursesContainer.innerHTML = "";


    courses.forEach(function (course) {

        const card =
            document.createElement("div");


        card.classList.add(
            "content-card"
        );


        card.innerHTML = `

            <h3>
                ${course.title}
            </h3>

            <p>
                ${course.description}
            </p>

            <div class="card-info">
                ${course.info}
            </div>

        `;


        coursesContainer.appendChild(card);

    });

}



// ========================================
// DISPLAY ASSIGNMENTS
// ========================================

function displayAssignments() {

    assignmentsContainer.innerHTML = "";


    assignments.forEach(function (assignment) {

        const card =
            document.createElement("div");


        card.classList.add(
            "content-card"
        );


        card.innerHTML = `

            <h3>
                ${assignment.title}
            </h3>

            <p>
                Subject: ${assignment.subject}
            </p>

            <p>
                ${assignment.info}
            </p>

            <div class="card-info">
                Status: ${assignment.status}
            </div>

        `;


        assignmentsContainer.appendChild(card);

    });

}



// ========================================
// DISPLAY GRADES
// ========================================

function displayGrades() {

    gradesContainer.innerHTML = "";


    grades.forEach(function (item) {

        const card =
            document.createElement("div");


        card.classList.add(
            "content-card"
        );


        card.innerHTML = `

            <h3>
                ${item.subject}
            </h3>

            <p>
                Marks: ${item.marks}/100
            </p>

            <div class="grade-value">
                ${item.grade}
            </div>

        `;


        gradesContainer.appendChild(card);

    });

}



// ========================================
// DISPLAY ATTENDANCE
// ========================================

function displayAttendance() {

    attendanceContainer.innerHTML = "";


    attendance.forEach(function (item) {

        const card =
            document.createElement("div");


        card.classList.add(
            "content-card"
        );


        card.innerHTML = `

            <h3>
                ${item.subject}
            </h3>

            <p>
                Overall Attendance
            </p>

            <div class="attendance-value">
                ${item.percentage}%
            </div>

        `;


        attendanceContainer.appendChild(card);

    });

}



// ========================================
// COURSES BUTTON
// ========================================

if (coursesBtn) {

    coursesBtn.addEventListener(
        "click",
        function () {

            displayCourses();

            showSection(
                coursesSection
            );

        }
    );

}



// ========================================
// ASSIGNMENTS BUTTON
// ========================================

if (assignmentsBtn) {

    assignmentsBtn.addEventListener(
        "click",
        function () {

            displayAssignments();

            showSection(
                assignmentsSection
            );

        }
    );

}



// ========================================
// GRADES BUTTON
// ========================================

if (gradesBtn) {

    gradesBtn.addEventListener(
        "click",
        function () {

            displayGrades();

            showSection(
                gradesSection
            );

        }
    );

}



// ========================================
// ATTENDANCE BUTTON
// ========================================

if (attendanceBtn) {

    attendanceBtn.addEventListener(
        "click",
        function () {

            displayAttendance();

            showSection(
                attendanceSection
            );

        }
    );

}