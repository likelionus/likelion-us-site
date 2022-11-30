var headerHeight1 = document.querySelector("#header").offsetHeight;

/* 효진 */
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
