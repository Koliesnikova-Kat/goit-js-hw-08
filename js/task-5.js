function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonClick = document.querySelector(".change-color");

function handleClick(event) {
  event.preventDefault();
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = getRandomHexColor();
  const color = document.querySelector(".color");
  color.textContent = bodyColor.style.backgroundColor;
}

buttonClick.addEventListener("click", handleClick);
