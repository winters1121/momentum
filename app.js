const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  // age < 0이란 조건이 없으면, 음수를 입력했을 때, you are too young이 출력된다. 그렇기에 OR 연산자를 활용할 수 있지. OR는 원화버튼과 shift 버튼을 동시에 눌러
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  // AND 연산자는 모든 구문이 참이여야 참, 하나라도 거짓이면 거짓 OR 연산자는 여러개 중 하나라도 참이면 참, 둘다 false여야 false
  console.log("You can drink!");
} else if (age > 50 && age <= 80) {
  console.log("I recommend u. dont drink.");
} else if (age > 80) {
  alert("You have the right to remain silent.");
}

// else는 선택적 사항. 필요 없으면 사용하지 않아도 돼
