import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

const swiperGallery = new Swiper(".swiper-gallery", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide: 0,
  loop: true,
  slideToClickedSlide: true,
  slideClass: "swiper-slide-gallery",
  wrapperClass: "swiper-wrapper-gallery",

  effect: window.innerWidth <= 1200 ? "slide" : "creative",

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

  modules: [Navigation, Keyboard, Pagination, EffectCreative],

  navigation: {
    nextEl: "#gallery-btn-next",
    prevEl: "#gallery-btn-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      effect: "creative",
      creativeEffect: {
        limitProgress: 2,
        prev: {
          translate: [-300, "10%", 0],
        },
        next: {
          translate: [300, "10%", 0],
        },
      },
      slideActiveClass: "gallery-active-slide",
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
