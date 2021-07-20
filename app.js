function sayHalo(name, age) {
  // 인자엔 어떠한 값이 와도 상관없다.
  console.log("Hello! my name is " + name, "and my age is " + age);
}

function sayHalo(name, age) {
  console.log("Hello! my name is", name, "and my age is", age);
}
console.log(name); // 함수 안에 있는 인자는 함수 밖에서 호출이 불가능하다. 파이썬으로 예를 들면, return 값을 지정하지 않은 상태처럼. 그래서 함수 밖에서 호출하고 싶다면, 오브젝트 안에서 함수를 선언해서 player.sayHello()처럼 활용가능하다. 맨 밑의 코드 참조.

sayHalo("nico", 36);
sayHalo("sw", 28);
sayHalo("nk", 28);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}

plus(3, 6);
divide(60, 2);

const player = {
  name: "sw",
  sayHello: function (otherPersons) {
    console.log("Hello!", otherPersons); // 오브젝트 안에 함수 선언하면 함수 밖에서 함수 호출 가능.
  },
};

console.log(player.name);
player.sayHello("SangWook"); // 변수 player안에 있는 함수 호출
