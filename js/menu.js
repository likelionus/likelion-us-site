var headerHeight = document.querySelector("#header").offsetHeight;

var header = document.querySelector("#header").offsetTop;
var about = document.querySelector("#about").offsetTop;
var univs = document.querySelector("#univs").offsetTop;
var apply = document.querySelector("#apply").offsetTop;
var faq = document.querySelector("#faq").offsetTop;

function toTop() {
  window.scrollTo({ top: 0 });
}

function toAbout() {
  window.scrollTo({ top: about - headerHeight });
}

function toUnivs() {
  window.scrollTo({ top: univs - headerHeight });
}

function toApply() {
  window.scrollTo({ top: apply - headerHeight });
}

function toFqa() {
  window.scrollTo({ top: faq - headerHeight });
}
