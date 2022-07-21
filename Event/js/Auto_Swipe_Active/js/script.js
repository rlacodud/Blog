var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  initialSlide: 0,
  autoHeight: false,
  direction: 'horizontal',
  loop: true,
  autoplay: 5000,
  autoplayStopOnLast: false, // loop false also
  pagination: '.swiper-pagination',
  paginationType: "bullets",

  effect: 'slide',
  spaceBetween: 60,
  slidesPerView: 2,
  centeredSlides: true,
  slidesOffsetBefore: 0,
  grabCursor: true
});
mySwiper.on('transitionEnd', function() { console.log('now index :::', swiper.realIndex); });