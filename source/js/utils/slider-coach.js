const sliderCoach = () => {
  const coachBlock = document.querySelector('.coach');
  const coachSlider = document.querySelector('.coach__slider');
  const buttonNext = document.querySelector('.coach__button--next');
  const buttonPrev = document.querySelector('.coach__button--prev');
  if (coachBlock) {

    buttonNext.classList.remove('coach__button--nojs');
    buttonPrev.classList.remove('coach__button--nojs');
    coachSlider.classList.remove('coach__slider--nojs');

    const coachSwiper = new Swiper('.coach__slider', { // eslint-disable-line
      autoHeight: true,
      direction: 'horizontal',
      watchOverflow: true,
      loop: true,
      spaceBetween: 40,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      breakpoints: {
        320: {
          initialSlide: 1,
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          initialSlide: 2,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

};

export {sliderCoach};
