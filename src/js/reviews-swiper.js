import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperWrapper = document.querySelector('.swiper-wrapper');

let swiper;

const handleResizeScrean = () => {
  const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
  if (isDesktop) {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }

    swiperWrapper.classList.remove('mobile-style');
    swiperWrapper.classList.add('desktop-style');
  } else {
    if (!swiper) {
      swiperWrapper.classList.remove('desktop-style');
      swiperWrapper.classList.add('mobile-style');

      swiper = new Swiper('.swiper-reviews', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        pagination: {
          el: '#reviews-pagination',
          bulletClass: 'pagination-btn',
          bulletActiveClass: 'pagination-btn--active',
          clickable: true,
        },

        modules: [Navigation, Keyboard, Pagination],

        navigation: {
          nextEl: '#reviews-btn-next',
          prevEl: '#reviews-btn-prev',
        },
      });
    }
  }
};

handleResizeScrean();
