const button = document.querySelector(".change-color");
const spanColorValue = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onClick);
 
function onClick(evt) {
  let randomClr = getRandomHexColor();
  spanColorValue.textContent = randomClr;
  body.style.backgroundColor = randomClr;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
