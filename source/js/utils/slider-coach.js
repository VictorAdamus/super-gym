const sliderCoach = () => {
  const coachBlock = document.querySelector('.coach');
  const prevButton = document.querySelector('.coach__button--prev');
  const nextButton = document.querySelector('.coach__button--next');
  const coachList = document.querySelector('.coach__list');

  if (coachBlock) {
    prevButton.classList.remove('coach__button--nojs');
    nextButton.classList.remove('coach__button--nojs');
    coachList.classList.remove('coach__list--nojs');

    const coachSwiper = new Swiper('.coach__slider', { // eslint-disable-line
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.coach__button--next',
        prevEl: '.coach__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
        },
      },
    });
  }

};

export {sliderCoach};
