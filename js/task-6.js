function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const enteredNumber = document.querySelector("[type='number']");
const controls = document.querySelector("#controls");
const list = document.querySelector("#boxes");
const buttonCreateClick = document.querySelector("[data-create]");
const buttonDestroyClick = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  let markup = [];
  let divSize = 30;

  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");

    divElement.classList.add("div-element");
    divElement.style.width = `${divSize}px`;
    divElement.style.height = `${divSize}px`;
    divElement.style.backgroundColor = getRandomHexColor();

    markup.push(divElement);

    divSize += 10;
  }

  list.innerHTML = "";
  list.append(...markup);

  enteredNumber.value = "";
}

function destroyBoxes(event) {
  event.preventDefault();
  list.innerHTML = "";
}

buttonCreateClick.addEventListener("click", (event) => {
  event.preventDefault();

  const enteredNumberValue = enteredNumber.value;

  if (enteredNumberValue >= 1 && enteredNumberValue <= 100) {
    createBoxes(enteredNumberValue);
  }

  console.log(list);
});

buttonDestroyClick.addEventListener("click", destroyBoxes);
