const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(3, 6);
const minusResult = calculator.minus(plusResult, 0);
const multipleResult = calculator.multiple(10, minusResult);
const divideResult = calculator.divide(90, plusResult);
const squareResult = calculator.square(3, 3); // 상호 의존적으로 변수를 인자로 활용가능하다.

// console.log(plusResult);
// console.log(minusResult);
// console.log(multipleResult);
// console.log(divideResult);
// console.log(squareResult); console.log를 하지 않으면 당연히 값이 자동으로 출력되지 않겠지만, 인터넷 콘솔창에서 plusResult나 minusResult를 적고 누르면 결과값이 나오게 된다.
