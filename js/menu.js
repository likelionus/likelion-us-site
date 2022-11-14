var headerHeight = document.querySelector("#header").offsetHeight;

// 정원
var header = document.querySelector("#header").offsetTop;
var about = document.querySelector("#about").offsetTop - headerHeight;
var univs = document.querySelector("#univs").offsetTop - headerHeight;
var apply = document.querySelector("#apply").offsetTop - headerHeight;
var faq = document.querySelector("#faq").offsetTop - headerHeight;

//정원
var menuAbout = document.querySelector(".menu_about");
var menuUnivs = document.querySelector(".menu_univs");
var menuApply = document.querySelector(".menu_apply");
var menuFaq = document.querySelector(".menu_faq");

window.addEventListener("scroll", () => {
  if (window.scrollY >= about && window.scrollY < univs) {
    menuAbout.classList.add("focus");
  } else {
    menuAbout.classList.remove("focus");
  }
  if (window.scrollY >= univs && window.scrollY < apply) {
    menuUnivs.classList.add("focus");
  } else {
    menuUnivs.classList.remove("focus");
  }
  if (window.scrollY >= apply && window.scrollY < faq) {
    menuApply.classList.add("focus");
  } else {
    menuApply.classList.remove("focus");
  }
  if (window.scrollY >= faq) {
    menuFaq.classList.add("focus");
  } else {
    menuFaq.classList.remove("focus");
  }
});

// 정원
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
