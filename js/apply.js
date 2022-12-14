var executive = document.querySelector(".executive");
var student = document.querySelector(".student");

var before = document.querySelectorAll(".before");
var after = document.querySelectorAll(".after");

// 클릭 시 alert 창 출력
function applyAlert() {
  window.alert(
    "It is not a recruitment period!\nPlease 'Join us' below for pre-registration."
  );
}

// apply 운영진 버튼 onmouseover, onmouseout 이벤트
executive.onmouseover = function () {
  before[0].style.display = "none";
  after[0].style.display = "block";

  executive.style.border = "none";
  executive.style.backgroundColor = "white";
  executive.style.color = "black";
};

executive.onmouseout = function () {
  before[0].style.display = "block";
  after[0].style.display = "none";

  executive.style.border = "solid 2px white";
  executive.style.backgroundColor = "black";
  executive.style.color = "white";
};

// apply 학생 버튼 onmouseover, onmouseout 이벤트
student.onmouseover = function () {
  before[1].style.display = "none";
  after[1].style.display = "block";

  student.style.border = "none";
  student.style.backgroundColor = "#ff7710";
  student.style.color = "black";
};

student.onmouseout = function () {
  before[1].style.display = "block";
  after[1].style.display = "none";

  student.style.border = "solid 2px #ff7710";
  student.style.backgroundColor = "black";
  student.style.color = "#ff7710";
};
