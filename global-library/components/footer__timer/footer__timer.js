const footer__timer = () => {
    const init = () => {
        const footer = document.getElementById('footer');
        if (!footer) return;

        // ===== Scroll handler =====
        const handleScroll = () => {
            if (window.scrollY >= 200) footer.classList.add('active');
            else footer.classList.remove('active');
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // ===== Timer setup =====
        const hoursEl = footer.querySelector('.footer-timer-item:nth-child(1) .footer-timer-value');
        const minutesEl = footer.querySelector('.footer-timer-item:nth-child(2) .footer-timer-value');
        const secondsEl = footer.querySelector('.footer-timer-item:nth-child(3) .footer-timer-value');

        if (!hoursEl || !minutesEl || !secondsEl) return;

        const STORAGE_KEY = 'footer_timer_end';
        const FULL_DURATION = 24 * 60 * 60 * 1000; // 24 години в мс

        const startTimer = () => {
            // Перевіряємо збережений час
            let endTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);
            if (isNaN(endTime) || endTime < Date.now()) {
                endTime = Date.now() + FULL_DURATION;
                localStorage.setItem(STORAGE_KEY, endTime);
            }

            const update = () => {
                let remaining = Math.max(0, endTime - Date.now());
                if (remaining <= 0) {
                    // Таймер закінчився → перезапускаємо
                    endTime = Date.now() + FULL_DURATION;
                    localStorage.setItem(STORAGE_KEY, endTime);
                    remaining = FULL_DURATION;
                }

                const hrs = Math.floor(remaining / (1000 * 60 * 60));
                const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((remaining % (1000 * 60)) / 1000);

                hoursEl.textContent = String(hrs).padStart(2, '0');
                minutesEl.textContent = String(mins).padStart(2, '0');
                secondsEl.textContent = String(secs).padStart(2, '0');

                requestAnimationFrame(update); // плавний, без стрибків
            };

            update();
        };

        startTimer();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
};

export default footer__timer;
