var moreToggle = document.querySelector(".toggle");
var toggleIcon = document.querySelector(".toggleIcon");

moreToggle.addEventListener("click", () => {
  toggleIcon.classList.toggle("active");

  if (toggleIcon.classList.contains("active"))
    setTimeout(function () {
      window.scroll(0, document.body.scrollHeight - 800);
    }, 500);
});
