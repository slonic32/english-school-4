import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const studentsSwiper = new Swiper('.feedbacks-scroll', {
  modules: [Pagination, Keyboard, Mousewheel, Navigation],
  loop: true,




  breakpoints: {
    320: {
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },

    768: {
      speed: 500,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 32,


    },
    1280: {
      speed: 500,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
    }
  }
})