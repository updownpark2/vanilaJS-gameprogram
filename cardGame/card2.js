const iconarray = [
  "🐝",
  "🪲",
  "🐔",
  "🐹",
  "🐰",
  "🐱",
  "🐶",
  "🐼",
  "🐻",
  "🐝",
  "🪲",
  "🐔",
  "🐹",
  "🐰",
  "🐱",
  "🐶",
  "🐼",
  "🐻",
];
let numarray = []; //랜덤숫자 18개가 있어있는배열
function arraypush() {
  let randomMath = Math.floor(Math.random() * 18);
  if (numarray.includes(randomMath) == false) {
    numarray.push(randomMath);
  }
}
while (numarray.length < 18) {
  arraypush();
}
//이렇게하고 button에 들어있는 innertext가 0 =6  의 관계이면 어떤 것을 내 뱉는식으로

const id_first = document.getElementById("first");
const id_second = document.getElementById("second");
const id_third = document.getElementById("third");
function spanpush1() {
  for (i = 0; i < 6; i++) {
    const button = document.createElement("button");
    button.innerText = iconarray[numarray[i]];
    id_first.appendChild(button);
    button.addEventListener("click", click);
  }
}
function spanpush2() {
  for (i = 6; i < 12; i++) {
    const button = document.createElement("button");
    button.innerText = iconarray[numarray[i]];
    id_second.appendChild(button);
    button.addEventListener("click", click);
  }
}
function spanpush3() {
  for (i = 12; i < 18; i++) {
    const button = document.createElement("button");
    button.innerText = iconarray[numarray[i]];
    id_third.appendChild(button);
    button.addEventListener("click", click);
  }
}
spanpush1();
spanpush2();
spanpush3();
let imgarray = [];
let count = 0;
function click(event) {
  event.preventDefault();
  const target = event.target;
  const targetText = target.innerText;
  target.classList.add("click");
  imgarray.push(targetText);
  console.dir(target);
  const clicked = document.querySelectorAll(".click"); //nodelist로반환
  //foreach를 사용해서 삭제해보자 classname을!
  console.dir(clicked);

  if (imgarray[0] !== imgarray[1]) {
    clicked.classList.add("same");
  }
  //

  //click을 한 순간 css로 카드를보여주고 안보여주고를 반복하면될거같다.
  //click을 하면 click css 아닐시에는 둘 다 다시 전의 상태로 return
}
