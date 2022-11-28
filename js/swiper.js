const swiper = new Swiper(".swiper-container", {
  spaceBetween: 50,
  loop: true,
  speed: 2000,
  loopAdditionalSlides: 1,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 100,
    slideShadows: false,
    stretch: 0,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
