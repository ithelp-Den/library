document.addEventListener("DOMContentLoaded", () => {

    // =================
    // BURGER MENU
    // =================

    // Бургер меню
const burderButton = document.getElementById("burger-button");
const burderButtonClose = document.getElementById("burger-close");
const burgerMenu = document.querySelector(".burger-menu");
const burgerLinks = document.querySelectorAll(".burger-menu-list-link");

if (burderButton && burderButtonClose && burgerMenu && burgerLinks) {
    burderButton.addEventListener("click", () => {
        burgerMenu.classList.add("active");
    });

    burderButtonClose.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
    });

    burgerLinks.forEach((el) => {
        el.addEventListener("click", () => {
            burgerMenu.classList.remove("active");
        });
    });
}

// Scroll spy для звичайних лінків
const navLinks = document.querySelectorAll('.content-navigations-list-link');

function updateActiveLink() {
    let fromTop = window.scrollY + window.innerHeight / 2; // середина екрану
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (fromTop >= sectionTop && fromTop < sectionBottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

// Виклик при скролі
window.addEventListener('scroll', updateActiveLink);

// Виклик на старті сторінки
updateActiveLink();


    // =================
    // TIMER 24H LOOP
    // =================

    const hoursEl = document.getElementById("header-hours");
    const minEl = document.getElementById("header-min");
    const secEl = document.getElementById("header-sec");

    if (!hoursEl || !minEl || !secEl) return;

    const TIMER_KEY = "timer24h_end";

    let endTime = localStorage.getItem(TIMER_KEY);

    if (!endTime) {
        endTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem(TIMER_KEY, endTime);
    } else {
        endTime = parseInt(endTime);
    }

    function updateTimer() {

        const now = Date.now();
        let diff = endTime - now;

        if (diff <= 0) {
            endTime = Date.now() + 24 * 60 * 60 * 1000;
            localStorage.setItem(TIMER_KEY, endTime);
            diff = endTime - now;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        hoursEl.textContent = String(hours).padStart(2, "0");
        minEl.textContent = String(minutes).padStart(2, "0");
        secEl.textContent = String(seconds).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);

});