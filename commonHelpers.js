/* empty css                      */import{S as d,N as u,K as p,P as m,E as y}from"./assets/vendor-a2f39585.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const i=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".js-header-link"),e=document.querySelector(".backdrop"),t=document.querySelector(".header");if(!i||!s||!l||!t||!e)return;const n=()=>{const r=i.classList.contains("is-open");if(s.setAttribute("aria-expanded",!r),i.classList.toggle("is-open"),r)document.body.classList.remove("no-scroll");else{document.body.classList.add("no-scroll");const f=t.offsetHeight;i.style.top=`${f}px`}};a.forEach(r=>r.addEventListener("click",n)),s.addEventListener("click",n),l.addEventListener("click",n),window.matchMedia("(min-width: 320px)").addEventListener("change",r=>{r.matches&&(i.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll"))}),e.addEventListener("click",r=>{r.target===e&&(i.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll"))})})();const c=document.querySelector(".swiper-wrapper");let o;const g=()=>{window.matchMedia("(min-width: 1200px)").matches?(o&&(o.destroy(!0,!0),o=null),c.classList.remove("mobile-style"),c.classList.add("desktop-style")):o||(c.classList.remove("desktop-style"),c.classList.add("mobile-style"),o=new d(".swiper-reviews",{loop:!0,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:"#reviews-pagination",bulletClass:"pagination-btn",bulletActiveClass:"pagination-btn--active",clickable:!0},modules:[u,p,m],navigation:{nextEl:"#reviews-btn-next",prevEl:"#reviews-btn-prev"}}))};g();new d(".swiper-gallery",{direction:"horizontal",slidesPerView:1,spaceBetween:0,initialSlide:0,loop:!0,slideToClickedSlide:!0,slideClass:"swiper-slide-gallery",wrapperClass:"swiper-wrapper-gallery",effect:window.innerWidth<=1200?"slide":"creative",keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:"#gallery-pagination",bulletClass:"pagination-btn",bulletActiveClass:"pagination-btn--active",clickable:!0},modules:[u,p,m,y],navigation:{nextEl:"#gallery-btn-next",prevEl:"#gallery-btn-prev"},breakpoints:{1200:{slidesPerView:"auto",spaceBetween:10,centeredSlides:!0,effect:"creative",creativeEffect:{limitProgress:2,prev:{translate:[-300,"10%",0]},next:{translate:[300,"10%",0]}},slideActiveClass:"gallery-active-slide"},320:{slidesPerView:1,spaceBetween:0}}});
//# sourceMappingURL=commonHelpers.js.map
