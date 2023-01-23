const membershipsToggle = () => {
  const tariffBlock = document.querySelector('.tariff');

  if (tariffBlock) {
    const toggleButtonList = tariffBlock.querySelectorAll('.memberships__button');
    const toggleButtonsArr = [...toggleButtonList];
    const subscriptionSlides = tariffBlock.querySelectorAll('.tariff__list');
    toggleButtonsArr.forEach(function (button, j) {
      function toggleHandler(evt) {
        evt.preventDefault();
        for (let i = 0; i < subscriptionSlides.length; i++) {
          subscriptionSlides[i].classList.remove('tariff__list--active');
          toggleButtonsArr[i].classList.remove('memberships__button--active');
        }
        toggleButtonList[j].classList.add('memberships__button--active');
        subscriptionSlides[j].classList.add('tariff__list--active');
      }
      button.addEventListener('click', toggleHandler);
    });
  }
};

export {membershipsToggle};
