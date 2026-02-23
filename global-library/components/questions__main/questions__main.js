const questions__main = () => {
  const init = () => {
    const items = document.querySelectorAll(".questionsContainer-item");
    if (!items.length) return;

    items.forEach((item) => {
      const top = item.querySelector(".questionsContainer-item-top");
      const bottom = item.querySelector(".questionsContainer-item-bottom");
      const label = item.querySelector(".label");

      if (!top || !bottom || !label) return;

      bottom.style.maxHeight = "0";
      bottom.style.overflow = "hidden";
      bottom.style.transition = "max-height 0.4s ease";

      top.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        items.forEach((el) => {
          el.classList.remove("active");
          const elBottom = el.querySelector(".questionsContainer-item-bottom");
          const elLabel = el.querySelector(".label");
          if (elBottom) elBottom.style.maxHeight = "0";
          if (elLabel) elLabel.textContent = "+";
        });

        if (!isActive) {
          item.classList.add("active");
          bottom.style.maxHeight = bottom.scrollHeight + "px";
          label.textContent = "–";
        }
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
};

export default questions__main;
