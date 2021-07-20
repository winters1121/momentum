// const age = prompt("How old are you?"); // prompt는 사용자에게 창을 띄울 수 있게 해줘. 중요한 점은 여기서 JS는 가만히 우리를 기다리고 있다는 점이야. 사이트를 일시정지 시키는 것이지. 근데 요즘엔 prompt를 사용하지 않아. 왜냐하면, message가 별로 이쁘지 않고, CSS 스타일을 적용할 수 없기 때문이야. 그래서 요즘엔 HTML이나 CSS로 만든 자신만의 창을 이용하지.
// console.log(age);

// 이제 한 type으로 받아서 다른 type으로 바꾸는 작업을 해보자.
// 즉, 사용자가 무엇을 입력하더라도 그걸 number로 바꾸는 걸 해볼거야

// 변수에 담긴 값의 type이 무엇인지 궁금하면 다음과 같이 알 수 있어.
// console.log(typeof age); //난 분명 숫자 36을 넣었는데 type은 string인 것을 알 수 있어. 그럼 string을 어떻게 number로 바꿀까??
// "15" -> 15 parseInt()
// console.log(typeof "15", typeof parseInt(age));
// console.log(age, parseInt(age)); // 이렇게 해주면 사용자가 숫자를 입력했는지 문자를 입력했는지 확실히 알 수 있어. 숫자면 파란색으로 나타날테니까.

//당연히 parseInt()는 "lalala"같은 string을 처리하지 못하지. 같은 문자형이라 해도 숫자형으로 전환이 불가능한 완벽한 문자형이니까.

// 결론적으로 prompt를 사용하면 안에 어떤 값을 입력해도 string으로 출력되니까 이를 형변환시켜줘야 한다. 파이썬의 경우에도 input()을 사용했을때 어떤 값을 넣어도 string으로 출력되니까 int(input())처럼 정수로 형변환 시켜줘야 하는 것처럼 말이다.
const age = parseInt(prompt("How old are you?"));
console.log(age, typeof age);
