const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

const elementList = document.querySelectorAll(".element");
const sbContainerList = document.querySelectorAll(".sbContainer");
const applyTitle = document.querySelectorAll(".apply_title");
const historyStart = document.querySelectorAll(".history");

// 반복문을 돌려 모든 DOM에 적용
elementList.forEach((el) => observer.observe(el));
sbContainerList.forEach((el) => observer.observe(el));
applyTitle.forEach((el) => observer.observe(el));
historyStart.forEach((el) => observer.observe(el));
