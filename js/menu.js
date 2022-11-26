var headerHeight = document.querySelector("#header").offsetHeight;

var header = document.querySelector("#header").offsetTop;
var about = document.querySelector("#about").offsetTop - headerHeight;
var univs = document.querySelector("#univs").offsetTop - headerHeight;
var apply = document.querySelector("#apply").offsetTop - headerHeight;
var faq = document.querySelector("#faq").offsetTop - headerHeight;

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
