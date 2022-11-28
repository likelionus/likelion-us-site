var moreToggle = document.querySelector(".toggle");

moreToggle.addEventListener("click", () => {
  setTimeout(function () {
    window.scroll(0, document.body.scrollHeight - 800);
  }, 500);
});
