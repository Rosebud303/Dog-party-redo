const changeButton  =   document.querySelector(".name-button");
const nameInput     =   document.querySelector(".name-input");

changeButton.addEventListener("click", changeName)

function changeName(event) {
  event.preventDefault();
  const name = document.querySelector(".dog-name");
  name.innerText = nameInput.value;
  clearInputs();
}

function clearInputs() {
  nameInput.value = "";
}