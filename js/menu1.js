// header 메뉴 바 위치 이동 코드

// header바 높이 측정
var headerHeight1 = document.querySelector("#header").offsetHeight;

// 각 파트 별 최상단 위치 - header바 높이 위치로 이동
var mission = document.querySelector("#mission").offsetTop - headerHeight1;
var story = document.querySelector("#story").offsetTop - headerHeight1;
var global = document.querySelector("#global").offsetTop - headerHeight1;
var from = document.querySelector("#from").offsetTop - headerHeight1;

function toMission() {
  window.scrollTo({ top: mission });
}

function toStory() {
  window.scrollTo({ top: story });
}

function toGlobal() {
  window.scrollTo({ top: global });
}

function toFrom() {
  window.scrollTo({ top: from });
}
