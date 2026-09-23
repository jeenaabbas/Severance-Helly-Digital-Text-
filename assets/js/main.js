/* =========================
   START STORY
========================= */

const beginButton = document.getElementById("beginButton");
const intro = document.getElementById("intro");
const story = document.getElementById("story");

beginButton.addEventListener("click", function () {

    intro.style.opacity = "0";

    setTimeout(function () {

        intro.style.display = "none";

        story.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);

});


/* =========================
   INTERACTIVE WORDS
========================= */

const interactiveWords =
    document.querySelectorAll(".interactive-word");

interactiveWords.forEach(function (word) {

    word.addEventListener("click", function () {

        const targetID = word.getAttribute("data-target");

        const target = document.getElementById(targetID);

        if (target) {

            target.classList.toggle("visible");

            if (target.classList.contains("visible")) {

                word.setAttribute("aria-expanded", "true");

            } else {

                word.setAttribute("aria-expanded", "false");

            }

        }

    });

});


/* =========================
   KEYBOARD ACCESSIBILITY
========================= */

interactiveWords.forEach(function (word) {

    word.setAttribute("role", "button");
    word.setAttribute("tabindex", "0");
    word.setAttribute("aria-expanded", "false");

    word.addEventListener("keydown", function (event) {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();

            word.click();

        }

    });

});


/* =========================
   RESTART
========================= */

const restartButton =
    document.getElementById("restartButton");

restartButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(function () {

        story.classList.remove("visible");

        intro.style.display = "flex";

        setTimeout(function () {
            intro.style.opacity = "1";
        }, 50);

    }, 600);

});
