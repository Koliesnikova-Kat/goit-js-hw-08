const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onFieldInput = (event) => {
  event.preventDefault();
  const trimmedNameInput = nameInput.value.trim();
  if (trimmedNameInput !== "") {
    nameOutput.textContent = nameInput.value.trim();
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", onFieldInput);
