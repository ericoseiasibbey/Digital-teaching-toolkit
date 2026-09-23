/* =========================================
   ACTIVITY 1
========================================= */

function checkActivity1() {

    let answer =
        document.getElementById("activity1").value;

    let result =
        document.getElementById("activity1-result");


    if (answer === "quiz") {

        result.innerHTML =
            "Correct! An online quiz can be used to quickly check learners' understanding.";

    } else {

        result.innerHTML =
            "Try again. Think about which tool is specifically designed to check learners' understanding.";

    }
}


/* =========================================
   ACTIVITY 2
========================================= */

function saveActivity() {

    let subject =
        document.getElementById("subject").value;

    let topic =
        document.getElementById("topic").value;

    let tool =
        document.getElementById("tool").value;


    if (
        subject === "" ||
        topic === "" ||
        tool === ""
    ) {

        document.getElementById("save-result").innerHTML =
            "Please complete the Subject, Topic and Digital Tool fields.";

        return;
    }


    document.getElementById("save-result").innerHTML =
        "Your activity has been completed successfully.";
}


/* =========================================
   SAFETY ACTIVITY
========================================= */

function safetyAnswer(answer) {

    let result =
        document.getElementById("safety-result");


    if (answer === "unsafe") {

        result.innerHTML =
            "Correct. The message is unsafe because it asks for a school password through an unfamiliar link.";

    } else {

        result.innerHTML =
            "Incorrect. Never enter your school password through an unfamiliar or suspicious link.";

    }
}


/* =========================================
   FINAL QUIZ
========================================= */

function calculateScore() {

    let score = 0;


    let q1 =
        document.querySelector(
            'input[name="q1"]:checked'
        );

    let q2 =
        document.querySelector(
            'input[name="q2"]:checked'
        );

    let q3 =
        document.querySelector(
            'input[name="q3"]:checked'
        );

    let q4 =
        document.querySelector(
            'input[name="q4"]:checked'
        );

    let q5 =
        document.querySelector(
            'input[name="q5"]:checked'
        );


    if (q1 && q1.value === "b") {
        score++;
    }


    if (q2 && q2.value === "a") {
        score++;
    }


    if (q3 && q3.value === "b") {
        score++;
    }


    if (q4 && q4.value === "a") {
        score++;
    }


    if (q5 && q5.value === "a") {
        score++;
    }


    let percentage =
        (score / 5) * 100;


    document.getElementById("quiz-result").innerHTML =

        "You scored " +
        score +
        " out of 5 (" +
        percentage +
        "%).";


    if (score === 5) {

        document.getElementById("quiz-result").innerHTML +=
            "<br>Excellent! You have demonstrated a strong understanding of the toolkit.";

    } else if (score >= 3) {

        document.getElementById("quiz-result").innerHTML +=
            "<br>Good work. Review the modules where you need more practice.";

    } else {

        document.getElementById("quiz-result").innerHTML +=
            "<br>Keep learning. Review the modules and try the quiz again.";

    }

}


/* =========================================
   FEEDBACK
========================================= */

function submitFeedback(event) {

    event.preventDefault();


    document.getElementById("feedback-result").innerHTML =

        "Thank you for your feedback. Your response has been recorded for this project.";

}
