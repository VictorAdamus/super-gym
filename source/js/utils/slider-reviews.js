const sliderReviews = () => {

  const reviewBlock = document.querySelector('.reviews');
  const nextButton = document.querySelector('.reviews__button--next');
  const prevButton = document.querySelector('.reviews__button--prev');

  if (reviewBlock) {
    nextButton.classList.remove('reviews__button--nojs');
    prevButton.classList.remove('reviews__button--nojs');
  }

  const reviewsSwiper = new Swiper('.reviews__wrapper', { // eslint-disable-line
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });

};

export {sliderReviews};
