const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
  },
  pauseOnMouseEnter: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});