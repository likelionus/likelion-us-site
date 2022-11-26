var numAnimation = document.querySelectorAll(".count-num");
console.log(numAnimation);

function changeNum(idx) {
  var num = 0;
  var intervalTime = 50;
  var targetNum = numAnimation[idx].getAttribute("data-count");
  if (targetNum >= 1000) {
    intervalTime = 0.0000000001;
  }
  var timer = setInterval(function () {
    ++num;
    numAnimation[idx].innerText = num;
    if (num == targetNum) {
      clearInterval(timer);
    }
  }, intervalTime);
}

for (var i = 0; i < numAnimation.length; i++) {
  changeNum(i);
}
