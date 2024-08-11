const registerForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  const registerData = {};
  registerData.email = `${trimmedEmail}`;
  registerData.password = `${trimmedPassword}`;

  console.log(registerData);
  form.reset();
}

registerForm.addEventListener("submit", handleSubmit);
