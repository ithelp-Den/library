const marqueeComponent = () => {
  const init = () => {
    const marquee = document.getElementById('marquee');
    if (!marquee) return; // захист на випадок, якщо елемент відсутній

    let speed = 0.3; // Швидкість (чим більше число, тим швидше)
    let offset = 0;

    // 1. Клонуємо контент для нескінченності
    marquee.innerHTML += marquee.innerHTML;

    // 2. Анімація
    const animate = () => {
      offset -= speed;

      // Коли перша половина пройшла
      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }

      marquee.style.transform = `translateX(${offset}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    // 3. Зупинка/продовження при hover
    marquee.addEventListener('mouseenter', () => (speed = 0));
    marquee.addEventListener('mouseleave', () => (speed = 0.3));
  };

  // Ініціалізація після DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
};

export default marqueeComponent;
