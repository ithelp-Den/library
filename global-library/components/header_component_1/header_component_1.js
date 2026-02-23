const marquee = document.getElementById('marquee');
let speed = 0.3; // Швидкість (чим більше число, тим швидше)
let offset = 0;

// 1. Клонуємо контент для створення ілюзії нескінченності
marquee.innerHTML += marquee.innerHTML; 

function animate() {
    offset -= speed;
    
    // 2. Коли перша половина (оригінальні 3 фото) повністю пішла вліво
    // ми скидаємо offset на 0, щоб почати цикл заново непомітно
    if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
    }
    
    marquee.style.transform = `translateX(${offset}px)`;
    
    requestAnimationFrame(animate);
}

// Запускаємо конвеєр
animate();

// Опціонально: зупинка при наведенні мишки
marquee.addEventListener('mouseenter', () => speed = 0);
marquee.addEventListener('mouseleave', () => speed = 1);