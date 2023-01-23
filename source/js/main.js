import {iosVhFix} from './utils/ios-vh-fix';
import {membershipsToggle} from './utils/memberships-toggle';
import {sliderCoach} from './utils/slider-coach';
import {sliderReviews} from './utils/slider-reviews';

// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  membershipsToggle();
  sliderCoach();
  sliderReviews();
});
