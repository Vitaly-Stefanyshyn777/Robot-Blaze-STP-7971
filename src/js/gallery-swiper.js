import Swiper from "swiper";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperGallery = new Swiper(".swiper-gallery", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide: 0,
  loop: true,
  slideToClickedSlide: true,
  slideClass: "swiper-slide-gallery",
  wrapperClass: "swiper-wrapper-gallery",

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  pagination: {
    el: "#gallery-pagination",
    bulletClass: "pagination-btn",
    bulletActiveClass: "pagination-btn--active",
    clickable: true,
  },

  modules: [Navigation, Keyboard, Pagination],

  navigation: {
    nextEl: "#gallery-btn-next",
    prevEl: "#gallery-btn-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 1, // Рівно один слайд
      spaceBetween: 10,
      centeredSlides: false, // Вимикаємо центрування, щоб не було накладання
      effect: "slide", // Простий ефект, без creative налаштувань
      slideActiveClass: "gallery-active-slide",
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
