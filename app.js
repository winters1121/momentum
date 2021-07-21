const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink!");
} else if (age > 50 && age <= 80) {
  console.log("I recommend u. dont drink.");
} else if (age === 100) {
  // 코드는 위에서부터 아래로 읽히니까 지금 코드와 바로 밑의 코드는 중복되는 값이니, age가 100인 경우를 따로 적용하고 싶다면 위에다 써줘야 한다. 
  console.log("whatever you want.");
} else if (age > 80) {
  alert("You have the right to remain silent.");
}

// = 이 한개면 변수에 값을 저장하겠다. 할당하겠다. 라는 의미.
// === 라면 변수와 그 값을 확인하는 것.
// !== 은 그 값이 아니다. 즉, NOT이란 의미를 가진 연산자.

// 그렇다면 복잡하게 조건을 걸 수 있을까? 당연히 가능.
if ((a && b) || (c && d)) {
} //의 경우, (c && d)가 먼저 계산이 이루어지고 true나 false값이 나오겠지. if문이 true여야 조건문이 시작될 수 있지.

// 이제 HTML과 상호작용할 수 있는 파트로 넘어갈 수 있어.
