const title = document.querySelector("div.hello h1");

function handleTitleClick() {
  title.style.color = "green";
}

title.addEventListener("click", handleTitleClick);

function handleTitleOver() {
  title.innerHTML = "mouseover!";
}

title.addEventListener("mouseover", handleTitleOver);

function handleTitleDbClick() {
  title.style.border = "2px dotted black";
}

title.addEventListener("dblclick", handleTitleDbClick);
