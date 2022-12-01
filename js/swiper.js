const swiper = new Swiper(".swiper-container", {
  spaceBetween: 70,
  loop: true,
  speed: 2000,
  loopAdditionalSlides: 1,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: false,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 150,
    slideShadows: false,
    stretch: 0,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});
