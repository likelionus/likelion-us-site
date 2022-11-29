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
// const historyList = document.querySelectorAll(".scrollHistory");

const countUpSection = document.querySelectorAll(".history");

const activity1 = document.querySelectorAll(".Ideathon");
const activity2 = document.querySelectorAll(".Hackathon");
const activity3 = document.querySelectorAll(".Mentoring");
const activity4 = document.querySelectorAll(".Networking");


// 반복문을 돌려 모든 DOM에 적용
elementList.forEach((el) => observer.observe(el));
sbContainerList.forEach((el) => observer.observe(el));
// historyList.forEach((el) => observer.observe(el));
countUpSection.forEach((el)=>observer.observe(el));

activity1.forEach((el)=>observer.observe(el));
activity2.forEach((el)=>observer.observe(el));
activity3.forEach((el)=>observer.observe(el));
activity4.forEach((el)=>observer.observe(el));


