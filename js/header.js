const mobileBtn = document.querySelectorAll(".mobileBtn");
const toggleMenu = document.querySelector(".menu");
const toggleHeaderBtns = document.querySelector(".headerBtns");

// 모바일 버튼 햄버거 클릭 시 동작들
mobileBtn[0].addEventListener("click", () => {
  mobileBtn[0].classList.toggle("btnOff");
  mobileBtn[1].classList.toggle("btnOn");
  toggleMenu.classList.toggle("active");
  toggleHeaderBtns.classList.toggle("active");
});

// 모바일 버튼 엑스 클릭 시 동작들
mobileBtn[1].addEventListener("click", () => {
  mobileBtn[1].classList.toggle("btnOn");
  mobileBtn[0].classList.toggle("btnOff");
  toggleMenu.classList.toggle("active");
  toggleHeaderBtns.classList.toggle("active");
});
