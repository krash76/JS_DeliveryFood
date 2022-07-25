import Swiper, { Navigation, Pagination } from 'swiper';

export const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    autoplay: {
      delay: 3000,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  });
}

