const slider = new Swiper('.main-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 500,

    loop: false, // стабільніше ніж true

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
    550: {
      slidesPerView: 3.5,
    },
    650: {
      slidesPerView: 4,
    },
    750: {
      slidesPerView: 4.5,
    },
    850: {
      slidesPerView: 5,
    },
    950: {
      slidesPerView: 5.5,
    },
    1050: {
      slidesPerView: 6,
    },
    1150: {
      slidesPerView: 6.5,
    },
    1250: {
      slidesPerView: 7,
    },
  },

    // антикрихкість
    watchOverflow: true,
    observer: true,
    observeParents: true,
    resizeObserver: true,

    on: {
    reachEnd: function () {
      // плавний скролл назад на 0
      setTimeout(() => {
        this.slideTo(0, 0, false); // instant reset
      }, 200);
    },
  },

    // touch
    grabCursor: true,
    resistanceRatio: 0.6,
  });
