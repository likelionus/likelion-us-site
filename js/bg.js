// 랜덤 배경화면 기능

let randomNumber = Math.floor(Math.random() * 4) + 1;
// 배경화면 갯수 +1 만큼 랜덤 돌리기
document.querySelector(".bg").classList.add("bg0" + randomNumber);
// 랜덤 넘버를 배경화면 파일명 X자리에 추가
