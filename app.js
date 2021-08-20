const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (h1.style.color === "blue") {
    h1.style.color = "tomato";
  } else {
    h1.style.color = "blue";
  } // h1.style.color를 여러번 열거하는 것보단 변수에 저장하는 것이 좀더 깔끔.
  h1.style.color = newColor; // 이렇게 CSS를 JS에서 표현할 수도 있지만, 니코쌤은 CSS에서 사용하는 게 더 나으니, 다음 시간에 다시 알려줄 계획.
}

h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick 로 표현가능! 즉, 2가지로 event사용 가능하다. 근데 니코쌤은 전자의 방식을 더 선호.
