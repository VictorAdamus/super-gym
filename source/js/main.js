import {iosVhFix} from './utils/ios-vh-fix';
import {membershipsToggle} from './utils/memberships-toggle';
import {sliderCoach} from './utils/slider-coach';
import {sliderReviews} from './utils/slider-reviews';
import {findVideos} from './utils/video-play';

// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  findVideos();
  membershipsToggle();
  sliderCoach();
  sliderReviews();
});
