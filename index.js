const rangeInput = document.querySelector("#range-form input");
const chosenForm = document.querySelector("#chosen-form");
const chosenInput = document.querySelector("#chosen-form input");
const printFormText1 = document.querySelector("#print-form span");
const printFormText2 = document.querySelector("#print-form span:last-child");

function onChosenSubmitClick(event) {
  event.preventDefault();
  const machineNum = Math.ceil(Math.random() * rangeInput.valueAsNumber);
  const printText = `You chose: ${chosenInput.valueAsNumber}, the  machine chose: ${machineNum}`;

  printFormText1.innerText = printText;
  if (machineNum === chosenInput.valueAsNumber) {
    printFormText2.innerText = "You Won!!";
  } else {
    printFormText2.innerText = "You lost!";
  }
}

chosenForm.addEventListener("submit", onChosenSubmitClick);