const h1 = document.querySelector("h1");
const iconarray = ["✌🏻", "✊🏻", "✋🏻"];
const h3 = document.querySelector("h3");
function random() {
  const randomarray = iconarray[Math.floor(Math.random() * iconarray.length)];
  h1.innerText = randomarray;
}
random();
let interval = setInterval(random, 100); //이렇게해도 실행이되네?

//랜덤 가위바위보까지만듬

const Form = document.querySelector("form");
const Button = document.querySelector("form button");
const Two = document.getElementById("two");
const Zero = document.getElementById("zero");
const Five = document.getElementById("five");
function user1(event) {
  event.preventDefault(); //clearInterval은 변수를 받아주어야 실행이가능하다
  clearInterval(interval);
  if (h1.innerText == "✌🏻") {
    h3.innerText = "Draw!!";
  } else if (h1.innerText == "✊🏻") {
    h3.innerText = "you lose ㅠㅠ";
  } else {
    h3.innerText = "you win!!!";
  }
}

function user2(event) {
  event.preventDefault(); //clearInterval은 변수를 받아주어야 실행이가능하다
  clearInterval(interval);
  if (h1.innerText == "✌🏻") {
    h3.innerText = "you win!!!";
  } else if ((h1.innerText = "✊🏻")) {
    h3.innerText = "Draw!!";
  } else {
    h3.innerText = "you lose ㅠㅠ";
  }
}

function user3(event) {
  event.preventDefault(); //clearInterval은 변수를 받아주어야 실행이가능하다
  clearInterval(interval);
  if (h1.innerText == "✌🏻") {
    h3.innerText = "you lose ㅠㅠ";
  } else if ((h1.innerText = "✊🏻")) {
    h3.innerText = "you win!!!";
  } else {
    h3.innerText = "Draw!!";
  }
}
Two.addEventListener("click", user1);
Zero.addEventListener("click", user2);
Five.addEventListener("click", user3);

//eventlistener로 해도 될거같다.
//if(submit){함수중단 및 그때의 innertext와 비교 해서 그 결과값에 따라 alert}
//two, zero, five에 따른 이벤트리스너를 각각 다르게 생성하여
// 그때의 h1.innertext의 값에 따라 다르게 alert가 나오도록하자
