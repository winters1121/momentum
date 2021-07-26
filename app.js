// 보통은 id 값보단 className을 사용하거나, 둘다 사용한다.
// h1 태그를 복사해서 5개로 만들고 class 값을 hello로 지정하겠다.
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// 가끔은 많은 element를 한번에 가지고 와야하는 경우가 있을때, getElementsByClassName 사용!

// h1 하나를 남기고 다 지우고 div 태그로 감싸보자. 대신 hello란 class값을 h1은 없고 div만 가지고 있는 상태에서 이 h1을 가지고 오는 것을 해볼거야.
// const title = document.getElementsByTagName("h1");
// console.log(title);

// element를 가져오는 방법 중에 최고는 querySelector와 querySelectorAll 함수야.

const title = document.querySelector(".hello h1");
console.log(title);
// querySelector란 element를 CSS 방식으로 검색할 수 있어. 즉, hello란 class 내부에 있는 h1을 가지고 올 수 있다는 의미. CSS selector라서 .hello에 있는 h1 태그라는 의미.

// 이번엔 .hello안에 h1 형태가 2개 더 있다고 가정해보자. 이때 querySelector를 사용하면 console 창엔 하나의 값만 출력된다.
// 이 강의에선 querySelector만 사용할 거야. 만약 id를 찾고 싶다하더라도 querySelector를 통해 찾을 수 있으니 걱정말고 CSS에서 id값을 #으로 전달하니까 마찬가지로 querySelector안에 #hello를 적어주면 돼.
const title = document.querySelector("#hello");
const title = document.getElementById("hello");
// 위 2개는 같은 일은 한다고 보면 돼! 근데 hello란 id값을 가진 태그 하위의 form 태그를 가져오고 싶다거나 할땐, querySelector가 가장 효율적으로 활용할 수 있기에 querySelector를 사용하는 것을 추천한다는 것! 왜냐하면 getElement 등은 하위 태그를 소환할 수 없어서 그렇다!
