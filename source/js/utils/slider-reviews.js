const sliderReviews = () => {

  const reviewBlock = document.querySelector('.reviews');
  const reviewSlider = document.querySelector('.reviews__slider');
  const nextButton = document.querySelector('.reviews__button--next');
  const prevButton = document.querySelector('.reviews__button--prev');

  if (reviewBlock) {
    nextButton.classList.remove('reviews__button--nojs');
    prevButton.classList.remove('reviews__button--nojs');
    reviewSlider.classList.remove('reviews__slider--nojs');
  }

  const reviewsSwiper = new Swiper('.reviews__slider', { // eslint-disable-line
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    watchOverflow: true,
    loopedSlides: 0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });

};

export {sliderReviews};
