/* =========================================
   CAMPUS CONNECT
   COMPLETE DASHBOARD JAVASCRIPT
========================================= */


/* =========================================
   LOGIN PROTECTION
========================================= */

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {

    alert("Please login to access the dashboard.");

    window.location.href = "login.html";

}


/* =========================================
   STUDENT NAME
========================================= */

const savedName =
    localStorage.getItem("studentName") || "Student";

const studentName =
    document.getElementById("studentName");

const profileName =
    document.getElementById("profileName");

const profileInitial =
    document.getElementById("profileInitial");


if (studentName) {
    studentName.textContent = savedName;
}


if (profileName) {
    profileName.textContent = savedName;
}


if (profileInitial) {
    profileInitial.textContent =
        savedName.charAt(0).toUpperCase();
}


/* =========================================
   LOGOUT
========================================= */

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("isLoggedIn");

        localStorage.removeItem("studentName");

        window.location.href = "login.html";

    });

}


/* =========================================
   COURSES
========================================= */

const courses = [

    {
        name: "Data Structures & Algorithms",
        code: "DSA",
        teacher: "Prof. Sharma",
        progress: 75,
        icon: "💻"
    },

    {
        name: "Object Oriented Programming",
        code: "OOP",
        teacher: "Prof. Patil",
        progress: 68,
        icon: "🧑‍💻"
    },

    {
        name: "Database Management System",
        code: "DBMS",
        teacher: "Prof. Kulkarni",
        progress: 82,
        icon: "🗄️"
    },

    {
        name: "Computer Networks",
        code: "CN",
        teacher: "Prof. Deshmukh",
        progress: 60,
        icon: "🌐"
    },

    {
        name: "Operating Systems",
        code: "OS",
        teacher: "Prof. Joshi",
        progress: 72,
        icon: "⚙️"
    },

    {
        name: "Web Technology",
        code: "WT",
        teacher: "Prof. More",
        progress: 88,
        icon: "🌎"
    }

];


const coursesContainer =
    document.getElementById("coursesContainer");


function displayCourses() {

    if (!coursesContainer) {
        return;
    }

    coursesContainer.innerHTML = "";

    courses.forEach(function (course) {

        const card =
            document.createElement("div");

        card.className = "content-card";

        card.innerHTML = `

            <div class="course-icon">
                ${course.icon}
            </div>

            <h3>
                ${course.name}
            </h3>

            <p>
                ${course.code}
            </p>

            <p>
                👨‍🏫 ${course.teacher}
            </p>

            <div class="progress-info">

                <span>
                    Progress
                </span>

                <strong>
                    ${course.progress}%
                </strong>

            </div>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width: ${course.progress}%"
                ></div>

            </div>

        `;

        coursesContainer.appendChild(card);

    });

}


displayCourses();


/* =========================================
   ASSIGNMENTS
========================================= */

const assignments = [

    {
        title: "OOP Assignment",
        subject: "Object Oriented Programming",
        dueDate: "25 Aug 2026",
        status: "Pending",
        priority: "High"
    },

    {
        title: "DSA Practice Sheet",
        subject: "Data Structures & Algorithms",
        dueDate: "27 Aug 2026",
        status: "In Progress",
        priority: "Medium"
    },

    {
        title: "DBMS Mini Project",
        subject: "Database Management System",
        dueDate: "30 Aug 2026",
        status: "Pending",
        priority: "High"
    },

    {
        title: "Computer Networks Report",
        subject: "Computer Networks",
        dueDate: "2 Sep 2026",
        status: "Completed",
        priority: "Low"
    }

];


const assignmentsContainer =
    document.getElementById("assignmentsContainer");


function displayAssignments() {

    if (!assignmentsContainer) {
        return;
    }

    assignmentsContainer.innerHTML = "";

    assignments.forEach(function (assignment) {

        const card =
            document.createElement("div");

        card.className =
            "content-card assignment-card";


        let statusClass = "status-pending";


        if (assignment.status === "Completed") {

            statusClass = "status-completed";

        }

        else if (assignment.status === "In Progress") {

            statusClass = "status-progress";

        }


        card.innerHTML = `

            <div class="assignment-top">

                <div class="assignment-icon">
                    📝
                </div>

                <span class="${statusClass}">
                    ${assignment.status}
                </span>

            </div>

            <h3>
                ${assignment.title}
            </h3>

            <p>
                ${assignment.subject}
            </p>

            <div class="assignment-info">

                <span>
                    📅 Due: ${assignment.dueDate}
                </span>

                <span>
                    ${assignment.priority}
                </span>

            </div>

        `;


        assignmentsContainer.appendChild(card);

    });

}


displayAssignments();


/* =========================================
   GRADES
========================================= */

const grades = [

    {
        subject: "Data Structures & Algorithms",
        grade: "A+",
        marks: 92
    },

    {
        subject: "Object Oriented Programming",
        grade: "A",
        marks: 86
    },

    {
        subject: "Database Management System",
        grade: "A+",
        marks: 94
    },

    {
        subject: "Computer Networks",
        grade: "A",
        marks: 88
    },

    {
        subject: "Operating Systems",
        grade: "A",
        marks: 84
    },

    {
        subject: "Web Technology",
        grade: "A+",
        marks: 91
    }

];


const gradesContainer =
    document.getElementById("gradesContainer");


function displayGrades() {

    if (!gradesContainer) {
        return;
    }

    gradesContainer.innerHTML = "";

    grades.forEach(function (item) {

        const card =
            document.createElement("div");

        card.className =
            "content-card grade-card";


        card.innerHTML = `

            <div class="grade-header">

                <div class="grade-icon">
                    📊
                </div>

                <strong>
                    ${item.grade}
                </strong>

            </div>

            <h3>
                ${item.subject}
            </h3>

            <p>
                Marks: ${item.marks}/100
            </p>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width: ${item.marks}%"
                ></div>

            </div>

        `;


        gradesContainer.appendChild(card);

    });

}


displayGrades();


/* =========================================
   ATTENDANCE
========================================= */

const attendance = [

    {
        subject: "Data Structures & Algorithms",
        attended: 42,
        total: 48
    },

    {
        subject: "Object Oriented Programming",
        attended: 38,
        total: 45
    },

    {
        subject: "Database Management System",
        attended: 40,
        total: 44
    },

    {
        subject: "Computer Networks",
        attended: 35,
        total: 42
    },

    {
        subject: "Operating Systems",
        attended: 37,
        total: 43
    },

    {
        subject: "Web Technology",
        attended: 44,
        total: 50
    }

];


const attendanceContainer =
    document.getElementById("attendanceContainer");


function displayAttendance() {

    if (!attendanceContainer) {
        return;
    }

    attendanceContainer.innerHTML = "";


    attendance.forEach(function (item) {

        const percentage =
            Math.round(
                (item.attended / item.total) * 100
            );


        const card =
            document.createElement("div");


        card.className =
            "content-card attendance-card";


        card.innerHTML = `

            <div class="attendance-header">

                <div class="attendance-icon">
                    📅
                </div>

                <strong>
                    ${percentage}%
                </strong>

            </div>

            <h3>
                ${item.subject}
            </h3>

            <p>
                ${item.attended}
                out of
                ${item.total}
                classes attended
            </p>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width: ${percentage}%"
                ></div>

            </div>

        `;


        attendanceContainer.appendChild(card);

    });

}


displayAttendance();


/* =========================================
   QUICK ACTIONS
========================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


const coursesBtn =
    document.getElementById("coursesBtn");

const assignmentsBtn =
    document.getElementById("assignmentsBtn");

const gradesBtn =
    document.getElementById("gradesBtn");

const attendanceBtn =
    document.getElementById("attendanceBtn");


if (coursesBtn) {

    coursesBtn.addEventListener("click", function () {

        scrollToSection("coursesSection");

    });

}


if (assignmentsBtn) {

    assignmentsBtn.addEventListener("click", function () {

        scrollToSection("assignmentsSection");

    });

}


if (gradesBtn) {

    gradesBtn.addEventListener("click", function () {

        scrollToSection("gradesSection");

    });

}


if (attendanceBtn) {

    attendanceBtn.addEventListener("click", function () {

        scrollToSection("attendanceSection");

    });

}


/* =========================================
   SIDEBAR NAVIGATION
========================================= */

const dashboardNav =
    document.getElementById("dashboardNav");

const coursesNav =
    document.getElementById("coursesNav");

const assignmentsNav =
    document.getElementById("assignmentsNav");

const gradesNav =
    document.getElementById("gradesNav");

const attendanceNav =
    document.getElementById("attendanceNav");


if (dashboardNav) {

    dashboardNav.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


if (coursesNav) {

    coursesNav.addEventListener("click", function () {

        scrollToSection("coursesSection");

    });

}


if (assignmentsNav) {

    assignmentsNav.addEventListener("click", function () {

        scrollToSection("assignmentsSection");

    });

}


if (gradesNav) {

    gradesNav.addEventListener("click", function () {

        scrollToSection("gradesSection");

    });

}


if (attendanceNav) {

    attendanceNav.addEventListener("click", function () {

        scrollToSection("attendanceSection");

    });

}


/* =========================================
   DARK MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const themeText =
    document.getElementById("themeText");


function applyTheme(theme) {

    if (theme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );


        if (themeIcon) {
            themeIcon.textContent = "☀️";
        }


        if (themeText) {
            themeText.textContent = "Light Mode";
        }

    }

    else {

        document.documentElement.removeAttribute(
            "data-theme"
        );


        if (themeIcon) {
            themeIcon.textContent = "🌙";
        }


        if (themeText) {
            themeText.textContent = "Dark Mode";
        }

    }

}


/* LOAD SAVED THEME */

const savedTheme =
    localStorage.getItem("theme") || "light";


applyTheme(savedTheme);


/* TOGGLE */

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute(
                "data-theme"
            );


        if (currentTheme === "dark") {

            localStorage.setItem(
                "theme",
                "light"
            );

            applyTheme("light");

        }

        else {

            localStorage.setItem(
                "theme",
                "dark"
            );

            applyTheme("dark");

        }

    });

}


/* =========================================
   NOTIFICATIONS
========================================= */

const notificationBtn =
    document.getElementById("notificationBtn");


if (notificationBtn) {

    notificationBtn.addEventListener("click", function () {

        alert(
            "You have 3 notifications:\n\n" +
            "• OOP Assignment is due soon.\n" +
            "• DSA Practice Sheet is pending.\n" +
            "• Your attendance is 85%."
        );

    });

}