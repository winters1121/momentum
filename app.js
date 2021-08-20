const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
  h1.style.color = "green";
}

function handleTitleOver() {
  h1.innerHTML = "mouse is over!";
}
function handleTitleOut() {
  h1.innerHTML = "Mouse is gone!";
}

function handleTitleDbClick() {
  h1.style.border = "2px dotted black";
}
function handleResize() {
  document.body.style.backgroundColor = "tomato";
} // h1은 document.title하곤 완전히 달라. body, head, title 태그의 경우 document에서 중요하기에 디폴트로 존재하기에 데려올 수 있는 것이고! 나머지 element들은 querySelector로 가져와야 해!
function handleCopy() {
  alert("어머 어딜만져!");
}
function handleOffline() {
  alert("She's gone");
}
function handleOnline() {
  alert("Winter is coming!");
}
h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick 로 표현가능! 즉, 2가지로 event사용 가능하다. 근데 니코쌤은 전자의 방식을 더 선호.
h1.addEventListener("mouseover", handleTitleOver);
h1.addEventListener("mouseout", handleTitleOut);
h1.addEventListener("dblclick", handleTitleDbClick);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
