// Icons
const feather = require('feather-icons');
feather.replace();


// Slider
import Swiper from 'swiper';
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});