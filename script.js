document.addEventListener("DOMContentLoaded", function () {

       


    /* =========================
       🎯 QUIZ LOGIC
       ========================= */
    window.showResult = function (character) {
        const result = document.getElementById("result");
        result.innerText = "🔥 You are most like " + character + "!";
    };

});
// 🌙 Dark / Light Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerText = "🌞 Light";
    } else {
        themeBtn.innerText = "🌙 Dark";
    }
});
// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

