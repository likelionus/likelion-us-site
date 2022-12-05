const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.5,
};

// scroll 옵저버
// 스크롤 변화를 감지하면 class .visible add, remove 동작
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

// join 페이지 element, apply
const elementList = document.querySelectorAll(".element");
const sbContainerList = document.querySelectorAll(".sbContainer");

// 반복문을 돌려 모든 DOM에 적용
elementList.forEach((el) => observer.observe(el));
sbContainerList.forEach((el) => observer.observe(el));
