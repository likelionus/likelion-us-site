const toggleBtn = document.querySelector(".toggle");
const toggleHeader = document.querySelector(".header");
const logo = document.querySelector(".logo");
const toggleMenu = document.querySelector(".menu");
const toggleHeaderBtns = document.querySelector(".headerBtns");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  toggleHeader.classList.toggle("active");
  logo.classList.toggle("active");
  toggleMenu.classList.toggle("active");
  toggleHeaderBtns.classList.toggle("active");
});
