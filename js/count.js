var numAnimation = document.querySelectorAll(".count-num");
var checkVisible = document.querySelector("section.history");

console.log(numAnimation);

function changeNum(idx,oneTime) {
  var num = 0;
  var intervalTime = 50;
  var targetNum = numAnimation[idx].getAttribute("data-count");
  if (targetNum >= 1000) {
    intervalTime = 1;
  }
  var timer = setInterval(function () {
    ++num;
    numAnimation[idx].innerText = num;
    if (num == targetNum) {
      clearInterval(timer);
    }
  }, intervalTime);
}
var oneTime = 1 // 이벤트를 한번만 실행시키기 위해 변수설정


// visible클래스가 있을때 스크롤 내릴때마다 숫자반복이 다시 시작되는 문제가 있었음
function upNumber(){
  if(checkVisible.classList.contains('visible')){ // visible클래스가 있고
    if(oneTime==1){ // 실행횟수가 1일때
    for (var i = 0; i < numAnimation.length; i++) {
      changeNum(i,oneTime); // 숫자 변경
    }
  }
    oneTime++; // visible클래스가 있어도 한번 실행하고 실행횟수를 증가시켜서 두번다시는 숫자 안올라가도록 함
  }
}


window.addEventListener('scroll', upNumber);