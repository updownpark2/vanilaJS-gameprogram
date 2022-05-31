//이미지를 먼저 9개 가져와서 총 18개(3X6)으로 배열 형태로
// 그리고 그 배열은 랜덤으로 재배열 되는것
//배열에 사진들을 넣고 랜덤 매소드이용하여 한 줄에 랜덤으로
//랜덤의 배열을 먼저 형성하고 거기서 [1],[2]이런식으로 가져오는게
//편할것이다.
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
//이렇게 아이콘 18개완성
//이걸 섞어버려~
let numarray = [];
let iconsavearray = [];
function sak(event) {
  const red = event.target.innerText;
  const blue = event.target;
  blue.classList.add("");
  //class 추가까지가능해짐!!!
  iconsavearray.push(red);
  //여기서 [0],[1]비교해야해
  //결국중요한건 삭제가 아니라 class추가
  console.log(iconsavearray);
  console.dir(blue);
  if (iconsavearray.length == 2) {
    iconsavearray.splice(0, 2);
  }

  //이렇게해서 innerText의 값을 받게됨
  //iconsavaedarray의 n과 n+1의 값이 같으면 적용
  //그리고 iconsavaedarray는 길이가 3이상이안되게 조절!
  //splice를 이용해서 0부터 2개 없애서 새롭게 만들면된다. 함수마지막에
}
function arraypush() {
  let randomMath = Math.floor(Math.random() * 18);
  if (numarray.includes(randomMath) == false) {
    numarray.push(randomMath);
  }
}
while (numarray.length < 18) {
  arraypush();
}
console.log(numarray);
//랜덤으로 숫자받는 것 까지 만듦
const id_first = document.getElementById("first");
const id_second = document.getElementById("second");
const id_third = document.getElementById("third");
function spanpush1() {
  for (i = 0; i < 6; i++) {
    const button = document.createElement("button");
    button.innerText = iconarray[numarray[i]];
    id_first.appendChild(button);
    button.addEventListener("click", sak);
  }
}
function spanpush2() {
  for (i = 6; i < 12; i++) {
    const button = document.createElement("button");
    button.innerText = iconarray[numarray[i]];
    id_second.appendChild(button);
    button.addEventListener("click", sak);
  }
}
function spanpush3() {
  for (i = 12; i < 18; i++) {
    const button = document.createElement("button");
    button.innerText = iconarray[numarray[i]];
    id_third.appendChild(button);
    button.addEventListener("click", sak);
  }
}
spanpush1();
spanpush2();
spanpush3();

//랜덤으로 아이콘 배치까지완료함

//뺐을 때 절대값이 9이면 통과!
//css와 javascript를 다르게 설정해주어야한다 css어디까지나 효과
//eventlistener를 이용하여 span이 해당 클릭한 span의 innertext를
//읽을 수 있는지 !
//button에 넣어야하나?
