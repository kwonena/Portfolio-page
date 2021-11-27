const content = "Hi. I'm Front-end Developer,\n Kwon Ena!";
const text = document.querySelector(".intro-text");
let i = 0;

// intro 텍스트 타이핑 효과
function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200);
