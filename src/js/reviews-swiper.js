import Swiper from "swiper";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperWrapper = document.querySelector(".swiper-wrapper");

let swiper;

const initSwiper = () => {
  swiper = new Swiper(".swiper-reviews", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,

    slideClass: "swiper-slide-v",
    wrapperClass: "swiper-wrapper-reviews",

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: "#reviews-pagination",
      bulletClass: "pagination-btn",
      bulletActiveClass: "pagination-btn--active",
      clickable: true,
    },

    modules: [Navigation, Keyboard, Pagination],

    navigation: {
      nextEl: "#reviews-btn-next",
      prevEl: "#reviews-btn-prev",
    },
  });
};

const handleResizeScreen = () => {
  const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

  if (isDesktop) {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    swiperWrapper.classList.replace("mobile-style", "desktop-style");
  } else {
    if (!swiper) {
      swiperWrapper.classList.replace("desktop-style", "mobile-style");
      initSwiper();
    }
  }
};

const debounce = (func, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
};

handleResizeScreen();
window.addEventListener("resize", debounce(handleResizeScreen, 200));
