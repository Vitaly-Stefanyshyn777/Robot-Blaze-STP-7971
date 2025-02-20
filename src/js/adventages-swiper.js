import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCreative,
} from "swiper/modules";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Keyboard, Pagination, EffectCreative],
  navigation: {
    nextEl: ".adv-btn-next",
    prevEl: ".adv-btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
