// header 메뉴 바 위치 이동 코드

// header바 높이 측정
var headerHeight2 = document.querySelector("#header").offsetHeight;

// 각 파트 별 최상단 위치 - header바 높이 위치로 이동
var about = document.querySelector("#about").offsetTop - headerHeight2;
var univs = document.querySelector("#univs").offsetTop - headerHeight2;
var apply = document.querySelector("#apply").offsetTop - headerHeight2;
var faq = document.querySelector("#faq").offsetTop - headerHeight2;

function toAbout() {
  window.scrollTo({ top: about });
}

function toUnivs() {
  window.scrollTo({ top: univs });
}

function toApply() {
  window.scrollTo({ top: apply });
}

function toFaq() {
  window.scrollTo({ top: faq });
}
