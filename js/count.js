var numAnimation = document.querySelectorAll(".count-num");
var checkVisible = document.querySelector("section.history");


function changeNum(idx,oneTime) {
  var num = 0;
  var intervalTime = 25;
  var targetNum = numAnimation[idx].getAttribute("data-count"); // 목표숫자들: 10,130,8400,1000
  if (targetNum > 1000) { // data-count가 1000보다 클때 올라가는 속도 지정
    intervalTime = 5; // 속도를 맞추기위해 속도 다 다르게 지정
  }else if(targetNum > 130){
    intervalTime = 2;
  }
  else if(targetNum > 10){
    intervalTime = 30;
  }else{
    intervalTime = 350;
  }
  var timer = setInterval(function () {
    if(idx == 2){ // index[2]는 학생
      num += 10; // 8400명 부분은 속도를 맞추기 위해 10씩 증가시킴
    }else{
    ++num;  // 숫자 1씩 증가
  }
    numAnimation[idx].innerText = num;
    if (num == targetNum) {
      clearInterval(timer);
    }
  }, intervalTime);
}


var oneTime = 1 // 이벤트를 한번만 실행시키기 위해 실행횟수 변수설정



function upNumber(){
  if(checkVisible.classList.contains('visible')){ // section.history에 visible클래스가 있고
    if(oneTime==1){ // 실행횟수가 1일때
    for (var i = 0; i < numAnimation.length; i++) {
      changeNum(i,oneTime); // 숫자 올라가는 함수 실행
    }
  }
    oneTime++; // visible클래스가 있을때 숫자 올라가는 함수 한번만 실행하기 위해서 실행횟수 변수에 1추가
               // 실행횟수를 증가시켜서 숫자 올라가는 함수가 재실행 안되도록 함
  }
}


window.addEventListener('scroll', upNumber);