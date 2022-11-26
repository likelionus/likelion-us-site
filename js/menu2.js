var headerHeight2 = document.querySelector("#header").offsetHeight;

/* 정원 */
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
