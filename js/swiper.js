// 스와이퍼 생성
const swiper = new Swiper(".swiper-container", {
  spaceBetween: 70, // swiper-slide 간 간격
  loop: true, //루프 true
  speed: 2000, // 슬라이드 넘기는 속도
  loopAdditionalSlides: 1, //loop 끝에서 잘리는 현상 제거
  centeredSlides: true, // 슬라이드가 중앙으로
  slidesPerView: "auto",
  slideToClickedSlide: false, // 슬라이드 클릭 금지
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 150, // 슬라이드 간 깊이
    slideShadows: false, // 슬라이드 그림자 제거
    stretch: 0, // 늘리기 없음
  },
  autoplay: {
    delay: 2500, // 자동 재생 딜레이 속도
    disableOnInteraction: false,
  },
});
